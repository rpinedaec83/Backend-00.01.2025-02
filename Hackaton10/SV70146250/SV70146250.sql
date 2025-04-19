-- Creancion y uso de BD

create database SV70146250;
use SV70146250;

-- Creacion de tablas y sus relacionaes

create table empleados(
  id int auto_increment primary key,
  nombre varchar(255) not null,
  apellido varchar(255),
  cargo varchar(255),
  salario float default 1200,
  dni varchar(8)
);

create table proveedores (
  id int auto_increment primary key,
  nombre varchar(255),
  ruc varchar(10),
  cel varchar(11)
);

create table compra(
  id int auto_increment primary key,
  proveedor_id int,
  monto_total float,
  fecha datetime default now(),
  foreign key(proveedor_id) references proveedores(id)
);

create table produccion (
  id int auto_increment primary key,
  tipo varchar(100),
  nombre varchar(255),
  cantidad_total float,
  empleado int,
  foreign key (empleado) references empleados(id)
);

create table materia_insumo (
  id int auto_increment primary key,
  nombre varchar(255),
  unidad_medicion varchar(50),
  cantidad float,
  tipo varchar(100)
);

create table detalle_produccion (
  produccion_id int,
  materia_insumo_id int,
  unidad_medida varchar(50),
  primary key (produccion_id, materia_insumo_id),
  foreign key (produccion_id) references produccion(id),
  foreign key (materia_insumo_id) references materia_insumo(id)
);
create table detalle_compra (
  compra_id int,
  materia_insumo_id int,
  unidad_medicion varchar(50),
  cantidad float,
  monto decimal(10,2),
  primary key (compra_id, materia_insumo_id),
  foreign key (compra_id) references compra(id),
  foreign key (materia_insumo_id) references materia_insumo(id)
);

-- Store procedure

DELIMITER //

-- CRUD para la tabla empleados

CREATE PROCEDURE insertar_empleado(
IN nombre_in VARCHAR(255), 
IN apellido_in VARCHAR(255),
IN cargo_in VARCHAR(255), 
IN salario_in FLOAT, 
IN dni_in VARCHAR(8)
)
BEGIN
  INSERT INTO empleados(nombre, apellido, cargo, salario, dni)
  VALUES(nombre_in, apellido_in, cargo_in, salario_in, dni_in);
END //

CREATE PROCEDURE obtener_empleados()
BEGIN
  SELECT * FROM empleados;
END //

CREATE PROCEDURE obtener_empleado_por_id(
IN emp_id INT
)
BEGIN
  SELECT * FROM empleados WHERE id = emp_id;
END //

CREATE PROCEDURE actualizar_empleado(
IN emp_id INT, 
IN nombre_in VARCHAR(255), 
IN apellido_in VARCHAR(255), 
IN cargo_in VARCHAR(255), 
IN salario_in FLOAT, 
IN dni_in VARCHAR(8)
)
BEGIN
  UPDATE empleados SET nombre = nombre_in, apellido = apellido_in, cargo = cargo_in, salario = salario_in, dni = dni_in WHERE id = emp_id;
END //

CREATE PROCEDURE eliminar_empleado(
IN emp_id INT
)
BEGIN
  DELETE FROM empleados WHERE id = emp_id;
END //

-- CRUD para la tabla proveedores

CREATE PROCEDURE insertar_proveedor(
IN nombre_in VARCHAR(255), 
IN ruc_in VARCHAR(10), 
IN cel_in VARCHAR(11)
)
BEGIN
  INSERT INTO proveedores(nombre, ruc, cel) VALUES(nombre_in, ruc_in, cel_in);
END //

CREATE PROCEDURE obtener_proveedores()
BEGIN
  SELECT * FROM proveedores;
END //

CREATE PROCEDURE obtener_proveedor_por_id(
IN prov_id INT
)
BEGIN
  SELECT * FROM proveedores WHERE id = prov_id;
