// This middleware is used to prevent users for accessing routes that require authentication

const validateAuthSession = (req, res, next) => {
	// 1. Checking if user is authenticated
	const isLoggedIn = req.session.isLoggedIn;


	if (isLoggedIn) {
		// 2. If user is auth continue to the next middleware or route handler
		next();
	} else {
		// 2. If user is not auth throw an error and prevent the user from accessing the route
		res.status(403).send({ message: 'Forbidden' });
	}
};

export default validateAuthSession;
