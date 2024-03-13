import { ProductModel } from "../model/product.model.js";

export class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }

  async listProducts(req, res) {
    console.log("#1[CONTROLLER] - The request arrive at the controller");
    console.log(
      "#2[CONTROLLER] - The controller will call a coresponding method from the model"
    );
    const products = await this.productModel.listProducts();
    console.log(
      "#5[CONTROLLER] - The data returned from the model will be send back with the response to the client"
    );
    res.send(products);
  }

  async createProduct(req, res) {
    // #1
    const requestBody = req.body;
    /**
     * Validate the request body
     */
    const isRequestBodyInvalid =
      !requestBody.name ||
      !requestBody.color ||
      !requestBody.size ||
      !requestBody.price ||
      !requestBody.material;

    if (isRequestBodyInvalid) {
      return res.status(400).send({ message: "Wrong request body" });
    }
    // #2
    const createdProductId = await this.productModel.createProduct(requestBody);

    // #5
    res.send({ message: "Product Created", id: createdProductId });
  }
}
