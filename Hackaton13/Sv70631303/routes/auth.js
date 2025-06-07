const express = require('express');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Esquemas de validación
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string().valid('usuario', 'moderador', 'admin').default('usuario')
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Mostrar formulario de registro (VISTA)
router.get('/register', (req, res) => {
  res.render('auth/register', {
    title: 'Registro de Usuario',
    errors: null,
    formData: {}
  });
});

// Procesar registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    
    if (error) {
      return res.render('auth/register', {
        title: 'Registro de Usuario',
        errors: error.details.map(detail => detail.message),
        formData: req.body
      });
    }

    const existingUser = await User.findOne({ email: value.email });
    if (existingUser) {
      return res.render('auth/register', {
        title: 'Registro de Usuario',
        errors: ['El email ya está registrado'],
        formData: req.body
      });
    }

    const user = new User(value);
    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Guardar token en cookie
    res.cookie('token', token, { httpOnly: true });
    
    res.redirect('/profile');
  } catch (error) {
    res.render('auth/register', {
      title: 'Registro de Usuario',
      errors: [error.message],
      formData: req.body
    });
  }
});

// Mostrar formulario de login (VISTA)
router.get('/login', (req, res) => {
  res.render('auth/login', {
    title: 'Iniciar Sesión',
    errors: null,
    formData: {}
  });
});

// Procesar login
router.post('/login', async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    
    if (error) {
      return res.render('auth/login', {
        title: 'Iniciar Sesión',
        errors: error.details.map(detail => detail.message),
        formData: req.body
      });
    }

    const user = await User.findOne({ email: value.email });
    if (!user || !user.isActive) {
      return res.render('auth/login', {
        title: 'Iniciar Sesión',
        errors: ['Credenciales inválidas'],
        formData: req.body
      });
    }

    const isValidPassword = await user.comparePassword(value.password);
    if (!isValidPassword) {
      return res.render('auth/login', {
        title: 'Iniciar Sesión',
        errors: ['Credenciales inválidas'],
        formData: req.body
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Guardar token en cookie
    res.cookie('token', token, { httpOnly: true });
    
    res.redirect('/profile');
  } catch (error) {
    res.render('auth/login', {
      title: 'Iniciar Sesión',
      errors: [error.message],
      formData: req.body
    });
  }
});

// Cerrar sesión
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

// Mostrar perfil del usuario (VISTA)
router.get('/profile', auth, async (req, res) => {
  res.render('profile', {
    title: 'Mi Perfil',
    user: req.user
  });
});

module.exports = router;