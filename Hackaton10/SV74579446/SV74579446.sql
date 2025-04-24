CREATE DATABASE SV74579446;
USE SV74579446;

-- TABLA: Proveedores 
CREATE TABLE proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ruc VARCHAR(11) UNIQUE,
    telefono VARCHAR(15)
);

-- TABLA: Materia Prima
CREATE TABLE materia_prima (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    unidad VARCHAR(20),
    stock DECIMAL(10,2),
    precio_unitario DECIMAL(10,2)
);

-- TABLA: Insumos
CREATE TABLE insumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    stock INT,
    precio_unitario DECIMAL(10,2)
);

-- TABLA: Personal
CREATE TABLE personal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    dni VARCHAR(8) UNIQUE,
    cargo VARCHAR(50),
    sueldo DECIMAL(10,2)
);

-- TABLA: Compras 
CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proveedor_id INT,
    tipo ENUM('Materia Prima', 'Insumo'),
    producto_id INT,
    cantidad INT,
    total DECIMAL(10,2),
    fecha DATETIME DEFAULT NOW(),
    FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
);

-- TABLA: Producción
CREATE TABLE produccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(100),
    cantidad INT,
    fecha DATETIME DEFAULT NOW(),
    responsable_id INT,
    FOREIGN KEY (responsable_id) REFERENCES personal(id)
);

-- iNSERTAR DATOS
INSERT INTO proveedores(nombre, ruc, telefono)
VALUES ('MaderM&s S.A.C.', '10456987452', '912345678');

INSERT INTO materia_prima(nombre, unidad, stock, precio_unitario)
VALUES ('Melamina', 'm2', 150, 25.00);

INSERT INTO insumos(nombre, descripcion, stock, precio_unitario)
VALUES ('tornillos', 'tornillos medianos', 1000, 0.05);

INSERT INTO personal(nombre, apellido, dni, cargo, sueldo)
VALUES ('Juana', 'Marcelo', '74579446', 'carpintera', 2000);

-- STORE PROCEDURE: CRUD para materia prima

-- CREAR
DELIMITER //
CREATE PROCEDURE crear_materia_prima (
    IN nombre_in VARCHAR(100),
    IN unidad_in VARCHAR(20),
    IN stock_in DECIMAL(10,2),
    IN precio_in DECIMAL(10,2)
)
BEGIN
    INSERT INTO materia_prima(nombre, unidad, stock, precio_unitario)
    VALUES (nombre_in, unidad_in, stock_in, precio_in);
END //
DELIMITER ;

-- LEER
DELIMITER //
CREATE PROCEDURE listar_materia_prima()
BEGIN
    SELECT * FROM materia_prima;
END //
DELIMITER ;

-- ACTUALIZAR
DELIMITER //
CREATE PROCEDURE actualizar_materia_prima (
    IN id_in INT,
    IN stock_nuevo DECIMAL(10,2)
)
BEGIN
    UPDATE materia_prima SET stock = stock_nuevo WHERE id = id_in;
END //
DELIMITER ;

-- ELIMINAR
DELIMITER //
CREATE PROCEDURE eliminar_materia_prima (
    IN id_in INT
)
BEGIN
    DELETE FROM materia_prima WHERE id = id_in;
END //
DELIMITER ;

-- TRIGGER: impedir stock negativo en insumos
DELIMITER //
CREATE TRIGGER validar_stock_insumos
BEFORE UPDATE ON insumos
FOR EACH ROW
BEGIN
    IF NEW.stock < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'El stock no puede ser negativo';
    END IF;
END //
DELIMITER ;

-- TRIGGER: log de producción
CREATE TABLE log_produccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produccion_id INT,
    mensaje TEXT,
    fecha_log DATETIME DEFAULT NOW()
);

DELIMITER //
CREATE TRIGGER auditoria_produccion
AFTER INSERT ON produccion
FOR EACH ROW
BEGIN
    INSERT INTO log_produccion (produccion_id, mensaje)
    VALUES (NEW.id, CONCAT('Se produjo ', NEW.cantidad, ' unidades de ', NEW.producto));
END //
DELIMITER ;

-- PRUEBA DE FUNCIONES
CALL crear_materia_prima('Madera', 'm2', 200, 32.50);
CALL listar_materia_prima();
CALL actualizar_materia_prima(1, 180);
CALL eliminar_materia_prima(1);
