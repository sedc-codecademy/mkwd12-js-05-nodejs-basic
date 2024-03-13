import { Router } from 'express';
import OrderController from '../controllers/orders.controller.js';

const router = new Router();

// /orders
router.get('/:id', OrderController.getOrder); // Get order by ID
router.get('/user/:userId', OrderController.getUserOrders); // Get orders by user
router.post('', OrderController.createOrder); // Create order
router.delete('/:id', OrderController.cancelOrder);
// Cancel order

export default router;
