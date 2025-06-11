const Compra = require('../models/Compras');
const querystring = require('querystring');
const path = require('path');
const fs = require('fs').promises;
const ejs = require('ejs');

async function renderView(res, viewName, data = {}) {
  try {
    const template = await fs.readFile(path.join(__dirname, '../views', `${viewName}.ejs`), 'utf-8');
    const rendered = ejs.render(template, data);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(rendered);
  } catch (error) {
    console.error('Error rendering view:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al renderizar la vista');
  }
}

async function getPendientes(req, res) {
  try {
    const compras = await Compra.find({ EsCompletado: false });
    await renderView(res, 'pendientes', { compras });
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al obtener pendientes');
  }
}

async function getCompletados(req, res) {
  try {
    const compras = await Compra.find({ EsCompletado: true });
    await renderView(res, 'completados', { compras });
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al obtener completados');
  }
}

async function createCompra(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', async () => {
    try {
      const { Nombre, Descripcion } = querystring.parse(body);
      const nuevaCompra = new Compra({
        Nombre,
        Descripcion,
        Fecha: new Date(),
        EsCompletado: false
      });
      await nuevaCompra.save();
      res.writeHead(302, { 'Location': '/compras/pendientes' });
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Location': '/' });
      res.end();
    }
  });
}

async function completarCompra(req, res, id) {
  try {
    await Compra.findByIdAndUpdate(id, { EsCompletado: true });
    res.writeHead(302, { 'Location': '/compras/pendientes' });
    res.end();
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Location': '/compras/pendientes' });
    res.end();
  }
}

module.exports = {
  getPendientes,
  getCompletados,
  createCompra,
  completarCompra
};