import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = Router();

// /auth
router.post('/register', AuthController.register);
// login
// register
// logout

export default router;
