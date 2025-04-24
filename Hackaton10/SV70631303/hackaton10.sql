-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS SV70631303;
USE SV70631303;

-- Creación de tablas

CREATE TABLE proveedores (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE materia_prima (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proveedor INT,
    FOREIGN KEY (id_proveedor) REFERENCES proveedores(id)
);

CREATE TABLE insumos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proveedor INT,
    tipo VARCHAR(50),
    FOREIGN KEY (id_proveedor) REFERENCES proveedores(id)
);

CREATE TABLE personal (
    id INT PRIMARY KEY,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(20) UNIQUE,
    telefono VARCHAR(20),
    cargo VARCHAR(50),
    salario DECIMAL(10, 2)
);

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(200)
);

CREATE TABLE produccion (
    id INT PRIMARY KEY,
    tipo_armario VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_estimada_fin DATE,
    fecha_real_fin DATE,
    estado VARCHAR(50),
    id_cliente INT,
    costo_total DECIMAL(10, 2),
    notas TEXT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

CREATE TABLE compras (
    id INT PRIMARY KEY,
    fecha_compra DATE NOT NULL
);

CREATE TABLE detalle_compra_insumos (
    id_compra INT,
    id_insumo INT,
    precio_unitario DECIMAL(10, 2),
    cantidad INT,
    PRIMARY KEY (id_compra, id_insumo),
    FOREIGN KEY (id_compra) REFERENCES compras(id),
    FOREIGN KEY (id_insumo) REFERENCES insumos(id)
);

CREATE TABLE detalle_compra_materia_prima (
    id_compra INT,
    id_materia_prima INT,
    precio_unitario DECIMAL(10, 2),
    cantidad INT,
    PRIMARY KEY (id_compra, id_materia_prima),
    FOREIGN KEY (id_compra) REFERENCES compras(id),
    FOREIGN KEY (id_materia_prima) REFERENCES materia_prima(id)
);

CREATE TABLE materiales_produccion (
    id_produccion INT,
    id_materia_prima INT,
    cantidad DECIMAL(10, 2),
    PRIMARY KEY (id_produccion, id_materia_prima),
    FOREIGN KEY (id_produccion) REFERENCES produccion(id),
    FOREIGN KEY (id_materia_prima) REFERENCES materia_prima(id)
);

CREATE TABLE insumos_produccion (
    id_produccion INT,
    id_insumo INT,
    cantidad INT,
    PRIMARY KEY (id_produccion, id_insumo),
    FOREIGN KEY (id_produccion) REFERENCES produccion(id),
    FOREIGN KEY (id_insumo) REFERENCES insumos(id)
);

CREATE TABLE empleados_produccion (
    id_produccion INT,
    id_empleado INT,
    PRIMARY KEY (id_produccion, id_empleado),
    FOREIGN KEY (id_produccion) REFERENCES produccion(id),
    FOREIGN KEY (id_empleado) REFERENCES personal(id)
);

-- 1. Trigger para actualizar el costo total de la producción cuando se agregan materiales
DELIMITER //
CREATE TRIGGER actualizar_costo_materia_prima
AFTER INSERT ON materiales_produccion
FOR EACH ROW
BEGIN
    DECLARE costo_material DECIMAL(10, 2);
    
    -- Obtener el precio más reciente del material
    SELECT precio_unitario INTO costo_material
    FROM detalle_compra_materia_prima
    WHERE id_materia_prima = NEW.id_materia_prima
    ORDER BY id_compra DESC
    LIMIT 1;
    
    -- Actualizar el costo total del proyecto
    UPDATE produccion
    SET costo_total = costo_total + (NEW.cantidad * costo_material)
    WHERE id = NEW.id_produccion;
END //
DELIMITER ;

-- 2. Trigger para actualizar el costo total de la producción cuando se agregan insumos
DELIMITER //
CREATE TRIGGER actualizar_costo_insumo
AFTER INSERT ON insumos_produccion
FOR EACH ROW
BEGIN
    DECLARE costo_insumo DECIMAL(10, 2);
    
    -- Obtener el precio más reciente del insumo
    SELECT precio_unitario INTO costo_insumo
    FROM detalle_compra_insumos
    WHERE id_insumo = NEW.id_insumo
    ORDER BY id_compra DESC
    LIMIT 1;
    
    -- Actualizar el costo total del proyecto
    UPDATE produccion
    SET costo_total = costo_total + (NEW.cantidad * costo_insumo)
    WHERE id = NEW.id_produccion;
END //
DELIMITER ;

-- 3. Trigger para verificar si hay stock suficiente de materia prima
DELIMITER //
CREATE TRIGGER verificar_stock_materia_prima
BEFORE INSERT ON materiales_produccion
FOR EACH ROW
BEGIN
    DECLARE stock_disponible DECIMAL(10, 2);
    
    -- Calcular stock disponible (compras - uso en producción)
    SELECT 
        COALESCE(
            (SELECT SUM(cantidad) 
             FROM detalle_compra_materia_prima 
             WHERE id_materia_prima = NEW.id_materia_prima), 0
        ) - 
        COALESCE(
            (SELECT SUM(cantidad) 
             FROM materiales_produccion 
             WHERE id_materia_prima = NEW.id_materia_prima), 0
        ) INTO stock_disponible;
    
    -- Verificar si hay suficiente stock
    IF stock_disponible < NEW.cantidad THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No hay suficiente stock de esta materia prima';
    END IF;
END //
DELIMITER ;

-- 4. Trigger para actualizar el estado de producción a "Finalizado" al registrar fecha_real_fin
DELIMITER //
CREATE TRIGGER actualizar_estado_produccion
BEFORE UPDATE ON produccion
FOR EACH ROW
BEGIN
    IF NEW.fecha_real_fin IS NOT NULL AND OLD.fecha_real_fin IS NULL THEN
        SET NEW.estado = 'Finalizado';
    END IF;
END //
DELIMITER ;

-- 5. Trigger para registrar historial de cambios en salarios
CREATE TABLE historial_salarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT,
    salario_anterior DECIMAL(10, 2),
    salario_nuevo DECIMAL(10, 2),
    fecha_cambio DATETIME,
    usuario VARCHAR(50),
    FOREIGN KEY (id_empleado) REFERENCES personal(id)
);

