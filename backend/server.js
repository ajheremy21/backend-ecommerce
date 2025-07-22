import dotenv from 'dotenv';
dotenv.config(); // Cargar las variables de entorno
import app from './src/app.js'; // Importar la aplicación Express
import connectDB from './src/config/db.js'; // Importar la función de conexión a la base de datos

connectDB(); // Llamada a la función para conectar a la base de datos
const PORT = process.env.PORT || 4850; // Puerto por defecto

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
