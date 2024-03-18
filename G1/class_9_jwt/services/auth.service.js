import { BadRequest } from '../consts/errors.const.js';
import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import JwtService from './jwt.service.js';

export default class AuthService {
	static async register({ username, password }) {
		const existingUser = await UserModel.getUserByUsername(username);

		if (existingUser) {
			throw new BadRequest(`User with username: ${username} already exists!`);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = {
			id: uuidv4(),
			username,
			password: hashedPassword,
			createdAt: new Date().toISOString(),
		};

		const { password: nonNeededPassword, ...restOfUser } =
			await UserModel.create(user);

		return restOfUser;
	}

	static async login({ username, password }) {
		const existingUser = await UserModel.getUserByUsername(username);

		if (!existingUser) {
			throw new BadRequest('Wrong credentials!');
		}

		const arePasswordsMatching = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!arePasswordsMatching) {
			throw new BadRequest('Wrong credentials!');
		}

		const token = JwtService.createAccessToken(existingUser.id);
		const refreshToken = JwtService.createRefreshToken(existingUser.id);

		return {
			user: existingUser,
			token,
			refreshToken,
		};
	}
}
