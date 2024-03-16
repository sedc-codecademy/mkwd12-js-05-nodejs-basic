import { BadRequest } from '../consts/errors.const.js';
import AuthService from '../services/auth.service.js';

export default class AuthController {

	// Register user is basically creating a new user
	static async register(req, res) {
		try {

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
		try {

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
