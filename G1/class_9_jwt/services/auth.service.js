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

		await UserModel.saveRefreshToken(existingUser.id, refreshToken);

		// return user object without password, access and refresh token
		return {
			user: existingUser,
			token,
			refreshToken,
		};
	}

	static async refreshToken(refreshToken) {
		const { userId } = JwtService.verifyRefreshToken(refreshToken);

		const user = await UserModel.getUserById(userId);

		if (!user) {
			throw new BadRequest('User not found.');
		}

		await UserModel.checkRefreshToken(userId, refreshToken);

		await UserModel.deleteRefreshToken(userId, refreshToken);

		// 1. Create new tokens (Access Token + Refresh Token)
		const token = JwtService.createAccessToken(userId);
		const newRefreshToken = JwtService.createRefreshToken(userId);

		await UserModel.saveRefreshToken(userId, refreshToken);

		return {
			token,
			refreshToken,
		};
	}
}
