import { Router } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../controllers/user.controller.js';


const router = Router(); // Crear una instancia del enrutador

router.get('/', (getAllUsers)); // Ruta para obtener todos los usuarios
router.get('/:id', (getUserById)); // Ruta para obtener un usuario por ID
router.post('/', (createUser)); // Ruta para crear un nuevo usuario
router.delete('/:id', (deleteUser)); // Ruta para eliminar un usuario por ID
router.put('/:id', (updateUser)); // Ruta para actualizar un usuario por ID

export default router;