import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token faltante.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token usando la clave secreta
    req.user = decoded; //  Almacena la información del usuario decodificada en el objeto de solicitud
    next();
  } catch (err) {
    return res.status(403).json({ mensaje: 'Token inválido o expirado.' });
  }
};

export default verifyToken;