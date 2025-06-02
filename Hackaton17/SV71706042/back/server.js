const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const jwt = require('jsonwebtoken');
const Persona = require('./Models/PersonaModel');
require('dotenv').config();

require('./Config/passport');

const app = express();
const PORT = process.env.PORT || 8080;

// ───── Conexión a MongoDB ─────
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado a MongoDB");
}).catch(err => {
  console.error("Error al conectar a MongoDB:", err);
  process.exit(1);
});

// ───── Middleware ─────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'clave_secreta_segura',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// ───── Rutas API ─────
const authRoutes = require('./Routes/auth.routes');
const userRoutes = require('./Routes/user.routes');

app.use('/auth', authRoutes);
app.use('/api', userRoutes);

// ───── Middleware para proteger carpeta PRIVATE ─────
app.use('/private', async (req, res, next) => {
  const token = req.session?.token;
  if (!token) return res.redirect('/public/login/login.html');

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.redirect('/public/login/login.html');
  }
});

// ───── Servir carpetas front ─────
// Público: login, registro, index, assets
app.use('/public', express.static(path.join(__dirname, '../front/public')));

// Privado: dashboard, cliente, vendedor
app.use('/private', express.static(path.join(__dirname, '../front/private')));

// Ruta raíz
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../front/public/index.html'));
});

// ───── Arrancar servidor ─────
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
