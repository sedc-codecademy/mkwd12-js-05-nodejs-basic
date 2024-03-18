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
}
