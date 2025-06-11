require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const multer = require('multer');

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const productosRoutes = require('./routes/productosRoutes');
const carritoRoutes = require('./routes/carritoRoutes');

// Configuración de Express
const app = express();

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Configuración de sesión
app.use(session({
  secret: process.env.SESSION_SECRET || 'tu_secreto_super_seguro',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Middleware para mensajes flash
app.use(flash());

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Middleware para datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Variables globales para las vistas
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')[0];
  res.locals.error_msg = req.flash('error_msg')[0];
  res.locals.user = req.session.user || null;
  next();
});

// Rutas
app.use('/', authRoutes);
app.use('/', productosRoutes(upload));
app.use('/carrito', carritoRoutes());

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});