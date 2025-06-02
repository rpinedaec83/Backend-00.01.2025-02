const jwt = require('jsonwebtoken');
const Persona = require('../Models/PersonaModel'); // Usa el modelo de Persona

//Verifico el token enviado en la sesión del usuario
verifyToken = (req, res, next) => {
  const token = req.session?.token;

  if (!token) {
    return res.status(401).send({ message: 'Token no enviado' });
  }

  jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    if (err) return res.status(403).send({ message: 'Token inválido' });

    req.userId = decoded.id;
    next();
  });
};
//Segun busque buenas practicas, es bueno usar async y await para manejar
// las promesas de manera más limpia y evitarerrores silenciosos
isCliente = async (req, res, next) => {
  try {
    const persona = await Persona.findById(req.userId);
    if (persona?.rol === 'cliente') return next();
    return res.status(403).send({ message: 'Se requiere rol de cliente' });
  } catch (err) {
    return res.status(500).send({ message: 'Error de servidor' });
  }
};

isVendedor = async (req, res, next) => {
  try {
    const persona = await Persona.findById(req.userId);
    if (persona?.rol === 'vendedor') return next();
    return res.status(403).send({ message: 'Se requiere rol de vendedor' });
  } catch (err) {
    return res.status(500).send({ message: 'Error de servidor' });
  }
};
//Exporo las funciones para que puedan ser usadas en las rutas
module.exports = {
  verifyToken,
  isCliente,
  isVendedor
};
