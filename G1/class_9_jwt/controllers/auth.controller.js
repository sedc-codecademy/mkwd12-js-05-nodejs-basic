import { BadRequest } from '../consts/errors.const.js';
import AuthService from '../services/auth.service.js';

export default class AuthController {
	// Register user is basically creating a new user
	static async register(req, res) {
		// req.body:
		// username: test@mail.com
		// password: Password123
		try {
			const user = await AuthService.register(req.body);

			res.status(201).send(user);
		} catch (error) {
			if (error instanceof BadRequest) {
				res.status(400).send({ message: error.message });
			} else {
				res.status(500).send({ message: error.message });
			}
		}
	}

	// Login user is basically checking if the user exists and if the password is correct
	static async login(req, res) {
		// req.body:
		// username: test@mail.com
		// password: Password123
		try {
			const response = await AuthService.login(req.body);

			res.send(response);
		} catch (error) {
			if (error instanceof BadRequest) {
				res.status(400).send({ message: error.message });
			} else {
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async logout(req, res) {
		try {
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
