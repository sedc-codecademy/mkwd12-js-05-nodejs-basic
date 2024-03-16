import { BadRequest } from '../consts/errors.const.js';
import AuthService from '../services/auth.service.js';

export default class AuthController {
	static async register(req, res) {
		try {
			const user = await AuthService.register(req.body);

			res.send(user);
		} catch (error) {
			if (error instanceof BadRequest) {
				res.status(400).send({ message: error.message });
			} else {
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async login(req, res) {
		try {
			const user = await AuthService.login(req.body);
			req.session.isLoggedIn = true;
			console.log('login', req.session);
			res.send(user);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
