import { Router } from 'express';
import productsRouter from '../routes/products.routes.js';
import ordersRouter from '../routes/orders.routes.js';
import authRouter from '../routes/auth.routes.js';
import tokenValidator from '../middleware/token-validator.middleware.js';
import path from 'path';

const notFoundPage = path.join(import.meta.dirname, '..', 'views', '404.html');

// This is the main router. All main routes will be added here.
const router = Router();

// /api
// we render the homepage on the /home route
router.get('/home', (req, res) => res.render('home')); //home is the name of the view file home.ejs
router.use('/products', productsRouter);
router.use('/orders', tokenValidator, ordersRouter);
router.use('/auth', authRouter);

// This is a catch all mechanism, which will return a 404 status code and the 404.html page if any route from the ones above is not matched.
router.get('*', (req, res) => res.status(404).sendFile(notFoundPage));

// authSession is a middleware that enables usage of session on these routes.
// validateAuthSession is a middleware that checks if the user is authenticated.
// If the user is not authenticated, the middleware will return a 403 status code and not call the next middleware / route handler
// If the user is authenticated, the middleware will call the next middleware / route handler

export default router;
