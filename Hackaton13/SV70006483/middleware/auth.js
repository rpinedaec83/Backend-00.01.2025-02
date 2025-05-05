const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = function(req, res, next) {
  // Obtener el token del header
  const token = req.header('x-auth-token');
  // console.log('Token recibido:', token);

  // Verificar si no hay token
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, config.secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token no es válido' });
  }
};