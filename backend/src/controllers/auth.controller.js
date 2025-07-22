import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const register = async (req, res) => {
  const { nombre, dni, email, telefono, password } = req.body;
  try {
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: 'El email ya está registrado' });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ nombre, dni, email, telefono, password: hash });
    await user.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
