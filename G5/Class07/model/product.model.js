import { readProducts, addProduct } from "../services/products.service.js";
import { Product } from "../entities/product.entity.js";
import { v4 as uuid } from "uuid";

export class ProductModel {
  async listProducts() {
    console.log(
      "#3[MODEL] - The model will proccess the request from the controller"
    );
    // Make call to db, compute some logic etc.
    const products = await readProducts();

    console.log(
      "#4[MODEL] - After the computation is done the model returns the data back to the controller"
    );
    return products;
  }

  async createProduct(newProductBody) {
    // #3
    const id = uuid();

    const product = new Product(
      id,
      newProductBody.name,
      newProductBody.color,
      newProductBody.size,
      newProductBody.material,
      newProductBody.price
    );

    await addProduct(product)
    
    // #4
    return id;
  }
}
