const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  console.log('Ruta de registro alcanzada');

  const { username, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'Usuario ya existe' });
    }

    user = new User({
      username,
      email,
      password,
      role: role || 'user' 
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      config.secret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    
    console.log('Usuario encontrado:', user); 

    if (!user) {
      return res.status(400).json({ msg: 'Credenciales inválidas usuario' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciales inválidas contraseña' });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      config.secret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

exports.changeRole = async (req, res) => {
  const { userId, newRole } = req.body;

  try {

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const validRoles = ['user', 'moderator', 'admin']; 
    if (!validRoles.includes(newRole)) {
      return res.status(400).json({ msg: 'Rol inválido' });
    }

    user.role = newRole;
    await user.save();

    res.json({ msg: 'Rol de usuario actualizado con éxito', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

exports.logout = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ msg: 'Usuario no autenticado' });
    }

    const userId = req.user.id;

    await User.findByIdAndUpdate(userId, { lastLogout: new Date() });

    res.json({ msg: 'Cierre de sesión exitoso' });

  } catch (err) {
    console.error('Error durante el cierre de sesión:', err.message);
    res.status(500).json({ msg: 'Error del servidor durante el cierre de sesión' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ msg: 'Acceso denegado. se requiere del privilegio de Admin.' });
  }
};