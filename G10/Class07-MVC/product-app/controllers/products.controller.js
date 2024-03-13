import ProductService from "../services/products.service.js";

export default class ProductController {
  static async getProducts(req, res) {
    try {
      const products = await ProductService.getProducts();
      res.send(products);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getProduct(req, res) {
    try {
      const product = await ProductService.getProduct(req.params.id);
      res.send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const productBody = req.body;
      const product = await ProductService.createProduct(productBody);
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const product = await ProductService.updateProduct(
        req.params.id,
        req.body
      );
      res.send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateProductPrice(req, res) {
    try {
      const product = await ProductService.updateProductPrice(
        req.params.id,
        req.body.price
      );
      res.send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(204).send({ message: "Product deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
