import DataService from '../services/data.service.js';
import path from 'path';
import { NotFound } from '../consts/errors.const.js';

const ordersPath = path.join(import.meta.dirname, '..', 'data', 'orders.json');

export default class OrderModel {
	static getAll() {
		return DataService.readData(ordersPath);
	}

	static async getById(id) {
		// Get all orders
		const orders = await this.getAll();
		// Find the order with the given id
		const order = orders.find(order => order.id === id);

		// If the order is not found, throw an error
		if (!order) {
			throw new NotFound('Order not found');
		}

		// Return the found order
		return order;
	}

	static async create(order) {
		// Get all orders
		const orders = await this.getAll();
		// Add the new order to the list
		orders.push(order);
		// Write the updated list back to the file
		return DataService.writeData(ordersPath, orders);
	}

	static async delete(id) {
		// Get all orders
		const orders = await this.getAll();
		// Filter out the order with the given id
		const filteredOrders = orders.filter(o => o.id !== id);
		// Write the filtered list back to the file
		await DataService.writeData(ordersPath, filteredOrders);
	}
}
