import DataService from '../services/data.service.js';
import path from 'path';

const usersPath = path.join(import.meta.dirname, '..', 'data', 'users.json');

export default class UserModel {
	static getAll() {
		// Return Promise of all users from users.json
		return DataService.readData(usersPath);
	}

	static async getUserByUsername(username) {
		const users = await this.getAll();
		// Return a single user that is found by username, or an undefined value if no user is found
		return users.find(user => user.username === username);
	}

	static async create(user) {
		// Get all users
		const users = await this.getAll();
		// Add the new user to the array of users
		users.push(user);
		// Write the new array of users to the users.json file
		await DataService.writeData(usersPath, users);
		// Return the new user
		return user;
	}
}
