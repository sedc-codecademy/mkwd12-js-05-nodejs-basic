import { Router } from 'express';
import productsRouter from '../routes/products.routes.js';

// This is the main router. All main routes will be added here.
const router = Router();

// /api
router.use('/products', productsRouter);

export default router;