DELIMITER //
CREATE TRIGGER registrar_cambio_salario
BEFORE UPDATE ON personal
FOR EACH ROW
BEGIN
    IF NEW.salario != OLD.salario THEN
        INSERT INTO historial_salarios (
            id_empleado, 
            salario_anterior, 
            salario_nuevo, 
            fecha_cambio, 
            usuario
        ) VALUES (
            OLD.id, 
            OLD.salario, 
            NEW.salario, 
            NOW(), 
            CURRENT_USER()
        );
    END IF;
END //
DELIMITER ;

-- 6. Trigger para validar el formato de correo electrónico de proveedores
DELIMITER //
CREATE TRIGGER validar_email_proveedor
BEFORE INSERT ON proveedores
FOR EACH ROW
BEGIN
    IF NEW.email NOT REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Formato de email inválido';
    END IF;
END //
DELIMITER ;

-- 7. Trigger para definir automáticamente la fecha de inicio al crear un nuevo proyecto
DELIMITER //
CREATE TRIGGER establecer_fecha_inicio
BEFORE INSERT ON produccion
FOR EACH ROW
BEGIN
    IF NEW.fecha_inicio IS NULL THEN
        SET NEW.fecha_inicio = CURDATE();
    END IF;
    
    IF NEW.estado IS NULL THEN
        SET NEW.estado = 'En proceso';
    END IF;
END //
DELIMITER ;

