import Cart from '../models/cart.model.js';

//crear un carrito
const CartService = {       
  createCart: async (userId) => {
    
    return Cart.create({ userId, items: []});
  },

//obtener un carrito por usuario
getCartByUserId: async (userId) => {
    return Cart.findOne({ userId })
  },

//Obtener todos los carritos
getAllCarts: async () => {
    return Cart.find({});
  },

//Actualizar un carrito
addItem: async (userId, productId, quantity, price) => {
    const cart = await Cart.findOne({ userId });
    const idx = cart.items.findIndex(item => item.productId.toString() === productId);
    if (idx > -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
        cart.items[idx].quantity += quantity;
        cart.items[idx].price = price; // Actualiza el precio 
    } else {
      // Si no está, añade un nuevo item
      cart.items.push({ productId, quantity, price });
    }
    return cart.save(); //recalculará el total automáticamente por el pre-save hook
},

//Actualiza un item del carrito
updateItemQuantity: async (userId, ItemId, quantity) => {
    return Cart.findOneAndUpdate(
      { userId, 'items._id': ItemId },
        { $set: { 'items.$.quantity': quantity }},
        { new: true } 
    );

},

//Eliminar un item del carrito
removeItem: async (userId, itemId) => {
    return Cart.findOneAndUpdate(
        { userId },
        { $pull: { 'items._id': itemId }},
        { new: true }
    );
},

// Vaciar el carrito
clearCart: async (userId) => {
    return Cart.findOneAndUpdate(
        { userId },
        { $set: { items:[], total:0 }},
        { new: true }
    );
}, 

//Eliminar un carrito
deleteCart: async (userId) => {
    return Cart.deleteOne({ userId })
},

// Contar cuantos carritos hay
countCarts: async () => {
    return Cart.countDocuments({});
  },

// Eliminar un producto de todos los carritos
removeProductFromAllCarts: async (productId) => {
    return Cart.updateMany(
      {},
      { $pull: { items: { productId } } }
    );
  }
};

export default CartService; // Exportar el servicio de carrito