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

// authSession is a middleware that enables usage of session on these routes.
// validateAuthSession is a middleware that checks if the user is authenticated.
// If the user is not authenticated, the middleware will return a 403 status code and not call the next middleware / route handler
// If the user is authenticated, the middleware will call the next middleware / route handler

export default router;
