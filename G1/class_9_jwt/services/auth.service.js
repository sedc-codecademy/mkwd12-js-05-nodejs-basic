import { BadRequest } from '../consts/errors.const.js';
import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import JwtService from './jwt.service.js';

export default class AuthService {
	static async register({ username, password }) {
		// check if user already exists
		const existingUser = await UserModel.getUserByUsername(username);

		// if user exists throw error
		if (existingUser) {
			throw new BadRequest(`User with username: ${username} already exists!`);
		}

		// hash password using bcrypt
		const hashedPassword = await bcrypt.hash(password, 10);

		// create new user object. We are saving hashed password to the database
		const user = {
			id: uuidv4(),
			username,
			password: hashedPassword,
			createdAt: new Date().toISOString(),
		};

		// create user in the database but return only user without password
		const { password: nonNeededPassword, ...restOfUser } =
			await UserModel.create(user);

		return restOfUser;
	}

	static async login({ username, password }) {
		// check if user exists
		const existingUser = await UserModel.getUserByUsername(username);

		// if user does not exist throw error
		if (!existingUser) {
			throw new BadRequest('Wrong credentials!');
		}

		// check if password is matching by comparing hashed password from database with password from request (using bcrypt)
		const arePasswordsMatching = await bcrypt.compare(
			password,
			existingUser.password
		);

		// if passwords are not matching throw error
		if (!arePasswordsMatching) {
			throw new BadRequest('Wrong credentials!');
		}

		// create access and refresh token
		const token = JwtService.createAccessToken(existingUser.id);
		const refreshToken = JwtService.createRefreshToken(existingUser.id);

		// save refresh token to the database (within the user object)
		await UserModel.saveRefreshToken(existingUser.id, refreshToken);

		// return user object without password, access and refresh token
		return {
			user: existingUser,
			token,
			refreshToken,
		};
	}

	static async refreshToken(refreshToken) {
		// 1. Verify refresh token
		const { userId } = JwtService.verifyRefreshToken(refreshToken);

		// 2. Get user from the database
		const user = await UserModel.getUserById(userId);

		// 3. Throw error if user not found
		if (!user) {
			throw new BadRequest('User not found.');
		}

		// 4. Check if refresh token is in the user object in the DB (if not throw error)
		await UserModel.checkRefreshToken(userId, refreshToken);

		// 5. Delete old refresh token from the user object in the DB (to prevent multiple refresh tokens)
		await UserModel.deleteRefreshToken(userId, refreshToken);

		// 6. Create new tokens (Access Token + Refresh Token)
		const token = JwtService.createAccessToken(userId);
		const newRefreshToken = JwtService.createRefreshToken(userId);

		// 7. Save new refresh token to the user object in the DB
		await UserModel.saveRefreshToken(userId, newRefreshToken);

		// 8. Return new tokens
		// Not the FE can use the new ACCESS token to automatically login the user.
		// The refresh token is used to get a new access token when this one expires.
		return {
			token,
			refreshToken: newRefreshToken,
		};
	}

	static async logout(refreshToken) {
		// 1. Verify refresh token
		const { userId } = JwtService.verifyRefreshToken(refreshToken);

		// 2. Throw error if user not found
		if (!userId) {
			throw new BadRequest(`Something went wrong`);
		}

		// 3. Delete refresh token from the user object in the DB
		await UserModel.deleteRefreshToken(userId, refreshToken);
	}
}
