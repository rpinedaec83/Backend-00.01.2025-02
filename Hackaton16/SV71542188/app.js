const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'sistema_pagos'
};

// Middleware de autenticación simulada
app.use((req, res, next) => {
  req.user = { id: 1, nombre: 'usuario_demo' }; // Simula usuario logueado
  next();
});

// Crear producto
app.post('/api/productos', async (req, res) => {
  const { nombre, precio } = req.body;
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio]);
  await conn.end();
  res.json({ message: 'Producto creado' });
});

// Listar productos
app.get('/api/productos', async (req, res) => {
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute('SELECT * FROM productos');
  await conn.end();
  res.json(rows);
});

// Realizar pago
app.post('/api/pagos', async (req, res) => {
  const { producto_id, monto } = req.body;
  const usuario_id = req.user.id;
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute(
    'INSERT INTO pagos (usuario_id, producto_id, monto, fecha, estado) VALUES (?, ?, ?, NOW(), ?)',
    [usuario_id, producto_id, monto, 'pagado']
  );
  await conn.end();
  res.json({ message: 'Pago registrado' });
});

// Listar pagos del usuario
app.get('/api/pagos', async (req, res) => {
  const usuario_id = req.user.id;
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute('SELECT * FROM pagos WHERE usuario_id = ?', [usuario_id]);
  await conn.end();
  res.json(rows);
});

// Registrar devolución
app.post('/api/devoluciones', async (req, res) => {
  const { pago_id, monto } = req.body;
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute(
    'INSERT INTO devoluciones (pago_id, fecha, monto) VALUES (?, NOW(), ?)',
    [pago_id, monto]
  );
  await conn.execute('UPDATE pagos SET estado = ? WHERE id = ?', ['devuelto', pago_id]);
  await conn.end();
  res.json({ message: 'Devolución registrada' });
});

// Listar devoluciones del usuario
app.get('/api/devoluciones', async (req, res) => {
  const usuario_id = req.user.id;
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute(
    `SELECT d.* FROM devoluciones d
     JOIN pagos p ON d.pago_id = p.id
     WHERE p.usuario_id = ?`, [usuario_id]
  );
  await conn.end();
  res.json(rows);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});