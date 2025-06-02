// auth.controller.js corregido para estructura basada en Persona
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Persona = require('../Models/PersonaModel');
const ClienteImpl = require('../Persistence/ClienteImpl');
const VendedorImpl = require('../Persistence/VendedorImpl');

exports.signup = async (req, res) => {
  try {
    const datos = req.body;
    console.log("Recibido:", datos);
    if (!datos.rol) {
      return res.status(400).json({ message: 'Falta el tipo de usuario.' });
    }
    const hashedPassword = await bcrypt.hash(datos.contraseña, 10); // 10 es el "salt rounds"
    datos.contraseña = hashedPassword; // Usa el mismo campo que espera tu Modelo (`contraseña`)
    //delete datos.contraseña; // eliminar el campo plano por seguridad

    let resultado;

    if (datos.rol === 'cliente') {
      resultado = await ClienteImpl.insertar(datos);
    } else if (datos.rol === 'vendedor') {
      resultado = await VendedorImpl.insertar(datos);
    } else {
      return res.status(400).json({ message: 'Tipo de usuario inválido.' });
    }

    return res.status(201).json({ success: true, data: resultado });
    
  } catch (error) {
    console.error('Error en registro:', error);
    return res.status(500).json({ message: 'Error al crear cuenta' });
  }
};


// Inicio de sesión
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Se recibió una petición de login:", req.body);
    const persona = await Persona.findOne({ correo: email });
    if (!persona) {
      return res.status(404).json({ message: 'Correo no registrado' });
    }

    //Comparar contraseña con bcrypt
    const passwordValid = await bcrypt.compare(password, persona.contraseña);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: persona.id
      },
      process.env.jwtSecret,
      {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400
      }
    );

    req.session.token = token;
    return res.status(200).json({
      success: true,
      data: {
        id: persona._id,
        nombre: persona.nombre,
        rol: persona.rol
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

// Cierre de sesión
exports.signout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'No se pudo cerrar sesión' });
    }
    res.clearCookie('connect.sid'); // nombre por defecto del cookie de sesión
    return res.status(200).json({ message: 'Sesión cerrada correctamente' });
  });
};
