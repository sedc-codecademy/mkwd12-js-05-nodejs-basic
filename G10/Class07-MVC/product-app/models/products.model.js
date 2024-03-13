import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl); // C:\Users\Aneta Stankovska\SEDC12\05.NodeJSBasic\mkwd12-js-05-nodejs-basic\G10\Class07-MVC\product-app\models\products.model.js
const filePathDirectory = path.dirname(currentFilePath); // C:\Users\Aneta Stankovska\SEDC12\05.NodeJSBasic\mkwd12-js-05-nodejs-basic\G10\Class07-MVC\product-app\models
const productsPath = path.join(
  filePathDirectory,
  "..",
  "data",
  "products.json"
); // join paths (directory path + 1 level up + data directory + products.json)

export default class ProductModel {
  static async getAll() {
    return await DataService.readData(productsPath);
  }

  static async getById(id) {
    const products = await DataService.readData(productsPath);
    const foundProduct = products.find((product) => product.id === id);
    return foundProduct;
  }

  static async create(body) {
    const products = await this.getAll();
    products.push(body);
    await DataService.writeData(productsPath, products);
    return body;
  }

  static async update(id, body) {
    const products = await this.getAll();
    const index = products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new Error("User not found");
    }
    products[index] = body; // assigns the new data without keeping the properties that have not been changed because the method is PUT
    await DataService.writeData(productsPath, products);
    return products[index];
  }

  static async delete(id) {
    const products = await this.getAll();
    const filteredProducts = products.filter((product) => product.id !== id);
    await DataService.writeData(productsPath, filteredProducts);
  }
}
