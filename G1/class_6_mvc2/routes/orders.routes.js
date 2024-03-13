import { Router } from 'express';
import OrderController from '../controllers/orders.controller.js';

const router = new Router();

// Get orders by user
// Get order by ID
router.post('', OrderController.createOrder); // Create order
// Cancel order

export default router;
