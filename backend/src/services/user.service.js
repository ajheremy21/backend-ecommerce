import User from '../models/user.model.js';

const UserService = {
  // Crear un nuevo usuario
  createUser: async (data) => {
    return User.create(data);
  },

  //  Buscar todos los usuarios
  getAllUsers: async () => {
    return User.find({});
  },

  //  Buscar por ID
  getUserById: async (id) => {
    return User.findById(id);
  },

  //  Actualizar usuario
  updateUser: async (id, data) => {
    return User.findByIdAndUpdate(id, data, { new: true });
  },

  //  Eliminar usuario
  deleteUser: async (id) => {
    return User.findByIdAndDelete(id);
  },

  //  Buscar por email (útil para login)
  findByEmail: async (email) => {
    return User.findOne({ email });
  }
};

export default UserService;


