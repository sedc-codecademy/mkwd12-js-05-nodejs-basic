import ProductService from '../services/product.service.js';

export default class ProductController {
	static async getProducts(req, res) {
		try {
			const products = await ProductService.getProducts();

			res.send(products);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}

	static async getProduct(req, res) {
		try {
			const product = await ProductService.getProduct(req.params.id);

			res.send(product);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}

	static async createProduct(req, res) {
		try {
			const product = await ProductService.createProduct(req.body);

			res.status(201).send(product);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}
