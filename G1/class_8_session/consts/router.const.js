import { Router } from 'express';
import productsRouter from '../routes/products.routes.js';
import ordersRouter from '../routes/orders.routes.js';
import authRouter from '../routes/auth.routes.js';

// This is the main router. All main routes will be added here.
const router = Router();

// /api
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/auth', authRouter);

export default router;
