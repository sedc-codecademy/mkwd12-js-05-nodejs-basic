import { v4 as uuidv4 } from 'uuid';
import OrderModel from '../models/order.model.js';
import ProductModel from '../models/product.model.js';
import { BadRequest } from '../consts/errors.const.js';

export default class OrderService {
	static getOrder(id) {
		// Promise<Order | undefined>
		return OrderModel.getById(id);
	}

	static async getUserOrders(userId) {
		const orders = await OrderModel.getAll();
		return orders.filter(order => order.userId === userId);
	}

	// What? = productId
	// How many? = quantity
	// Who? = userId
	static async createOrder(body) {
		await ProductModel.getById(body.productId);

		if (body.quantity < 1) {
			throw new BadRequest(`Quantity can't be less than 1`);
		}

		const order = {
			...body,
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};

		await OrderModel.create(order);

		return order;
	}

	static cancelOrder(id) {
		return OrderModel.delete(id);
	}
}
