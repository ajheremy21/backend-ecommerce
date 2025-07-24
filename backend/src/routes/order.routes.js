import express from 'express';
import {
  confirmarPedido,
  getPedidosPorUsuario,
  actualizarPago,
  eliminarPedido
} from '../controllers/order.controller.js';

import verifyToken from '../middlewares/auth.middleware.js';

const router = express.Router();

//  Confirmar pedido desde carrito
router.post('/confirm', verifyToken, confirmarPedido);

//  Ver pedidos del usuario
router.get('/usuario/:id', verifyToken, getPedidosPorUsuario);

//  Marcar como pagado
router.put('/:id/pago', verifyToken, actualizarPago);

// Eliminar orden
router.delete('/:id', verifyToken, eliminarPedido);

export default router;