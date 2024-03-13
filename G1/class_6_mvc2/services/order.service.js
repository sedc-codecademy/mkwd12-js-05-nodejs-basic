import { v4 as uuidv4 } from 'uuid';
import OrderModel from '../models/order.model.js';

export default class OrderService {
	static async createOrder(body) {
		// What? = productId
		// How many? = quantity
		// Who? = userId

		const order = {
			...body,
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};

		await OrderModel.create(order);

		return order;
	}
}