-- 8. Trigger para registrar el historial de cambios de estado en proyectos
CREATE TABLE historial_estados_produccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_produccion INT,
    estado_anterior VARCHAR(50),
    estado_nuevo VARCHAR(50),
    fecha_cambio DATETIME,
    usuario VARCHAR(50),
    FOREIGN KEY (id_produccion) REFERENCES produccion(id)
);

DELIMITER //
CREATE TRIGGER registrar_cambio_estado
BEFORE UPDATE ON produccion
FOR EACH ROW
BEGIN
    IF NEW.estado != OLD.estado THEN
        INSERT INTO historial_estados_produccion (
            id_produccion, 
            estado_anterior, 
            estado_nuevo, 
            fecha_cambio, 
            usuario
        ) VALUES (
            OLD.id, 
            OLD.estado, 
            NEW.estado, 
            NOW(), 
            CURRENT_USER()
        );
    END IF;
END //
DELIMITER ;

-- 9. Trigger para evitar eliminar proveedores con materias primas asociadas
DELIMITER //
CREATE TRIGGER prevenir_eliminacion_proveedor
BEFORE DELETE ON proveedores
FOR EACH ROW
BEGIN
    DECLARE cuenta_mp INT;
    DECLARE cuenta_ins INT;
    
    SELECT COUNT(*) INTO cuenta_mp FROM materia_prima WHERE id_proveedor = OLD.id;
    SELECT COUNT(*) INTO cuenta_ins FROM insumos WHERE id_proveedor = OLD.id;
    
    IF cuenta_mp > 0 OR cuenta_ins > 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No se puede eliminar un proveedor con materias primas o insumos asociados';
    END IF;
END //
DELIMITER ;

-- 10. Trigger para calcular automáticamente fecha estimada de fin (por ejemplo, 15 días después del inicio)
DELIMITER //
CREATE TRIGGER calcular_fecha_estimada
BEFORE INSERT ON produccion
FOR EACH ROW
BEGIN
    IF NEW.fecha_estimada_fin IS NULL THEN
        SET NEW.fecha_estimada_fin = DATE_ADD(NEW.fecha_inicio, INTERVAL 15 DAY);
    END IF;
END //
DELIMITER ;

-- 11. Trigger para validar que el costo total sea positivo
DELIMITER //
CREATE TRIGGER validar_costo_positivo
BEFORE INSERT ON produccion
FOR EACH ROW
BEGIN
    IF NEW.costo_total <= 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El costo total debe ser mayor que cero';
    END IF;
END //
DELIMITER ;

-- 12. Trigger para auditar cambios en información de clientes
CREATE TABLE auditoria_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    campo_modificado VARCHAR(50),
    valor_anterior VARCHAR(200),
    valor_nuevo VARCHAR(200),
    fecha_modificacion DATETIME,
    usuario VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

DELIMITER //
CREATE TRIGGER auditar_cambios_cliente
BEFORE UPDATE ON clientes
FOR EACH ROW
BEGIN
    IF OLD.nombre != NEW.nombre THEN
        INSERT INTO auditoria_clientes VALUES (NULL, OLD.id, 'nombre', OLD.nombre, NEW.nombre, NOW(), CURRENT_USER());
    END IF;
    
    IF OLD.telefono != NEW.telefono OR (OLD.telefono IS NULL AND NEW.telefono IS NOT NULL) OR
       (OLD.telefono IS NOT NULL AND NEW.telefono IS NULL) THEN
        INSERT INTO auditoria_clientes VALUES (NULL, OLD.id, 'telefono', OLD.telefono, NEW.telefono, NOW(), CURRENT_USER());
    END IF;
    
    IF OLD.direccion != NEW.direccion OR (OLD.direccion IS NULL AND NEW.direccion IS NOT NULL) OR
       (OLD.direccion IS NOT NULL AND NEW.direccion IS NULL) THEN
        INSERT INTO auditoria_clientes VALUES (NULL, OLD.id, 'direccion', OLD.direccion, NEW.direccion, NOW(), CURRENT_USER());
    END IF;
END //
DELIMITER ;

