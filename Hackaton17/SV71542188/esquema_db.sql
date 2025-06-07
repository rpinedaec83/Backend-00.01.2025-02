CREATE DATABASE IF NOT EXISTS gestion_pagos;
USE gestion_pagos;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS planes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  detalle VARCHAR(255),
  precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS movimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  plan_id INT,
  clase ENUM('abono','reintegro') NOT NULL,
  cantidad DECIMAL(10,2) NOT NULL,
  fecha DATETIME,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (plan_id) REFERENCES planes(id)
);