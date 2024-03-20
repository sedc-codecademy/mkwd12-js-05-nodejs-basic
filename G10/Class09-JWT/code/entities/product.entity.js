import { v4 as uuidv4 } from "uuid";

class Product {
  constructor(name, description, stock, price, category) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.category = category;
    this.createdAt = new Date().toISOString();
  }
}

export default Product;
