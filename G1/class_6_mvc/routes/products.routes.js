import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';

const router = Router();

// /products
router.get('', ProductController.getProducts);
router.get('/:id', ProductController.getProduct);
router.post('', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.patch('/:id/price', ProductController.updateProductPrice);
router.delete('/:id', ProductController.deleteProduct);

export default router;
