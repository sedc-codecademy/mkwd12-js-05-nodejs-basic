import { BadRequest, NotFound } from '../consts/errors.const.js';
import OrderService from '../services/order.service.js';

export default class OrderController {
	static async getUserOrders(req, res) {
		try {
			// Get user orders by user id parameter
			const orders = await OrderService.getUserOrders(req.params.userId);

			// Send orders as response
			res.send(orders);
		} catch (error) {
			// If error happens, send error message as response
			res.status(500).send({ message: error.message });
		}
	}

	static async getOrder(req, res) {
		try {
			// Get order by id parameter
			const order = await OrderService.getOrder(req.params.id);

			// Send order as response
			res.send(order);
		} catch (error) {
			if (error instanceof NotFound) {
				// If order not found, send 404 status code and error message
				res.status(404).send({ message: error.message });
			} else {
				// If error happens, send error message as response
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async createOrder(req, res) {
		try {
			// Create order with request body
			const order = await OrderService.createOrder(req.body);

			// Send order as response
			res.status(201).send(order);
		} catch (error) {
			if (error instanceof NotFound) {
				// If order not found, send 404 status code and error message
				res.status(404).send({ message: error.message });
			} else if (error instanceof BadRequest) {
				// If request body is not valid, send 400 status code and error message
				res.status(400).send({ message: error.message });
			} else {
				// If error happens, send error message as response
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async cancelOrder(req, res) {
		try {
			// Cancel order by id parameter
			await OrderService.cancelOrder(req.params.id);

			// Send 204 status code as response
			res.sendStatus(204);
		} catch (error) {
			// If error happens, send error message as response
			res.status(500).send({ message: error.message });
		}
	}
}
