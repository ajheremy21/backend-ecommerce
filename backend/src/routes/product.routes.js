import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;