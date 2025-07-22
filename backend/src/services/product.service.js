import Producto from '../models/product.model.js';

const ProductService = {
  getAll: async () => {
    return await Producto.find();
  },

  getById: async (id) => {
    return await Producto.findById(id);
  },

  create: async (data) => {
    const nuevoProducto = new Producto(data);
    return await nuevoProducto.save();
  },

  update: async (id, data) => {
    return await Producto.findByIdAndUpdate(id, data, { new: true });
  },

  patch: async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  },

  remove: async (id) => {
    return await Producto.findByIdAndDelete(id);
  }
};

export default ProductService;