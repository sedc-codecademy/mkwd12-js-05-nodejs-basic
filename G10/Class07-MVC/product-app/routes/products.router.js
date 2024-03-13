import { Router } from "express";
import ProductController from "../controllers/products.controller.js";

const router = Router();

router.get("", ProductController.getProducts); // get all products    localhost:3000/products
router.get("/:id", ProductController.getProduct); // get product by id
router.post("", ProductController.createProduct); // create product
router.put("/:id", ProductController.updateProduct); // update product
router.patch("/:id/price", ProductController.updateProductPrice); // update product price
router.delete("/:id", ProductController.deleteProduct); // delete product

export default router;
