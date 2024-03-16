import AuthService from '../services/auth.service.js';

export default class AuthController {
	static async register(req, res) {
		try {
			AuthService.register(req.body);

			res.send();
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
