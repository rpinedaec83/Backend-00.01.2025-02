CREATE DATABASE IF NOT EXISTS SV74880500;
USE SV74880500;

CREATE TABLE MateriaPrima (
    id_mp INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    unidad VARCHAR(20),
    stock_actual INT DEFAULT 0
);

CREATE TABLE Insumos (
    id_insumo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    unidad VARCHAR(20),
    stock_actual INT DEFAULT 0
);

CREATE TABLE Proveedores (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    contacto VARCHAR(100),
    telefono VARCHAR(20),
    tipo ENUM('Materia Prima', 'Insumo')
);

CREATE TABLE CompraMP (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_mp INT,
    id_proveedor INT,
    cantidad INT,
    fecha DATE,
    FOREIGN KEY (id_mp) REFERENCES MateriaPrima(id_mp),
    FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor)
);

CREATE TABLE CompraInsumo (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_insumo INT,
    id_proveedor INT,
    cantidad INT,
    fecha DATE,
    FOREIGN KEY (id_insumo) REFERENCES Insumos(id_insumo),
    FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor)
);

CREATE TABLE Personal (
    id_personal INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    cargo VARCHAR(50),
    fecha_ingreso DATE,
    salario DECIMAL(10,2)
);

CREATE TABLE Produccion (
    id_produccion INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    responsable INT,
    FOREIGN KEY (responsable) REFERENCES Personal(id_personal)
);


CREATE TABLE DetalleProduccion (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_produccion INT,
    tipo ENUM('MP', 'INSUMO'),
    id_item INT,
    cantidad_usada INT,
    FOREIGN KEY (id_produccion) REFERENCES Produccion(id_produccion)
);


DELIMITER //
CREATE TRIGGER after_insert_compra_mp
AFTER INSERT ON CompraMP
FOR EACH ROW
BEGIN
    UPDATE MateriaPrima
    SET stock_actual = stock_actual + NEW.cantidad
    WHERE id_mp = NEW.id_mp;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER after_insert_compra_insumo
AFTER INSERT ON CompraInsumo
FOR EACH ROW
BEGIN
    UPDATE Insumos
    SET stock_actual = stock_actual + NEW.cantidad
    WHERE id_insumo = NEW.id_insumo;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER after_insert_detalle_produccion
AFTER INSERT ON DetalleProduccion
FOR EACH ROW
BEGIN
    IF NEW.tipo = 'MP' THEN
        UPDATE MateriaPrima
        SET stock_actual = stock_actual - NEW.cantidad_usada
        WHERE id_mp = NEW.id_item;
    ELSE
        UPDATE Insumos
        SET stock_actual = stock_actual - NEW.cantidad_usada
        WHERE id_insumo = NEW.id_item;
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_crud_materiaprima(
    IN p_opcion VARCHAR(10),
    IN p_id INT,
    IN p_nombre VARCHAR(100),
    IN p_descripcion TEXT,
    IN p_unidad VARCHAR(20),
    IN p_stock INT
)
BEGIN
    IF p_opcion = 'CREATE' THEN
        INSERT INTO MateriaPrima(nombre, descripcion, unidad, stock_actual)
        VALUES (p_nombre, p_descripcion, p_unidad, p_stock);
    ELSEIF p_opcion = 'READ' THEN
        SELECT * FROM MateriaPrima WHERE id_mp = p_id;
    ELSEIF p_opcion = 'UPDATE' THEN
        UPDATE MateriaPrima
        SET nombre = p_nombre, descripcion = p_descripcion, unidad = p_unidad, stock_actual = p_stock
        WHERE id_mp = p_id;
    ELSEIF p_opcion = 'DELETE' THEN
        DELETE FROM MateriaPrima WHERE id_mp = p_id;
    END IF;
END;
//
DELIMITER ;
