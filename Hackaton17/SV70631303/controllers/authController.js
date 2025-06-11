const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Producto = require('../models/Producto');

exports.getRegister = (req, res) => {
  res.render('register');
};

exports.postRegister = async (req, res) => {
  const { nombre, apellido, email, password, confirm_password } = req.body;
  
  if (password !== confirm_password) {
    req.flash('error_msg', 'Las contraseñas no coinciden');
    return res.redirect('/register');
  }
  
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      req.flash('error_msg', 'El email ya está registrado');
      return res.redirect('/register');
    }
    
    const newUser = new User({
      nombre,
      apellido,
      email,
      passwordHash: password
    });
    
    await newUser.save();
    
    req.flash('success_msg', 'Registro exitoso. Por favor inicia sesión.');
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Error en el registro');
    res.redirect('/register');
  }
};

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      req.flash('error_msg', 'Credenciales incorrectas');
      return res.redirect('/login');
    }
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      req.flash('error_msg', 'Credenciales incorrectas');
      return res.redirect('/login');
    }
    
    req.session.user = {
      id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email
    };
    
    req.flash('success_msg', 'Inicio de sesión exitoso');
    res.redirect('/');
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Error en el inicio de sesión');
    res.redirect('/login');
  }
};

exports.getLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

exports.getHome = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual (default: 1)
    const limit = 9; // Productos por página
    const skip = (page - 1) * limit;

    // Obtener el total de productos y los productos paginados
    const [productos, total] = await Promise.all([
      Producto.find().skip(skip).limit(limit).lean(),
      Producto.countDocuments()
    ]);

    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    res.render('home', {
      user: req.session.user,
      productos,
      currentPage: page,
      totalPages,
      hasNextPage,
      hasPreviousPage,
      nextPage: page + 1,
      previousPage: page - 1
    });
  } catch (error) {
    console.error(error);
    req.flash('error_msg', 'Error al cargar los productos');
    res.redirect('/');
  }
};