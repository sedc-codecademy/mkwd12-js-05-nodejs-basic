import JwtService from '../services/jwt.service.js';
import UserModel from '../models/user.model.js';

const tokenValidator = (req, res, next) => {
	try {
		// 1. Get auth header
		const authHeader = req.headers.authorization;

		// 2. Check if there is value
		if (!authHeader) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		// 3. Extract the token
		const token = authHeader.split(' ')[1];

		// 4. Check if token has value
		if (!token) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		// 5. Verify the JWT token
		const { userId } = JwtService.verifyAccessToken(token);

		// 6. Check if user exists
		const user = UserModel.getUserById(userId);

		if (!user) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		next();
	} catch (error) {
		res.status(401).send({ message: 'Unauthorized' });
	}
};

export default tokenValidator;
