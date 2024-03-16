import { Router } from 'express';
import productsRouter from '../routes/products.routes.js';
import ordersRouter from '../routes/orders.routes.js';
import authRouter from '../routes/auth.routes.js';
import { authSession } from '../consts/sessions.const.js';

// This is the main router. All main routes will be added here.
const router = Router();

// /api
router.use('/products', authSession, productsRouter);
router.use('/orders', authSession, ordersRouter);
router.use('/auth', authSession, authRouter);

export default router;
