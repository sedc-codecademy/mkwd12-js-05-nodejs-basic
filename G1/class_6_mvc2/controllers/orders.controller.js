import OrderService from '../services/order.service.js';

export default class OrderController {
	static async createOrder(req, res) {
		try {
			const order = await OrderService.createOrder(req.body);

			res.status(201).send(order);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