-- 13. Trigger para actualizar precios promedio en una tabla de resumen
CREATE TABLE resumen_precios_materiales (
    id_materia_prima INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio_promedio DECIMAL(10, 2),
    ultima_compra DATE,
    FOREIGN KEY (id_materia_prima) REFERENCES materia_prima(id)
);

DELIMITER //
CREATE TRIGGER actualizar_precio_promedio_material
AFTER INSERT ON detalle_compra_materia_prima
FOR EACH ROW
BEGIN
    DECLARE nombre_mat VARCHAR(100);
    DECLARE fecha_comp DATE;
    
    SELECT nombre INTO nombre_mat FROM materia_prima WHERE id = NEW.id_materia_prima;
    SELECT fecha_compra INTO fecha_comp FROM compras WHERE id = NEW.id_compra;
    
    INSERT INTO resumen_precios_materiales (id_materia_prima, nombre, precio_promedio, ultima_compra)
    VALUES (NEW.id_materia_prima, nombre_mat, NEW.precio_unitario, fecha_comp)
    ON DUPLICATE KEY UPDATE 
        precio_promedio = (precio_promedio + NEW.precio_unitario) / 2,
        ultima_compra = fecha_comp;
END //
DELIMITER ;

-- 14. Trigger para validar que la fecha de fin estimada sea posterior a la fecha de inicio
DELIMITER //
CREATE TRIGGER validar_fechas_produccion
BEFORE INSERT ON produccion
FOR EACH ROW
BEGIN
    IF NEW.fecha_estimada_fin <= NEW.fecha_inicio THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'La fecha estimada de fin debe ser posterior a la fecha de inicio';
    END IF;
END //
DELIMITER ;

-- 15. Trigger para llevar un registro de compras eliminadas
CREATE TABLE compras_eliminadas (
    id_original INT,
    fecha_compra DATE,
    fecha_eliminacion DATETIME,
    usuario VARCHAR(50)
);

DELIMITER //
CREATE TRIGGER registrar_compra_eliminada
BEFORE DELETE ON compras
FOR EACH ROW
BEGIN
    INSERT INTO compras_eliminadas (id_original, fecha_compra, fecha_eliminacion, usuario)
    VALUES (OLD.id, OLD.fecha_compra, NOW(), CURRENT_USER());
END //
DELIMITER ;


-- Inserción de datos en la tabla proveedores
INSERT INTO proveedores (id, nombre, telefono, email) VALUES
(1, 'Maderas del Norte', '5555-1234', 'ventas@maderasnorte.com'),
(2, 'Aserradero San Juan', '5555-5678', 'info@aserradero.com'),
(3, 'Distribuidora de Materiales', '5555-9012', 'ventas@distrimateriales.com'),
(4, 'Ferretería Central', '5555-3456', 'ventas@ferreteriacentral.com'),
(5, 'Químicos Industriales', '5555-7890', 'ventas@quimicosindustriales.com'),
(6, 'Herrajes Modernos', '5555-2345', 'contacto@herrajesmodernos.com');

-- Inserción de datos en la tabla materia_prima
INSERT INTO materia_prima (id, nombre, id_proveedor) VALUES
(1, 'Madera de Roble', 1),
(2, 'Madera de Pino', 2),
(3, 'Lámina de MDF', 3),
(4, 'Madera de Cedro', 1),
(5, 'Tablero Aglomerado', 3),
(6, 'Madera de Nogal', 2);

-- Inserción de datos en la tabla insumos
INSERT INTO insumos (id, nombre, id_proveedor, tipo) VALUES
(1, 'Tornillos 2 pulgadas', 4, 'Herraje'),
(2, 'Pegamento Industrial', 5, 'Adhesivo'),
(3, 'Bisagras metálicas', 6, 'Herraje'),
(4, 'Laca transparente', 5, 'Acabado'),
(5, 'Tiradores de acero', 6, 'Herraje'),
(6, 'Lija fina', 4, 'Acabado'),
(7, 'Barniz mate', 5, 'Acabado'),
(8, 'Rieles para cajones', 6, 'Herraje');

