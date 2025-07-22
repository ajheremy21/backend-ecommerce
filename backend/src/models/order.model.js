import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ],
  total: {
    type: Number,
    required: true
  },
  costoEnvio: {
    type: Number,
    default: 15.00
  },
  entregaEstimada: {
    type: Date,
    default: () => {
      const fecha = new Date();
      fecha.setDate(fecha.getDate() + 3);
      return fecha;
    }
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmado', 'enviado', 'cancelado'],
    default: 'pendiente'
  },
  estadoPago: {
    type: String,
    enum: ['pendiente', 'pagado', 'rechazado'],
    default: 'pendiente'
  }
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);