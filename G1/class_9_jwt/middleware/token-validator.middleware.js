import JwtService from '../services/jwt.service.js';
import UserModel from '../models/user.model.js';

const tokenValidator = (req, res, next) => {
	try {
		// 1. Get auth header
		// authorization: Bearer <token>
		// authorization is the default header name for JWT token
		const authHeader = req.headers.authorization;

		console.log('TOKEN:', authHeader);

		// 2. Check if there is value
		// If there is no value, then the user is not authenticated
		if (!authHeader) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		// 3. Extract the token
		// Split the string by space and get the second element
		const token = authHeader.split(' ')[1];

		// 4. Check if token has value
		// If there is no value, then the user is not authenticated
		if (!token) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		// 5. Verify the JWT token
		// If the token is invalid, then the user is not authenticated
		// If verify token is unsuccessful, it will throw an error, which will be caught by the catch block
		const { userId } = JwtService.verifyAccessToken(token);

		// 6. Check if user exists
		// We get the user to verify if the user exists and is active, and to get the user's details
		const user = UserModel.getUserById(userId);

		// If the user does not exist, then the user is not authenticated
		if (!user) {
			res.status(401).send({ message: 'Unauthorized' });
		}

		// if all checks pass, then the user is authenticated and we can proceed to the next middleware / handler
		next();
	} catch (error) {
		// If there is an error, then the user is not authenticated
		res.status(401).send({ message: 'Unauthorized' });
	}
};

export default tokenValidator;
