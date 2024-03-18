import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

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
}
