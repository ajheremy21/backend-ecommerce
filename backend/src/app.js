import express from 'express'; // Importar Express para crear la aplicación
import bodyParser from 'body-parser'; // Importar body-parser para manejar el cuerpo de las solicitudes


// Importar las rutas de los diferentes servicios
import cartRoutes from './routes/cart.routes.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';
import authRoutes from './routes/auth.routes.js';


const app = express();
app.use(bodyParser.json()); // Middleware para parsear JSON 



// rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Log del error en la consola
  res.status(500).json({ message: 'Error interno del servidor' }); // Respuesta de error al cliente
});

export default app; // Exportar la aplicación Express para usarla en otros archivos