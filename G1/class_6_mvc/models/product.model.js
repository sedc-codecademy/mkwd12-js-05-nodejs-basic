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

	static async update(id, product) {
		const products = await this.getAll();

		const index = products.findIndex(product => product.id === id);

		products[index] = product;

		await DataService.writeData(productsPath, products);

		return product;
	}

	static async delete(id) {
		const products = await this.getAll();

		const filteredProducts = products.filter(product => product.id !== id);

		await DataService.writeData(productsPath, filteredProducts);
	}
}
