import { v4 as uuidv4 } from 'uuid';
import ProductModel from '../models/product.model.js';

export default class ProductService {
	static async getProducts() {
		return ProductModel.getAll();
	}

	static getProduct(id) {
		return ProductModel.getById(id);
	}

	static async createProduct(body) {
		const product = {
			...body,
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};

		const createdProduct = await ProductModel.create(product);

		return createdProduct;
	}

	static async updateProduct(id, body) {
		const product = await this.getProduct(id);

		const toBeUpdatedProduct = {
			...body,
			id,
			updatedAt: new Date().toISOString(),
		};

		const updatedProduct = await ProductModel.update(id, toBeUpdatedProduct);

		return updatedProduct;
	}

	static async updateProductPrice(id, price) {
		const product = await this.getProduct(id);

		const toBeUpdatedProduct = {
			...product,
			price,
			id,
			updatedAt: new Date().toISOString(),
		};

		const updatedProduct = await ProductModel.update(id, toBeUpdatedProduct);

		return updatedProduct;
	}

	static deleteProduct(id) {
		return ProductModel.delete(id);
	}
}
