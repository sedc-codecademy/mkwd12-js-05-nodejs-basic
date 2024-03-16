import { BadRequest } from '../consts/errors.const.js';
import AuthService from '../services/auth.service.js';

export default class AuthController {

	// Register user is basically creating a new user
	static async register(req, res) {
		try {
			// Call register method from AuthService with request body that contains credentials
			const user = await AuthService.register(req.body);
			// Send user as response
			res.send(user);
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
			// Call login method from AuthService with request body that contains credentials
			const user = await AuthService.login(req.body);
			// If user exists and password is correct, set isLoggedIn and userId in session
			// If the credentials were not correct, the login method would throw an error and the catch block would be executed
			req.session.isLoggedIn = true;
			req.session.userId = user.id;

			// Send user as response
			res.send(user);
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
			// Set isLoggedIn and userId in session to false
			req.session.isLoggedIn = false;
			// Set userId in session to null
			req.session.userId = null;
			// Send back positive status code
			res.sendStatus(204);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
