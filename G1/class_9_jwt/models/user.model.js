import { BadRequest, NotFound } from '../consts/errors.const.js';
import DataService from '../services/data.service.js';
import path from 'path';

const usersPath = path.join(import.meta.dirname, '..', 'data', 'users.json');

export default class UserModel {
	// Get all users from the DB
	static getAll() {
		return DataService.readData(usersPath);
	}

	// Get a user by its id. If user is not found, we return undefined
	static async getUserById(id) {
		const users = await this.getAll();
		return users.find(user => user.id === id);
	}

	// Get a user by its username. If user is not found, we return undefined
	static async getUserByUsername(username) {
		const users = await this.getAll();
		return users.find(user => user.username === username);
	}

	// Create a new user
	static async create(user) {
		const users = await this.getAll();
		users.push(user);
		await DataService.writeData(usersPath, users);
		return user;
	}

	static async saveRefreshToken(userId, refreshToken) {
		const users = await this.getAll();

		const index = users.findIndex(u => u.id === userId);

		if (index < 0) {
			throw new NotFound('User not found.');
		}

		// users[index].refreshTokens.push(refreshToken);
		// same as above
		users[index] = {
			...users[index],
			refreshTokens: [...(users[index].refreshTokens || []), refreshToken],
		};

		DataService.writeData(usersPath, users);
	}

	static async checkRefreshToken(userId, refreshToken) {
		const users = await this.getAll();

		const user = users.find(u => u.id === userId);

		if (!user) {
			throw new BadRequest('User not found');
		}

		const isIncluded = user.refreshTokens.includes(refreshToken);

		if (!isIncluded) {
			throw new BadRequest('Bad request');
		}
	}

	static async deleteRefreshToken(userId, refreshToken) {
		const users = await this.getAll();

		const index = users.findIndex(u => u.id === userId);

		users[index].refreshTokens = users[index].refreshTokens.filter(
			rt => rt !== refreshToken
		);

		await DataService.writeData(usersPath, users);
	}
}
