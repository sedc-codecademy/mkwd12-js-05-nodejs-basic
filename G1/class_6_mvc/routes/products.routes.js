import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';

// These are the routes for the products
const router = Router();

// Routes is responsible for listing the routes, and calling the respective controller method
// No logic should be implemented here, only the reference to the controller method

// /products
router.get('', ProductController.getProducts); // Get all products
router.get('/:id', ProductController.getProduct); // Get a product by id
router.post('', ProductController.createProduct); // Create a new product
router.put('/:id', ProductController.updateProduct); // Update a product
router.patch('/:id/price', ProductController.updateProductPrice); // Update a product price
router.delete('/:id', ProductController.deleteProduct); // Delete a product

export default router;
