require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const {
  getPendientes,
  getCompletados,
  createCompra,
  completarCompra
} = require('./src/controllers/comprasController');

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/compras')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Crear servidor HTTP
const server = http.createServer(async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    if (req.url === '/' && req.method === 'GET') {
      const ejs = require('ejs');
      const fs = require('fs').promises;
      const template = await fs.readFile(path.join(__dirname, 'src', 'views', 'index.ejs'), 'utf-8');
      const rendered = ejs.render(template, { title: 'Lista de Compras' });
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(rendered);
    } 
    else if (req.url === '/compras/pendientes' && req.method === 'GET') {
      await getPendientes(req, res);
    } 
    else if (req.url === '/compras/completados' && req.method === 'GET') {
      await getCompletados(req, res);
    } 
    else if (req.url === '/compras' && req.method === 'POST') {
      await createCompra(req, res);
    } 
    else if (req.url.startsWith('/compras/') && req.url.endsWith('/completar') && req.method === 'POST') {
      const id = req.url.split('/')[2];
      await completarCompra(req, res, id);
    } 
    else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Página no encontrada</h1>');
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error interno del servidor');
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});