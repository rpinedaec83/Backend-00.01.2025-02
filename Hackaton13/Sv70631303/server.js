const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const path = require('path');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const orderRoutes = require('./routes/orders');
const couponRoutes = require('./routes/coupons');
const paymentRoutes = require('./routes/payments');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurar views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para pasar user a todas las vistas
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por ventana
});
app.use(limiter);

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/course-system')
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/orders', orderRoutes);
app.use('/coupons', couponRoutes);
app.use('/payments', paymentRoutes);

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ message: 'API funcionando correctamente', timestamp: new Date() });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});