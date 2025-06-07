const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'publico')));

const configBD = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || 'miclave',
  database: process.env.DB_NOMBRE || 'gestion_pagos'
};

// Middleware de autenticación simulada (cliente 1)
app.use((req, res, next) => {
  req.cliente = { id: 1, nombre: 'cliente_demo', correo: 'demo@correo.com' };
  next();
});

// Crear cliente
app.post('/api/clientes', async (req, res) => {
  const { nombre, correo } = req.body;
  const conn = await mysql.createConnection(configBD);
  await conn.execute('INSERT INTO clientes (nombre, correo) VALUES (?, ?)', [nombre, correo]);
  await conn.end();
  res.json({ mensaje: 'Cliente registrado' });
});

// Listar clientes
app.get('/api/clientes', async (req, res) => {
  const conn = await mysql.createConnection(configBD);
  const [filas] = await conn.execute('SELECT * FROM clientes');
  await conn.end();
  res.json(filas);
});

// Crear plan
app.post('/api/planes', async (req, res) => {
  const { titulo, detalle, precio } = req.body;
  const conn = await mysql.createConnection(configBD);
  await conn.execute('INSERT INTO planes (titulo, detalle, precio) VALUES (?, ?, ?)', [titulo, detalle, precio]);
  await conn.end();
  res.json({ mensaje: 'Plan creado' });
});

// Listar planes
app.get('/api/planes', async (req, res) => {
  const conn = await mysql.createConnection(configBD);
  const [filas] = await conn.execute('SELECT * FROM planes');
  await conn.end();
  res.json(filas);
});

// Registrar abono
app.post('/api/abonos', async (req, res) => {
  const { plan_id, cantidad } = req.body;
  const cliente_id = req.cliente.id;
  const conn = await mysql.createConnection(configBD);
  await conn.execute(
    'INSERT INTO movimientos (cliente_id, plan_id, clase, cantidad, fecha) VALUES (?, ?, "abono", ?, NOW())',
    [cliente_id, plan_id, cantidad]
  );
  await conn.end();
  res.json({ mensaje: 'Abono registrado' });
});

// Registrar reintegro
app.post('/api/reintegros', async (req, res) => {
  const { plan_id, cantidad } = req.body;
  const cliente_id = req.cliente.id;
  const conn = await mysql.createConnection(configBD);
  await conn.execute(
    'INSERT INTO movimientos (cliente_id, plan_id, clase, cantidad, fecha) VALUES (?, ?, "reintegro", ?, NOW())',
    [cliente_id, plan_id, cantidad]
  );
  await conn.end();
  res.json({ mensaje: 'Reintegro registrado' });
});

// Listar movimientos del cliente
app.get('/api/movimientos', async (req, res) => {
  const cliente_id = req.cliente.id;
  const conn = await mysql.createConnection(configBD);
  const [filas] = await conn.execute(
    `SELECT m.*, p.titulo as plan FROM movimientos m
     JOIN planes p ON m.plan_id = p.id
     WHERE m.cliente_id = ? ORDER BY m.fecha DESC`, [cliente_id]
  );
  await conn.end();
  res.json(filas);
});

app.listen(3500, '0.0.0.0', () => {
  console.log('Servidor activo en puerto 3500');
});