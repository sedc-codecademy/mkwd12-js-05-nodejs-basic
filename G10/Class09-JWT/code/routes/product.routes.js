import { Router } from "express";
import ProductController from "../contollers/product.controller.js";
import canDeleteOrUpdateProduct from "../middleware/products.middleware.js";

const router = Router();

router.get("", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.post("", ProductController.createProduct);
router.patch("/:id", canDeleteOrUpdateProduct, ProductController.updateProduct);
router.delete(
  "/:id",
  canDeleteOrUpdateProduct,
  ProductController.deleteProduct
);

export default router;
