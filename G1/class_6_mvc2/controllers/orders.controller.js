import { BadRequest, NotFound } from '../consts/errors.const.js';
import OrderService from '../services/order.service.js';

export default class OrderController {
	static async getUserOrders(req, res) {
		try {
			const orders = await OrderService.getUserOrders(req.params.userId);

			res.send(orders);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}

	static async getOrder(req, res) {
		try {
			const order = await OrderService.getOrder(req.params.id);

			res.send(order);
		} catch (error) {
			if (error instanceof NotFound) {
				res.status(404).send({ message: error.message });
			} else {
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async createOrder(req, res) {
		try {
			const order = await OrderService.createOrder(req.body);

			res.status(201).send(order);
		} catch (error) {
			console.log(error);
			if (error instanceof NotFound) {
				res.status(404).send({ message: error.message });
			} else if (error instanceof BadRequest) {
				res.status(400).send({ message: error.message });
			} else {
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async cancelOrder(req, res) {
		try {
			await OrderService.cancelOrder(req.params.id);

			res.sendStatus(204);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
