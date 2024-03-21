import ProductModel from "../models/product.model.js";

export default class ProductController {
  static async getProducts(req, res) {
    try {
      const products = await ProductModel.getAll();
      res.send(products);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getProduct(req, res) {
    try {
      const product = await ProductModel.getById(req.params.id);
      res.send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const productBody = req.body;
      const product = await ProductModel.create(productBody);
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const productBody = req.body;
      const product = await ProductModel.update(req.params.id, productBody);
      res.send(product);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      await ProductModel.delete(req.params.id);
      res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