-- Inserción de datos en la tabla personal
INSERT INTO personal (id, nombres, apellidos, dni, telefono, cargo, salario) VALUES
(1, 'Juan Carlos', 'Méndez López', '70631303', '4444-5679', 'Carpintero', 1500.00),
(2, 'María José', 'Ramírez García', '40632333', '4444-9012', 'Lijadora', 1800.00),
(3, 'Roberto', 'Guzmán Flores', '60345616', '4444-3456', 'Encargado de Compras', 2300.00),
(4, 'Lucía', 'Santos Morales', '23723422', '4444-7890', 'Pintora', 1400.00),
(5, 'Carlos Eduardo', 'Vásquez Díaz', '77835127', '4444-2345', 'Supervisor de Producción', 3200.00),
(6, 'Ana María', 'Fuentes Medina', '50678943', '4444-6789', 'Auxiliar de Carpintería', 1350.00),
(7, 'Miguel Ángel', 'Torres Rivas', '67890123', '4444-1230', 'Diseñador', 2500.00);

-- Inserción de datos en la tabla clientes
INSERT INTO clientes (id, nombre, telefono, direccion) VALUES
(1, 'Hotel California', '7777-1234', 'Avenida Principal 123, Ciudad'),
(2, 'Residencial Los Pinos', '7777-5678', 'Calle Secundaria 45, Ciudad'),
(3, 'Restaurante El Sabor', '7777-9012', 'Boulevard Principal 78, Ciudad'),
(4, 'Oficinas Ejecutivas', '7777-3456', 'Centro Empresarial, Torre B, Piso 5'),
(5, 'Clínica Médica Salud', '7777-7890', 'Paseo de la Reforma 223, Ciudad'),
(6, 'Escuela Nueva Era', '7777-2345', 'Calzada Educativa 67, Ciudad');

-- Inserción de datos en la tabla produccion
INSERT INTO produccion (id, tipo_armario, descripcion, fecha_inicio, fecha_estimada_fin, fecha_real_fin, estado, id_cliente, costo_total, notas) VALUES
(1, 'Armario de 2 puertas', 'Armario de roble con acabados finos', '2025-04-01', '2025-04-10', NULL, 'En proceso', 1, 3200.00, 'Cliente solicita acabado en barniz mate'),
(2, 'Closet empotrado', 'Closet de pino con puertas corredizas', '2025-04-05', '2025-04-18', NULL, 'En proceso', 2, 4500.00, NULL),
(3, 'Armario de cocina', 'Muebles de cocina completos en MDF', '2025-03-20', '2025-04-05', '2025-04-08', 'Finalizado', 3, 6800.00, 'Se entregó con retraso de 3 días por modificaciones solicitadas por el cliente'),
(4, 'Estantería para libros', 'Estantería de pino con 5 niveles', '2025-03-15', '2025-03-25', '2025-03-26', 'Finalizado', 4, 2100.00, NULL),
(5, 'Armario para medicamentos', 'Mueble con compartimentos y cerradura', '2025-04-10', '2025-04-25', NULL, 'En proceso', 5, 3800.00, 'Requiere compartimentos especiales para medicamentos'),
(6, 'Estaciones de trabajo', 'Set de 15 escritorios con gabinetes', '2025-04-12', '2025-05-15', NULL, 'En proceso', 6, 12500.00, 'Proyecto grande con alta prioridad');

-- Inserción de datos en la tabla compras
INSERT INTO compras (id, fecha_compra) VALUES
(1, '2025-01-15'),
(2, '2025-02-21'),
(3, '2025-03-28'),
(4, '2025-04-05'),
(5, '2025-04-15');

