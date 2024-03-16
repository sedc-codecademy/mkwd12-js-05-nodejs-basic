import UserModel from '../models/user.model.js';
import { BadRequest, NotFound } from '../consts/errors.const.js';
import { v4 as uuidv4 } from 'uuid';

export default class AuthService {
	static async register({ username, password }) {
		// 1. Does user exist?
		const existingUser = await UserModel.getUserByUsername(username);

		// 2. If user exists => Throw an error
		if (existingUser) {
			throw new BadRequest(`User with ${username} already exists!`);
		}

		// 3. If user doesn't exist => Create the user
		const user = {
			id: uuidv4(),
			username,
			password,
			createdAt: new Date().toISOString(),
		};

		// 4. Return the created user
		return UserModel.create(user);
	}

	static async login({ username, password }) {
		// 1. Check if user with such username exists
		const user = await UserModel.getUserByUsername(username);
		// 2. If it doesn't exist => Throw an error
		// 3. It exists => Check if passwords match
		// 4. It doesn't match => Throw an error
		if (!user || password !== user.password) {
			throw new BadRequest('Bad credentials!');
		}

		// 5. It matches => Celebrate!
		return user;
	}
}
