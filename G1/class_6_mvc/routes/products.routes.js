import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';

const router = Router();

// /products
router.get('', ProductController.getProducts);
router.get('/:id', ProductController.getProduct);
router.post('', ProductController.createProduct);

export default router;