-- Inserción de datos en la tabla detalle_compra_insumos
INSERT INTO detalle_compra_insumos (id_compra, id_insumo, precio_unitario, cantidad) VALUES
(1, 1, 0.15, 285),
(1, 2, 120.00, 5),
(1, 3, 13.00, 32),
(2, 1, 0.15, 200),
(2, 4, 45.00, 10),
(3, 2, 125.00, 4),
(3, 3, 13.50, 27),
(4, 5, 8.50, 50),
(4, 6, 5.50, 100),
(5, 7, 65.00, 8),
(5, 8, 25.00, 30);

-- Inserción de datos en la tabla detalle_compra_materia_prima
INSERT INTO detalle_compra_materia_prima (id_compra, id_materia_prima, precio_unitario, cantidad) VALUES
(1, 2, 250.00, 15),
(1, 3, 120.00, 30),
(2, 1, 450.00, 10),
(2, 2, 260.00, 15),
(3, 3, 125.00, 25),
(3, 4, 380.00, 8),
(4, 5, 150.00, 20),
(5, 6, 520.00, 5),
(5, 1, 460.00, 7);

-- Inserción de datos en la tabla materiales_produccion
INSERT INTO materiales_produccion (id_produccion, id_materia_prima, cantidad) VALUES
(1, 1, 1.0),
(1, 5, 2.0),
(2, 2, 1.0),
(2, 3, 3.0),
(3, 3, 8.0),
(4, 2, 6.0),
(5, 5, 4.0),
(5, 3, 3.0),
(6, 2, 3.0),
(6, 5, 4.0),
(6, 3, 7.0);

-- Inserción de datos en la tabla insumos_produccion
INSERT INTO insumos_produccion (id_produccion, id_insumo, cantidad) VALUES
(1, 1, 50),
(1, 2, 1),
(1, 3, 6),
(1, 7, 2),
(2, 1, 80),
(2, 2, 2),
(2, 3, 8),
(2, 8, 4),
(3, 1, 120),
(3, 2, 3),
(3, 3, 15),
(3, 4, 5),
(4, 1, 40),
(4, 2, 1),
(4, 6, 3),
(5, 1, 60),
(5, 3, 10),
(5, 4, 3),
(6, 1, 250),
(6, 2, 8),
(6, 3, 30),
(6, 5, 60),
(6, 7, 5);

-- Inserción de datos en la tabla empleados_produccion
INSERT INTO empleados_produccion (id_produccion, id_empleado) VALUES
(1, 1),
(1, 2),
(1, 4),
(2, 1),
(2, 4),
(3, 1),
(3, 2),
(3, 4),
(4, 1),
(4, 6),
(5, 1),
(5, 2),
(5, 4),
(6, 1),
(6, 2),
(6, 4),
(6, 6),
(6, 7);

-- Inserción de datos en tabla de auditoría (inicialmente vacía, se llena con los triggers)
INSERT INTO historial_salarios (id_empleado, salario_anterior, salario_nuevo, fecha_cambio, usuario) VALUES
(1, 1400.00, 1500.00, '2025-01-10 09:15:30', 'admin'),
(2, 1650.00, 1800.00, '2025-02-12 10:30:45', 'admin'),
(4, 1300.00, 1400.00, '2025-03-05 14:20:15', 'admin');

-- Inserción de datos en tabla de resumen de precios
INSERT INTO resumen_precios_materiales (id_materia_prima, nombre, precio_promedio, ultima_compra) VALUES
(1, 'Madera de Roble', 455.00, '2025-04-15'),
(2, 'Madera de Pino', 255.00, '2025-02-21'),
(3, 'Lámina de MDF', 122.50, '2025-03-28'),
(4, 'Madera de Cedro', 380.00, '2025-04-05'),
(5, 'Tablero Aglomerado', 150.00, '2025-04-05'),
(6, 'Madera de Nogal', 520.00, '2025-04-15');

