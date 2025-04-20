-- -Trigger tbl_usuario

CREATE TABLE `tbl_usuario_audit` (
  `id` int,
  `username` varchar(50),
  `contrasena` varchar(512),
  `email` varchar(100),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);

DELIMITER $$
drop trigger if exists tgrInsertUsuario;
create trigger tgrInsertUsuario after insert on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.username,
    new.contrasena,
    new.email,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateUsuario;
create trigger tgrUpdateUsuario after update on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.username,
    old.contrasena,
    old.email,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteUsuario;
create trigger tgrDeleteUsuario after delete on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.username,
    old.contrasena,
    old.email,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_usuario(2, 'franciscomendo74', 'mendofrancis&/"#', 'francismend@gmail.com', null, null, 1);

call crud_usuario(3, 'benitojose1254', null, 'benitjos@outlook.es', 1, 3, 1);

call crud_usuario(4, null, null, null, null, 3, 2);

select * from tbl_usuario_audit;
delete from tbl_usuario where id=5;
select * from tbl_usuario;





-- Trigger tbl_proveedores

CREATE TABLE `tbl_proveedores_audit` (
  `id` int,
  `nombre` varchar(100),
  `ruc` varchar(100),
  `telefono` varchar(50),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
   accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertProveedor;
create trigger tgrInsertProveedor after insert on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.nombre,
    new.ruc,
    new.telefono,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateProveedor;
create trigger tgrUpdateProveedor after update on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.ruc,
    old.telefono,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteProveedor;
create trigger tgrDeleteProveedor after delete on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.ruc,
    old.telefono,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_proveedores(2, 'Promart S.A.', '20600098765', '987459876', null, null, 1);

call crud_proveedores(3, null, '20100012345', '941000258', 1, 2, 3);

call crud_proveedores(4, null, null, null, null, 4, 2);

select * from tbl_proveedores_audit;
delete from tbl_proveedores where id=5;
select * from tbl_proveedores;





-- Trigger tbl_empleados

CREATE TABLE `tbl_empleados_audit` (
  `id` int,
  `dni` varchar(13),
  `nombre` varchar(100),
  `apellido` varchar(100),
  `cargo` varchar(100),
  `salario` decimal(8,2),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertEmpleado;
create trigger tgrInsertEmpleado after insert on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.dni,
    new.nombre,
    new.apellido,
    new.cargo,
    new.salario,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateEmpleado;
create trigger tgrUpdateEmpleado after update on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.dni,
    old.nombre,
    old.apellido,
    old.cargo,
    old.salario,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteEmpleado;
create trigger tgrDeleteEmpleado after delete on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.dni,
    old.nombre,
    old.apellido,
    old.cargo,
    old.salario,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_empleados(2, '25146985', 'Lucas', 'Loayza Burgos', 'Ensamblador de Muebles', 1500.64, null, null, 4);

call crud_empleados(3, '01456792', null, 'Silva Ruiz', null, 2000.54, 1, 3, 3);

call crud_empleados(4, null, null, null, null, null, null, 4, 2);

select * from tbl_empleados_audit;
delete from tbl_empleados where id=5;
select * from tbl_empleados;





-- Trigger tbl_materia_insumo

CREATE TABLE `tbl_materia_insumo_audit` (
  `id` int,
  `nombre` varchar(100),
  `unidad_medicion` varchar(20),
  `cantidad` int,
  `tipo` varchar(50),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertMateriaInsumo;
create trigger tgrInsertMateriaInsumo after insert on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.nombre,
    new.unidad_medicion,
    new.cantidad,
    new.tipo,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateMateriaInsumo;
create trigger tgrUpdateMateriaInsumo after update on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.unidad_medicion,
    old.cantidad,
    old.tipo,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteMateriaInsumo;
create trigger tgrDeleteMateriaInsumo after delete on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.unidad_medicion,
    old.cantidad,
    old.tipo,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_materia_insumo(2, 'Melamina', 'Pliego', '50', 'Materia prima', null, null, 2);

call crud_materia_insumo(3, '(MDF)', null, 40, null, 1, 2, 3);

call crud_materia_insumo(4, null, null, null, null, null, 3, 4);

select * from tbl_materia_insumo_audit;
delete from tbl_materia_insumo where id=11;
select * from tbl_materia_insumo;





-- Trigger tbl_compra

CREATE TABLE `tbl_compra_audit` (
  `id` int,
  `id_proveedor` int(11),
  `monto_total` decimal(8,2),
  `fecha` datetime,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertCompra;
create trigger tgrInsertCompra after insert on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_proveedor,
    new.monto_total,
    new.fecha,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateCompra;
create trigger tgrUpdateCompra after update on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_proveedor,
    old.monto_total,
    old.fecha,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteCompra;
create trigger tgrDeleteCompra after delete on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_proveedor,
    old.monto_total,
    old.fecha,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_compra(2, 1, 410, null, null, null, 1);
call crud_compra(2, 3, 850, null, null, null, 3);

call crud_compra(3, null, 950, null, 1, 9, 3);

call crud_compra(4, null, null, null, null, 5, 1);

select * from tbl_compra_audit;
delete from tbl_compra where id=8;
select * from tbl_compra;





-- Trigger tbl_produccion

CREATE TABLE `tbl_produccion_audit` (
  `id` int,
  `tipo` varchar(50),
  `nombre` varchar(100),
  `cantidad_total` int,
  `id_empleado` int,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertProduccion;
create trigger tgrInsertProduccion after insert on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.tipo,
    new.nombre,
    new.cantidad_total,
    new.id_empleado,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateProduccion;
create trigger tgrUpdateProduccion after update on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.tipo,
    old.nombre,
    old.cantidad_total,
    old.id_empleado,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteProduccion;
create trigger tgrDeleteProduccion after delete on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.tipo,
    old.nombre,
    old.cantidad_total,
    old.id_empleado,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_produccion(2, 'Multifuncional', 'Armario con Escritorio Incorporado', 15, 4, null, null, 2);

call crud_produccion(3, 'Vestidor (Walk-in)', 'Armario Vestidor Abierto / Walk-in', null, null, 1, 6, 4);

call crud_produccion(4, null, null, null, null, null, 4, 1);

select * from tbl_produccion_audit;
delete from tbl_produccion where id=6;
select * from tbl_produccion;





-- Trigger tbl_detalle_compra

CREATE TABLE `tbl_detalle_compra_audit` (
  `id` int,
  `id_compra` int,
  `id_materia_insumo` int,
  `unidad_medicion` varchar(20),
  `cantidad` int,
  `monto` decimal(8,2),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertDetalleCompra;
create trigger tgrInsertDetalleCompra after insert on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_compra,
    new.id_materia_insumo,
    new.unidad_medicion,
    new.cantidad,
    new.monto,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateDetalleCompra;
create trigger tgrUpdateDetalleCompra after update on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_compra,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.monto,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteDetalleCompra;
create trigger tgrDeleteDetalleCompra after delete on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_compra,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.monto,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_detalle_compra(2, 3, 9, 'Bolsa', 3, 500.00, null, null, 2);
call crud_detalle_compra(2, 3, 2, 'Pliego', 5, 285.20, null, null, 1);

call crud_detalle_compra(3, null, null, null, 5, 200, 1, 9, 4);
call crud_detalle_compra(3, null, 10, 'Hoja', 15, 85.20, 1, 11, 3);

call crud_detalle_compra(4, null, null, null, null, null, null, 5, 3);

select * from tbl_detalle_compra_audit;
delete from tbl_detalle_compra where id=10;
select * from tbl_detalle_compra;





-- Trigger tbl_detalle_produccion

CREATE TABLE `tbl_detalle_produccion_audit` (
  `id` int,
  `id_produccion` int,
  `id_materia_insumo` int,
  `unidad_medicion` varchar(20),
  `cantidad` int,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
);


DELIMITER $$
drop trigger if exists tgrInsertDetalleProduccion;
create trigger tgrInsertDetalleProduccion after insert on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_produccion,
    new.id_materia_insumo,
    new.unidad_medicion,
    new.cantidad,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrUpdateDetalleProduccion;
create trigger tgrUpdateDetalleProduccion after update on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_produccion,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;


DELIMITER $$
drop trigger if exists tgrDeleteDetalleProduccion;
create trigger tgrDeleteDetalleProduccion after delete on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_produccion,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;

call crud_detalle_produccion(2, 5, 2, 'Pliego', 20, null, null, 2);
call crud_detalle_produccion(2, 5, 7, 'Litros', 3, null, null, 4);
call crud_detalle_produccion(2, 5, 5, 'Unidad', 16, null, null, 1);

call crud_detalle_produccion(3, null, null, null, 4, 1, 9, 2);

call crud_detalle_produccion(4, null, null, null, null, null, 7, 3);

select * from tbl_detalle_produccion_audit;
delete from tbl_detalle_produccion where id=9;
select * from tbl_detalle_produccion;