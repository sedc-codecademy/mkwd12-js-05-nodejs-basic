import { BadRequest, NotFound } from '../consts/errors.const.js';
import ProductService from '../services/product.service.js';

// This is the products controller
// It's main responsibility is to:
// 1. receive the request
// 2. return a response
//   - Positive response if all goes well
//   - Negative response (error) if something goes wrong (ex. product can't be found)

export default class ProductController {
	// Each route gets its own controller method
	// Each method handles request and response
	// In each method we ALWAYS handle two cases:
	// 1. SUCCESS - try block - when everything goes right
	// 2. FAILURE - catch block - when error occurs

	static async getProducts(req, res) {
		console.log('products', req.session);
		try {
			// Get all the products from the service, we don't care how in the controller
			const products = await ProductService.getProducts();

			// Return the products to the client
			res.send(products);
		} catch (error) {
			// return a default 500 error response
			res.status(500).send({ message: error.message });
		}
	}

	static async getProduct(req, res) {
		try {
			// pass the id to the service
			const product = await ProductService.getProduct(req.params.id);

			// return the product to the client
			res.send(product);
		} catch (error) {
			if (error instanceof NotFound) {
				// return a 404 error response
				res.status(404).send({ message: error.message });
			} else {
				// return a default 500 error response
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async createProduct(req, res) {
		try {
			// Pass the body to the service
			const product = await ProductService.createProduct(req.body);

			// return the newly created product
			res.status(201).send(product);
		} catch (error) {
			if (error instanceof BadRequest) {
				// return a 400 error response
				res.status(400).send({ message: error.message });
			} else {
				// return a default 500 error response
				res.status(500).send({ message: error.message });
			}
		}
	}

	static async updateProduct(req, res) {
		try {
			// Pass the id and the body to the service
			const product = await ProductService.updateProduct(
				req.params.id,
				req.body
			);
			// return the updated product
			res.send(product);
		} catch (error) {
			// return a default 500 error response
			res.status(500).send({ message: error.message });
		}
	}

	static async updateProductPrice(req, res) {
		try {
			// Pass the id and the price to the service to update the product price
			const product = await ProductService.updateProductPrice(
				req.params.id,
				req.body.price
			);

			// return the updated product to the client
			res.send(product);
		} catch (error) {
			// return a default 500 error response
			res.status(500).send({ message: error.message });
		}
	}

	static async deleteProduct(req, res) {
		try {
			// deleteProduct doesn't return response but still we need to await it, to make sure it doesn't fail
			await ProductService.deleteProduct(req.params.id);

			// return positive status code when it product is deleted
			res.sendStatus(204);
		} catch (error) {
			// return a default 500 error response
			res.status(500).send({ message: error.message });
		}
	}

	static async deleteAllProducts(req, res) {
		try {
			// deleteAllProducts doesn't return response but still we need to await it, to make sure it doesn't fail
			await ProductService.deleteAllProducts();

			// return positive status code when all products are deleted
			res.sendStatus(204);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
