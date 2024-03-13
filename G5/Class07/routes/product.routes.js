import { Router } from "express"
import { ProductController } from "../controller/product.controller.js";

const productsRouter = Router();
const productController = new ProductController();

productsRouter.get('/products', async (req, res) => {
    productController.listProducts(req, res)
});

productsRouter.post('/products', async (req, res) => {
    productController.createProduct(req, res)
})

/**
 * REQUIREMENT:
 * - Create functionality to get product by ID
 * - USE MVC
 * - Route > Controller > Model 
 */

productsRouter.get('/products/:id', async (req, res) => {
    // Call Coresponding controller
});

export default productsRouter