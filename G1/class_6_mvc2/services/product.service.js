import { v4 as uuidv4 } from 'uuid';
import ProductModel from '../models/product.model.js';

// The service is responsive for all business logic
// Business logic is the logic that is not generic, yet specific to the application (this implementation)
// The service doesn't care who calls it, it just does its job
// The service doesn't care where we get the data from, which database we use, etc.

export default class ProductService {
	static async getProducts() {
		// Get all products from the Model. We don't care where does the Model get the data from
		return ProductModel.getAll();
	}

	static getProduct(id) {
		// Get the product by id from the Model. We don't care where does the Model get the data from
		return ProductModel.getById(id);
	}

	static async createProduct(body) {
		// Here we construct the product object and pass it to the Model to be created in the DataBase
		const product = {
			...body,
			id: uuidv4(),
			createdAt: new Date().toISOString(),
		};

		// We don't care how the Model creates the product, we just pass it the product object
		const createdProduct = await ProductModel.create(product);

		// We return the created product to the controller or any other caller of this method
		return createdProduct;
	}

	static async updateProduct(id, body) {
		// We get the product by id to check if it exists (implementation pending...)
		const product = await this.getProduct(id);

		// We construct the updated product object and pass it to the Model to be updated in the DataBase
		const toBeUpdatedProduct = {
			...body,
			id,
			updatedAt: new Date().toISOString(),
		};

		// We don't care how the Model updates the product, we just pass it the updated product object
		const updatedProduct = await ProductModel.update(id, toBeUpdatedProduct);

		// We return the updated product to the controller or any other caller of this method
		return updatedProduct;
	}

	static async updateProductPrice(id, price) {
		// We get the product by id to check if it exists (implementation pending...)
		const product = await this.getProduct(id);

		// We construct the updated product object and pass it to the Model to be updated in the DataBase
		// We only update the price and the updatedAt fields, the rest of the fields remain the same
		const toBeUpdatedProduct = {
			...product,
			price,
			id,
			updatedAt: new Date().toISOString(),
		};

		// We don't care how the Model updates the product, we just pass it the updated product object
		const updatedProduct = await ProductModel.update(id, toBeUpdatedProduct);

		// We return the updated product to the controller or any other caller of this method
		return updatedProduct;
	}

	static deleteProduct(id) {
		// We don't care how the Model deletes the product, we just pass the product id
		return ProductModel.delete(id);
	}

	static async deleteAllProducts() {
		await ProductModel.deleteAll();
	}
}
