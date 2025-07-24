import OrderService from '../services/order.service.js';

export const confirmarPedido = async (req, res, next) => {
  try {
    const pedido = await OrderService.createFromCart(req.user.id);
    res.status(201).json(pedido);
  } catch (err) {
    next(err);
  }
};

export const actualizarPago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { estadoPago } = req.body;

    const pedidoActualizado = await OrderService.updateEstadoPago(id, estadoPago);
    
    if (!pedidoActualizado) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }

    res.status(200).json({
      mensaje: 'Estado de pago actualizado correctamente',
      pedido: pedidoActualizado
    });
  } catch (err) {
    next(err);
  }
};


export const getPedidosPorUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pedidos = await OrderService.getByUser(id);
    res.status(200).json(pedidos);
  } catch (err) {
    next(err);
  }
};

export const eliminarPedido = async (req, res, next) => {
  try {
    const { id } = req.params;
    await OrderService.deleteById(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};