END //

CREATE PROCEDURE actualizar_proveedor(
IN prov_id INT,
IN nombre_in VARCHAR(255), 
IN ruc_in VARCHAR(10), 
IN cel_in VARCHAR(11)
)
BEGIN
  UPDATE proveedores SET nombre = nombre_in, ruc = ruc_in, cel = cel_in WHERE id = prov_id;
END //

CREATE PROCEDURE eliminar_proveedor(
IN prov_id INT
)
BEGIN
  DELETE FROM proveedores WHERE id = prov_id;
END //

-- CRUD para la tabla compra

CREATE PROCEDURE insertar_compra(
IN proveedor_id_in INT, 
IN monto_total_in FLOAT
)
BEGIN
  INSERT INTO compra(proveedor_id, monto_total) VALUES(proveedor_id_in, monto_total_in);
END //

CREATE PROCEDURE obtener_compras()
BEGIN
  SELECT * FROM compra;
END //

CREATE PROCEDURE obtener_compra_por_id(
IN compra_id INT
)
BEGIN
  SELECT * FROM compra WHERE id = compra_id;
END //

CREATE PROCEDURE actualizar_compra(
IN compra_id INT, 
IN proveedor_id_in INT
, IN monto_total_in FLOAT
)
BEGIN
  UPDATE compra SET proveedor_id = proveedor_id_in, monto_total = monto_total_in WHERE id = compra_id;
END //

CREATE PROCEDURE eliminar_compra(
IN compra_id INT
)
BEGIN
  DELETE FROM compra WHERE id = compra_id;
END //

-- CRUD para la tabla materia_insumo

CREATE PROCEDURE insertar_materia_insumo(
IN nombre_in VARCHAR(255), 
IN unidad_medicion_in VARCHAR(50), 
IN cantidad_in FLOAT, 
IN tipo_in VARCHAR(100)
)
BEGIN
  INSERT INTO materia_insumo(nombre, unidad_medicion, cantidad, tipo) VALUES(nombre_in, unidad_medicion_in, cantidad_in, tipo_in);
END //

CREATE PROCEDURE obtener_materia_insumos()
BEGIN
  SELECT * FROM materia_insumo;
END //

CREATE PROCEDURE obtener_materia_insumo_por_id(IN mat_id INT)
BEGIN
  SELECT * FROM materia_insumo WHERE id = mat_id;
END //

CREATE PROCEDURE actualizar_materia_insumo(
IN mat_id INT, IN nombre_in VARCHAR(255), 
IN unidad_medicion_in VARCHAR(50), 
IN cantidad_in FLOAT, 
IN tipo_in VARCHAR(100)
)
BEGIN
  UPDATE materia_insumo SET nombre = nombre_in, unidad_medicion = unidad_medicion_in, cantidad = cantidad_in, tipo = tipo_in WHERE id = mat_id;
END //

CREATE PROCEDURE eliminar_materia_insumo(
IN mat_id INT
)
BEGIN
  DELETE FROM materia_insumo WHERE id = mat_id;
END //

-- CRUD para la tabla produccion

CREATE PROCEDURE insertar_produccion(
IN tipo_in VARCHAR(100), 
IN nombre_in VARCHAR(255),
IN cantidad_total_in FLOAT, 
IN empleado_in INT
)
BEGIN
  INSERT INTO produccion(tipo, nombre, cantidad_total, empleado) VALUES(tipo_in, nombre_in, cantidad_total_in, empleado_in);
END //

CREATE PROCEDURE obtener_producciones()
BEGIN
  SELECT * FROM produccion;
END //

CREATE PROCEDURE obtener_produccion_por_id(IN prod_id INT)
BEGIN
  SELECT * FROM produccion WHERE id = prod_id;
END //

