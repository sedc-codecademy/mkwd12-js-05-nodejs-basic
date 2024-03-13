import DataService from '../services/data.service.js';
import path from 'path';

const productsPath = path.join(
	import.meta.dirname,
	'..',
	'data',
	'products.json'
);

// The model is the only one that is allowed to "talk" to the DataBase
// It is responsible for reading and writing data to the database by using the helper DataService

export default class ProductModel {
	static async getAll() {
		// readData is a static method from the DataService class
		// it is used to read data from the database (array of object products)
		return DataService.readData(productsPath);
	}

	static async getById(id) {
		// we reuse the getAll method to get all products
		const products = await this.getAll();

		// we use the find method to find the product with the given id or return undefined if not found
		const product = products.find(product => product.id === id);

		if (!product) {
			throw new Error('Product not found.');
		}

		return product;
	}

	static async create(product) {
		// we reuse the getAll method to get all products
		const products = await this.getAll();

		// we use the push method to add the new product to the products array
		products.push(product);

		// we use the writeData method to write the new products array to the database
		await DataService.writeData(productsPath, products);

		// we return the newly created product
		return product;
	}

	static async update(id, product) {
		// we reuse the getAll method to get all products
		const products = await this.getAll();

		// we use the findIndex method to find the index of the product with the given id
		const index = products.findIndex(product => product.id === id);

		// we use update the product at the given index with the new product
		products[index] = product;

		// we use the writeData method to write the new products array to the database
		await DataService.writeData(productsPath, products);

		// we return the newly updated product
		return product;
	}

	static async delete(id) {
		// we reuse the getAll method to get all products
		const products = await this.getAll();

		// we use the filter method to filter out the product with the given id
		const filteredProducts = products.filter(product => product.id !== id);

		// we use the writeData method to write the new products array to the database
		await DataService.writeData(productsPath, filteredProducts);
	}

	static async deleteAll() {
		await DataService.writeData(productsPath, []);
	}
}
