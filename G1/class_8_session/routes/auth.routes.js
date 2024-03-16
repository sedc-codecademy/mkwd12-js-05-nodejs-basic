import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = Router();

// /auth
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// logout

export default router;
