import DataService from '../services/data.service.js';
import path from 'path';
import { NotFound } from '../consts/errors.const.js';

const ordersPath = path.join(import.meta.dirname, '..', 'data', 'orders.json');

export default class OrderModel {
	static getAll() {
		return DataService.readData(ordersPath);
	}

	static async getById(id) {
		// Promise<Order | undefined>
		const orders = await this.getAll();
		const order = orders.find(order => order.id === id);

		if (!order) {
			throw new NotFound('Order not found');
		}

		return order;
	}

	static async create(order) {
		const orders = await this.getAll();
		orders.push(order);
		return DataService.writeData(ordersPath, orders);
	}

	static async delete(id) {
		const orders = await this.getAll();
		const filteredOrders = orders.filter(o => o.id !== id);
		await DataService.writeData(ordersPath, filteredOrders);
	}
}
