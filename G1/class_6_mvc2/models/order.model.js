import DataService from '../services/data.service.js';
import path from 'path';

const ordersPath = path.join(import.meta.dirname, '..', 'data', 'orders.json');

export default class OrderModel {
	static getAll() {
		return DataService.readData(ordersPath);
	}

	static async create(order) {
		const orders = await this.getAll();
		orders.push(order);
		return DataService.writeData(ordersPath, orders);
	}
}
