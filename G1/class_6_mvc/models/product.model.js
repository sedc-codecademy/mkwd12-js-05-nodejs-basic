import DataService from '../services/data.service.js';
import path from 'path';

const productsPath = path.join(
	import.meta.dirname,
	'..',
	'data',
	'products.json'
);

export default class ProductModel {
	static async getAll() {
		return DataService.readData(productsPath);
	}

	static async getById(id) {
		const products = await this.getAll();

		return products.find(product => product.id === id);
	}

	static async create(product) {
		const products = await this.getAll();

		products.push(product);

		await DataService.writeData(productsPath, products);

		return product;
	}

	static async update() {}

	static async delete() {}
}
