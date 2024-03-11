import express from "express"; // express.Router() when used
import { Router } from "express";
import {
  readProducts,
  addProduct,
  updateProduct,
} from "../services/products.service.js";
import { Product } from "../entities/product.entity.js";
import { v4 as uuidv4 } from "uuid";

const productsRouter = Router();

// localhost:3000/products
productsRouter.get("/products", async (req, res) => {
  try {
    const products = await readProducts();
    res.send(products);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

productsRouter.post("/products", async (req, res) => {
  try {
    const requestBody = req.body;

    const id = uuidv4();

    const product = new Product(
      id,
      requestBody.name,
      requestBody.color,
      requestBody.size,
      requestBody.material,
      requestBody.price
    );

    await addProduct(product);

    res.send({ message: "Created", product: product });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

productsRouter.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id; // the id of the product that we want to edit;

    const newProductValues = req.body;

    await updateProduct(id, newProductValues);

    res.send({message: `Product with id: ${id} was updated.`})
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default productsRouter;
