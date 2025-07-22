import express from 'express';
import {
  createCart,
  getCart,
  getAllCarts,
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart,
  deleteCart,
  countCarts,
  removeProductFromAllCarts
} from '../controllers/cart.controller.js'; 

const router = express.Router();

// Rutas del carrito
router.post('/', createCart);                             // Crear carrito
router.get('/', getAllCarts);                             // Obtener todos los carritos                                            
router.get('/:userId', getCart);                          // Obtener carrito por usuario
router.get('/count/all', countCarts);                     // Contar todos los carritos
                                               
router.post('/:userId/items', addItem);                                     // Agregar ítem
router.put('/:userId/items/:itemId', updateItemQuantity);                 // Actualizar cantidad
router.delete('/:userId/items/:itemId', removeItem);                        // Eliminar ítem
router.delete('/:userId', clearCart);                                       // Vaciar carrito
router.delete('/:userId/full', deleteCart);                                 // Eliminar carrito completamente
                                     
router.delete('/remove-product/:productId', removeProductFromAllCarts);     // Quitar producto global

export default router;




