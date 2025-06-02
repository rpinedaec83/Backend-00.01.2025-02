const Persona = require('../Models/PersonaModel'); // Jalamos el dato de la base de datos

const checkDuplicateEmail = async (req, res, next) => {
  try {
    const correo = req.body.email;
    const usuarioExistente = await Persona.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).send({ message: "El correo ya está en uso." });
    }
    next();
  } catch (err) {
    res.status(500).send({ message: "Error al verificar el correo." });
  }
};

module.exports = { checkDuplicateEmail };