CREATE PROCEDURE actualizar_produccion(
IN prod_id INT, IN tipo_in VARCHAR(100), 
IN nombre_in VARCHAR(255), 
IN cantidad_total_in FLOAT, 
IN empleado_in INT
)
BEGIN
  UPDATE produccion SET tipo = tipo_in, nombre = nombre_in, cantidad_total = cantidad_total_in, empleado = empleado_in WHERE id = prod_id;
END //

CREATE PROCEDURE eliminar_produccion(
IN prod_id INT
)
BEGIN
  DELETE FROM produccion WHERE id = prod_id;
END //

-- CRUD para la tabla detalle_produccion

CREATE PROCEDURE insertar_detalle_produccion(
IN produccion_id_in INT, 
IN materia_insumo_id_in INT, 
IN unidad_medida_in VARCHAR(50)
)
BEGIN
  INSERT INTO detalle_produccion(produccion_id, materia_insumo_id, unidad_medida)
  VALUES(produccion_id_in, materia_insumo_id_in, unidad_medida_in);
END //

CREATE PROCEDURE obtener_detalle_produccion()
BEGIN
  SELECT * FROM detalle_produccion;
END //

CREATE PROCEDURE obtener_detalle_produccion_por_id(
IN prod_id INT, 
IN mat_id INT
)
BEGIN
  SELECT * FROM detalle_produccion WHERE produccion_id = prod_id AND materia_insumo_id = mat_id;
END //

CREATE PROCEDURE actualizar_detalle_produccion(
IN produccion_id_in INT, 
IN materia_insumo_id_in INT, 
IN unidad_medida_in VARCHAR(50)
)
BEGIN
  UPDATE detalle_produccion
  SET unidad_medida = unidad_medida_in
  WHERE produccion_id = produccion_id_in AND materia_insumo_id = materia_insumo_id_in;
END //

CREATE PROCEDURE eliminar_detalle_produccion(
IN produccion_id_in INT, 
IN materia_insumo_id_in INT
)
BEGIN
  DELETE FROM detalle_produccion
  WHERE produccion_id = produccion_id_in AND materia_insumo_id = materia_insumo_id_in;
END //

-- CRUD para la tabla detalle_compra

CREATE PROCEDURE insertar_detalle_compra(
IN compra_id_in INT, 
IN materia_insumo_id_in INT, 
IN unidad_medicion_in VARCHAR(50), 
IN cantidad_in FLOAT, 
IN monto_in DECIMAL(10,2)
)
BEGIN
  INSERT INTO detalle_compra(compra_id, materia_insumo_id, unidad_medicion, cantidad, monto)
  VALUES(compra_id_in, materia_insumo_id_in, unidad_medicion_in, cantidad_in, monto_in);
END //

CREATE PROCEDURE obtener_detalle_compras()
BEGIN
  SELECT * FROM detalle_compra;
END //

CREATE PROCEDURE obtener_detalle_compra_por_id(
IN compra_id_in INT, 
IN mat_id INT
)
BEGIN
  SELECT * FROM detalle_compra WHERE compra_id = compra_id_in AND materia_insumo_id = mat_id;
END //

CREATE PROCEDURE actualizar_detalle_compra(
IN compra_id_in INT, 
IN materia_insumo_id_in INT, 
IN unidad_medicion_in VARCHAR(50), 
IN cantidad_in FLOAT, 
IN monto_in DECIMAL(10,2)
)
BEGIN
  UPDATE detalle_compra
  SET unidad_medicion = unidad_medicion_in, cantidad = cantidad_in, monto = monto_in
  WHERE compra_id = compra_id_in AND materia_insumo_id = materia_insumo_id_in;
END //

CREATE PROCEDURE eliminar_detalle_compra(
IN compra_id_in INT, 
IN materia_insumo_id_in INT
)
BEGIN
  DELETE FROM detalle_compra WHERE compra_id = compra_id_in AND materia_insumo_id = materia_insumo_id_in;
END //

DELIMITER ;