-- Inserción de datos en tabla de historial de estados
INSERT INTO historial_estados_produccion (id_produccion, estado_anterior, estado_nuevo, fecha_cambio, usuario) VALUES
(3, 'En proceso', 'Finalizado', '2025-04-08 16:45:00', 'admin'),
(4, 'En proceso', 'Finalizado', '2025-03-26 14:30:00', 'admin');

-- Inserción de datos en tabla de auditoría de clientes
INSERT INTO auditoria_clientes (id_cliente, campo_modificado, valor_anterior, valor_nuevo, fecha_modificacion, usuario) VALUES
(1, 'telefono', '7777-4321', '7777-1234', '2025-03-10 11:20:00', 'admin'),
(3, 'direccion', 'Calle Principal 78, Ciudad', 'Boulevard Principal 78, Ciudad', '2025-03-22 09:45:00', 'admin');

-- 1. Consulta básica para listar todos los proveedores
SELECT * FROM proveedores;

-- 2. Consulta para listar todos los proveedores ordenados por nombre
SELECT * FROM proveedores ORDER BY nombre ASC;

-- 3. Consulta para obtener la materia prima con su información de proveedor
SELECT mp.*, p.nombre as nombre_proveedor, p.telefono, p.email
FROM materia_prima mp
JOIN proveedores p ON mp.id_proveedor = p.id;

-- 4. Consulta para obtener los insumos con su información de proveedor (si existe)
SELECT i.*, p.nombre as nombre_proveedor, p.telefono, p.email
FROM insumos i
LEFT JOIN proveedores p ON i.id_proveedor = p.id;

-- 5. Consulta para calcular el total de compras por fecha
SELECT 
    c.id, 
    c.fecha_compra,
    (SELECT COALESCE(SUM(dci.precio_unitario * dci.cantidad), 0)
     FROM detalle_compra_insumos dci
     WHERE dci.id_compra = c.id) as total_insumos,
    (SELECT COALESCE(SUM(dcmp.precio_unitario * dcmp.cantidad), 0)
     FROM detalle_compra_materia_prima dcmp
     WHERE dcmp.id_compra = c.id) as total_materia_prima,
    (SELECT COALESCE(SUM(dci.precio_unitario * dci.cantidad), 0)
     FROM detalle_compra_insumos dci
     WHERE dci.id_compra = c.id) +
    (SELECT COALESCE(SUM(dcmp.precio_unitario * dcmp.cantidad), 0)
     FROM detalle_compra_materia_prima dcmp
     WHERE dcmp.id_compra = c.id) as total_compra
FROM compras c;

-- 6. Consulta para encontrar proyectos de producción en proceso
SELECT * FROM produccion WHERE estado = 'En proceso';

-- 7. Consulta para calcular la cantidad de empleados por cargo
SELECT 
    cargo, 
    COUNT(*) as cantidad, 
    AVG(salario) as salario_promedio
FROM personal
GROUP BY cargo;

-- 8. Consulta para encontrar el proveedor que suministra más materiales
SELECT 
    p.id,
    p.nombre as nombre_proveedor,
    COUNT(mp.id) as cantidad_materiales
FROM proveedores p
JOIN materia_prima mp ON p.id = mp.id_proveedor
GROUP BY p.id, p.nombre
ORDER BY cantidad_materiales DESC;

-- 9. Consulta para calcular el valor total de cada compra (desglosada)
SELECT 
    c.id,
    c.fecha_compra,
    'Insumo' as tipo,
    i.nombre,
    dci.precio_unitario,
    dci.cantidad,
    (dci.precio_unitario * dci.cantidad) as subtotal
FROM compras c
JOIN detalle_compra_insumos dci ON c.id = dci.id_compra
JOIN insumos i ON dci.id_insumo = i.id
UNION ALL
SELECT 
    c.id,
    c.fecha_compra,
    'Materia Prima' as tipo,
    mp.nombre,
    dcmp.precio_unitario,
    dcmp.cantidad,
    (dcmp.precio_unitario * dcmp.cantidad) as subtotal
