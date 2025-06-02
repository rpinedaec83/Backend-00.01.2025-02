const Persona = require('../Models/PersonaModel');

exports.publicAccess = (req, res) => {
  res.status(200).send('Acceso público');
};

exports.clienteAccess = async (req, res) => {
  const persona = await Persona.findById(req.userId);
  res.status(200).send({ message: `Hola cliente ${persona.nombre}` });
};

exports.listarVendedores = async (req, res) => {
  try {
    const vendedores = await Persona.find({ rol: 'vendedor' }).select('-contraseña'); // evita enviar contraseña
    res.status(200).json(vendedores);
  } catch (error) {
    console.error('Error al listar vendedores:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
