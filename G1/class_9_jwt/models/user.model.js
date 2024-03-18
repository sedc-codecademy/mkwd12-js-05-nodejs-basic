import DataService from '../services/data.service.js';
import path from 'path';

const usersPath = path.join(import.meta.dirname, '..', 'data', 'users.json');

export default class UserModel {
	static getAll() {
		return DataService.readData(usersPath);
	}

	static async getUserById(id) {
		const users = await this.getAll();
		return users.find(user => user.id === id);
	}

	static async getUserByUsername(username) {
		const users = await this.getAll();
		return users.find(user => user.username === username);
	}

	static async create(user) {
		const users = await this.getAll();
		users.push(user);
		await DataService.writeData(usersPath, users);
		return user;
	}
}
