import session from 'express-session';

export const authSession = session({
	secret: 'user_super_secret_code_123',
	name: 'user_id',
	cookie: {
		maxAge: 5 * 60 * 60 * 1000, //5h * 60m * 60sec * 1000ms
	},
	saveUninitialized: true,
	resave: true,
});
