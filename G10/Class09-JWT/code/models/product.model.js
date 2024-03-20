import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import Product from "../entities/product.entity.js";

const currentFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currentFileURL);
const filePathDirectory = path.dirname(currentFilePath);
const productsPath = path.join(
  filePathDirectory,
  "..",
  "data",
  "products.json"
);

export default class ProductModel {
  static async getAll() {
    return await DataService.readData(productsPath);
  }

  static async getById(id) {
    const products = await DataService.readData(productsPath);
    // const products = await this.getAll();
    const foundProduct = products.find((product) => product.id === id);
    if (!foundProduct) {
      throw new Error("Product not found");
    }
    return foundProduct;
  }

  static async create(body) {
    const products = await this.getAll();
    const { name, description, stock, price, category } = body;
    const product = new Product(name, description, stock, price, category);
    products.push(product);
    await DataService.writeData(productsPath, products);
    return product;
  }

  static async update(id, body) {
    const products = await this.getAll();
    const index = products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new Error("Product not found");
    }
    const updatedProduct = {
      ...products[index], // Copy existing product data
      ...body, // Overwrite with new data
      id,
      updatedAt: new Date().toISOString(),
    };
    products[index] = updatedProduct;
    await DataService.writeData(productsPath, products);
    return products[index];
  }

  static async delete(id) {
    const products = await this.getAll();
    const filteredProducts = products.filter((product) => product.id !== id);
    if (products.length === filteredProducts.length) {
      throw new Error("Product to delete not found");
    }
    await DataService.writeData(productsPath, filteredProducts);
  }
}
