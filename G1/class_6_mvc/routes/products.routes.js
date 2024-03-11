import { Router } from 'express';
import DataService from '../services/data.service.js';
import path from 'path';

const productsPath = path.join(
	import.meta.dirname,
	'..',
	'data',
	'products.json'
);

const router = Router();

// /products
router.get('', async (req, res) => {
	const products = await DataService.readData(productsPath);

	res.send(products);
});

export default router;
