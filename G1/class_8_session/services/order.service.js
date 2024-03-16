import { v4 as uuidv4 } from 'uuid';
import OrderModel from '../models/order.model.js';
import ProductModel from '../models/product.model.js';
import { BadRequest } from '../consts/errors.const.js';

export default class OrderService {
	static getOrder(id) {
		// Here we return the order by id. It returns a Promise, so the promise is returned to the controller. No need to await here
		return OrderModel.getById(id);
	}

	static async getUserOrders(userId) {
		// Here we return the orders by userId. This logic could also be placed in the Model. It's matter of preference.
		const orders = await OrderModel.getAll();
		return orders.filter(order => order.userId === userId);
	}

	// What? = productId
	// How many? = quantity
	// Who? = userId
	static async createOrder(body) {
		// Here we check if the product exists. If it doesn't, we throw an error. This is a good practice to do in the service layer.
		// If an error is thrown by getById method, it will be caught in the controller and the response will be sent to the client.
		// The code will not continue to execute.
		await ProductModel.getById(body.productId);

		// Here we check if the quantity is less than 1. If it is, we throw an error.
		if (body.quantity < 1) {
			throw new BadRequest(`Quantity can't be less than 1`);
		}

		// We only create the order if all the checks pass. We also add an id and createdAt to the order.
		const order = {
			...body,
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};

		// Here we create the order.
		await OrderModel.create(order);

		return order;
	}

	static cancelOrder(id) {
		// Here we delete the order by id. It returns a Promise, so the promise is returned to the controller. No need to await here
		return OrderModel.delete(id);
	}
}