FROM compras c
JOIN detalle_compra_materia_prima dcmp ON c.id = dcmp.id_compra
JOIN materia_prima mp ON dcmp.id_materia_prima = mp.id
ORDER BY id, tipo;

-- 10. Consulta para obtener la relación de empleados asignados a proyectos
SELECT 
    p.id,
    CONCAT(p.nombres, ' ', p.apellidos) as nombre_completo,
    p.cargo,
    COUNT(ep.id_produccion) as proyectos_asignados
FROM personal p
JOIN empleados_produccion ep ON p.id = ep.id_empleado
GROUP BY p.id, nombre_completo, p.cargo;

-- 11. Consulta para encontrar el proyecto con mayor costo
SELECT * FROM produccion ORDER BY costo_total DESC LIMIT 1;

-- 12. Consulta para obtener los proyectos que utilizan un material específico
SELECT p.*
FROM produccion p
JOIN materiales_produccion mp ON p.id = mp.id_produccion
WHERE mp.id_materia_prima = 1;

-- 13. Consulta para calcular el inventario utilizado por todos los proyectos
SELECT 
    mp.id,
    mp.nombre as material,
    SUM(mpp.cantidad) as cantidad_total
FROM materiales_produccion mpp
LEFT JOIN materia_prima mp ON mpp.id_materia_prima = mp.id
GROUP BY mp.id, mp.nombre;

-- 14. Consulta para encontrar los empleados con salario superior al promedio
SELECT 
    p.id,
    CONCAT(p.nombres, ' ', p.apellidos) as nombre_completo,
    p.cargo,
    p.salario,
    (SELECT AVG(salario) FROM personal) as salario_promedio
FROM personal p
WHERE p.salario > (SELECT AVG(salario) FROM personal);

-- 15. Consulta para verificar insumos con proveedores inexistentes
SELECT i.*
FROM insumos i
LEFT JOIN proveedores p ON i.id_proveedor = p.id
WHERE p.id IS NULL AND i.id_proveedor IS NOT NULL;

-- 16. Consulta para crear un reporte de proyectos por cliente
SELECT 
    c.nombre as cliente,
    COUNT(p.id) as cantidad_proyectos,
    SUM(p.costo_total) as costo_total,
    GROUP_CONCAT(CONCAT(p.tipo_armario, ' (', p.estado, ')') SEPARATOR ', ') as proyectos
FROM produccion p
JOIN clientes c ON p.id_cliente = c.id
GROUP BY c.nombre;

-- 17. Consulta para encontrar los materiales más utilizados
SELECT 
    mp.id,
    mp.nombre as material,
    SUM(mpp.cantidad) as cantidad_total,
    COUNT(DISTINCT mpp.id_produccion) as proyectos_count
FROM materiales_produccion mpp
LEFT JOIN materia_prima mp ON mpp.id_materia_prima = mp.id
GROUP BY mp.id, mp.nombre
ORDER BY cantidad_total DESC;

-- 18. Consulta para encontrar proyectos retrasados
SELECT *
FROM produccion
WHERE fecha_estimada_fin < CURDATE() AND estado != 'Finalizado';

-- 19. Consulta para obtener un resumen estadístico del personal
SELECT 
    COUNT(*) as cantidad_empleados,
    AVG(salario) as salario_promedio,
    MIN(salario) as salario_minimo,
    MAX(salario) as salario_maximo,
    SUM(salario) as masa_salarial
FROM personal;

-- 20. Consulta para analizar la evolución de precios de los insumos
SELECT 
    dci.id_insumo,
    i.nombre as nombre_insumo,
    DATE_FORMAT(c.fecha_compra, '%Y-%m') as periodo,
    AVG(dci.precio_unitario) as precio_promedio
FROM detalle_compra_insumos dci
JOIN compras c ON dci.id_compra = c.id
JOIN insumos i ON dci.id_insumo = i.id
GROUP BY dci.id_insumo, i.nombre, periodo
ORDER BY periodo ASC, dci.id_insumo ASC;