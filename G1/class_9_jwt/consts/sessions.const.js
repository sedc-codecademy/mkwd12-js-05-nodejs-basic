import session from 'express-session';

// This is a middleware that enables usage of session on routes.
export const authSession = session({
	secret: 'user_super_secret_code_123', // This should be a secret key that is stored in an environment variable (process.env.SECRET_KEY)
	name: 'user_id', // this should be a unique name for the session cookie
	cookie: {
		maxAge: 5 * 60 * 60 * 1000, // the numbers represent time in milliseconds => 5h * 60m * 60sec * 1000ms
	},
	saveUninitialized: true, // determines whether the session should be saved in store (this is complex topic, not important for now)
	resave: true, // this is a flag that enables the session to automatically refresh when the user interacts with the server.
	// Refreshing means that the session will be extended for the time defined in the cookie.maxAge
});
