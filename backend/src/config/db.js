//configuración de la base de datos
import mongoose from 'mongoose';

async function connectDB() { // Función para conectar a la base de datos MongoDB
  try {
    await mongoose.connect(process.env.MONGO_URI); // Conexión a MongoDB
    console.log('Conectado a la base de datos MongoDB'); // Mensaje de éxito al conectar

  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message); // Mensaje de error si falla la conexión
  }
}

export default connectDB; // Exportar la función para usarla en otros archivos