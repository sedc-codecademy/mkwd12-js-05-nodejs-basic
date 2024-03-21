import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = Router();

// /auth
router.post('/register', AuthController.register); // Create a new user
router.post('/login', AuthController.login); // Login user
router.post('/refresh-token', AuthController.refreshToken); // Refresh token for user
router.post('/logout', AuthController.logout); // Logout user

export default router;
