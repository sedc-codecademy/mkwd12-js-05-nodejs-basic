import UserModel from '../models/user.model.js';
import { BadRequest, NotFound } from '../consts/errors.const.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default class AuthService {
	static async register({ username, password }) {
		// 1. Does user exist?
		const existingUser = await UserModel.getUserByUsername(username);

		// 2. If user exists => Throw an error
		if (existingUser) {
			throw new BadRequest(`User with ${username} already exists!`);
		}

		// 3. Hash the password using bcrypt
		const hashedPassword = await bcrypt.hash(password, 10)

		// 3. If user doesn't exist => Create the user
		const user = {
			id: uuidv4(),
			username,
			password: hashedPassword, // we ALWAYS save the hashed password in the database
			createdAt: new Date().toISOString(),
		};

		// 4. Return the created user (without the password)
		// we are using destructuring to remove the password from the user object
		// notNeededPassword is just a variable name, you can name it whatever you want, can't be "password" as it's already a key in the user object
		// we are using the spread operator to copy all the other properties which are left from the user object to the restOfUser object
		const { password: notNeededPassword, ...restOfUser } =
			await UserModel.create(user);

		// 5. It's created => Celebrate!
		return restOfUser;
	}

	static async login({ username, password }) {
		// 1. Check if user with such username exists
		const user = await UserModel.getUserByUsername(username);

		// 2. If it doesn't exist => Throw an error
		if (!user) {
			// Always return a generic error message, never specify if the user exists or not
			throw new BadRequest('Bad credentials!');
		}

		// 3. It exists => Check if passwords match
		// We compare the hashed password from the database with the password that the user entered, also hashed while comparing
		const doPasswordsMatch = await bcrypt.compare(password, user.password);

		// 4. It doesn't match => Throw an error
		if (!doPasswordsMatch) {
			// Always return a generic error message, never specify if the user exists or not
			throw new BadRequest('Bad credentials!');
		}

		// we are using destructuring to remove the password from the user object
		// notNeededPassword is just a variable name, you can name it whatever you want, can't be "password" as it's already a key in the user object
		// we are using the spread operator to copy all the other properties which are left from the user object to the restOfUser object
		const { password: notNeededPassword, ...restOfUser } = user;

		// 5. It matches => Celebrate!
		return restOfUser;
	}
}
