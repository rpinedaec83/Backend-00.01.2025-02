CREATE DATABASE IF NOT EXISTS sistema_pagos;
USE sistema_pagos;

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  precio DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS pagos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  producto_id INT,
  monto DECIMAL(10,2),
  fecha DATETIME,
  estado VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS devoluciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pago_id INT,
  fecha DATETIME,
  monto DECIMAL(10,2)
);