create database if not exists SV70006483;
use SV70006483;

drop table if exists detalle_produccion;
drop table if exists produccion;
drop table if exists detalle_compra;
drop table if exists compra;
drop table if exists materia_insumo;
drop table if exists proveedores;
drop table if exists pagos;
drop table if exists asistencia;
drop table if exists empleados;
drop table if exists usuarios;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(100),
    email VARCHAR(100),
    rol ENUM('admin', 'empleado', 'gerente'),
    is_activo TINYINT DEFAULT 1
);

-- Tabla de empleados
CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNIQUE,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    dni VARCHAR(20),
    usuario_creacion INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion INT,
    fecha_modificacion DATETIME,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_creacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_modificacion) REFERENCES usuarios(id)
);

-- Tabla de asistencia
CREATE TABLE asistencia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    empleado_id INT,
    fecha DATE,
    hora_entrada TIME,
    hora_salida TIME,
    observaciones TEXT,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (empleado_id) REFERENCES empleados(id)
);

-- Tabla de pagos
CREATE TABLE pagos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    empleado_id INT,
    fecha_pago DATE,
    monto DECIMAL(10,2),
    descripcion TEXT,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (empleado_id) REFERENCES empleados(id)
);

-- Tabla de proveedores
CREATE TABLE proveedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    ruc VARCHAR(20),
    cel VARCHAR(15),
    usuario_creacion INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion INT,
    fecha_modificacion DATETIME,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (usuario_creacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_modificacion) REFERENCES usuarios(id)
);

-- Tabla de materia prima e insumos
CREATE TABLE materia_insumo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    unidad_medicion VARCHAR(20),
    cantidad DECIMAL(10,2),
    tipo ENUM('insumo', 'materia'),
    usuario_creacion INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion INT,
    fecha_modificacion DATETIME,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (usuario_creacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_modificacion) REFERENCES usuarios(id)
);

-- Tabla de compras
CREATE TABLE compra (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    proveedor_id INT,
    monto_total DECIMAL(10, 2),
    usuario_creacion INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion INT,
    fecha_modificacion DATETIME,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (proveedor_id) REFERENCES proveedores(id),
    FOREIGN KEY (usuario_creacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_modificacion) REFERENCES usuarios(id)
);

-- Detalle de compras
CREATE TABLE detalle_compra (
    compra_id INT,
    materia_insumo_id INT,
    unidad_medicion VARCHAR(20),
    cantidad DECIMAL(10,2),
    monto DECIMAL(10,2),
    FOREIGN KEY (compra_id) REFERENCES compra(id),
    FOREIGN KEY (materia_insumo_id) REFERENCES materia_insumo(id)
);

-- Producción
CREATE TABLE produccion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50),
    nombre VARCHAR(100),
    cantidad_total DECIMAL(10,2),
    usuario_creacion INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion INT,
    fecha_modificacion DATETIME,
    is_activo TINYINT DEFAULT 1,
    FOREIGN KEY (usuario_creacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_modificacion) REFERENCES usuarios(id)
);

-- Detalle de producción
CREATE TABLE detalle_produccion (
    produccion_id INT,
    materia_insumo_id INT,
    unidad_medida VARCHAR(20),
    cantidad DECIMAL(10,2),
    FOREIGN KEY (produccion_id) REFERENCES produccion(id),
    FOREIGN KEY (materia_insumo_id) REFERENCES materia_insumo(id)
);

