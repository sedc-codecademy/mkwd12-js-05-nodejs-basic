import jwt from 'jsonwebtoken';

export default class JwtService {
	static createAccessToken(userId) {
		return jwt.sign({ userId }, 'super_secret_access_key', {
			expiresIn: '10m',
		});
	}

	static createRefreshToken(userId) {
		return jwt.sign({ userId }, 'super_secret_refresh_key', {
			expiresIn: '7d',
		});
	}
}
