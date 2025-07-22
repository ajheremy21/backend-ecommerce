import Order from '../models/order.model.js';
import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

const OrderService = {
  createFromCart: async (userId) => {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) throw new Error('Carrito vacío');

    const items = [];
    let total = 0;

    for (const item of cart.items) {
      const producto = item.productId;
      if (producto.stock < item.quantity) throw new Error(`Stock insuficiente para ${producto.nombre}`);
      producto.stock -= item.quantity;
      await producto.save();

      items.push({
        productId: producto._id,
        nombre: producto.nombre,
        cantidad: item.quantity,
        precio: producto.precio
      });

      total += producto.precio * item.quantity;
    }

    const pedido = new Order({
      userId,
      items,
      total,
      estado: 'confirmado'
    });

    await pedido.save();

    cart.items = []; // limpiar carrito
    await cart.save();

    return pedido;
  },

  getByUser: async (userId) => {
    return await Order.find({ userId }).sort({ createdAt: -1 });
  },

  updateEstadoPago: async (orderId, estadoPago) => {
    return await Order.findByIdAndUpdate(orderId, { estadoPago }, { new: true });
  }
  ,
  deleteById: async (orderId) => {
    return await Order.findByIdAndDelete(orderId);
  }
};

export default OrderService;