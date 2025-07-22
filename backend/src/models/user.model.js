import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true,
    trim: true
  },

  dni: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[0-9]{8}$/ 
  }, // Formato DNI Perú

  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Validación básica de email
  },
    
  telefono: { 
    type: String, 
    required: true,
    match: /^\d{9}$/, // Formato de 9 dígitos
  },
  
  activo: { 
    type: Boolean, 
    default: true
  },

  password: { 
    type: String, 
    required: true,
    minlength: 6 // Requiere al menos 6 caracteres
  }

  
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

export default mongoose.model('User', userSchema);
