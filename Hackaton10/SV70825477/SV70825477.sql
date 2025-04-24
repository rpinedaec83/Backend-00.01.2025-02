create database SV70825477;
 
use SV70825477;
create table empleados(
id int auto_increment primary key,
nombre varchar(255) not null,
apellido varchar(255),
cargo varchar(255) ,
salario float default 1200,
dni varchar(8)
);
 
select * from empleados;
insert into empleados(nombre,apellido,cargo,salario,dni)
values('Pedro','ramirez','gerente',4500,'78789098');
 
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
 
 
select * from proveedores;
insert into proveedores(nombre, ruc)
values('inka sac','7878374689');
 
insert into compra(proveedor_id,monto_total)
values(1,6500);

select * from compra;
select * from compra
inner join proveedores
on compra.proveedor_id = proveedores.id;
-- //////////////////////////////////////////////////////////////////////
create table materiaInsumo (
id int auto_increment primary key,
nombre varchar(255),
unidad_medicion varchar(255),
cantidad varchar(255),
tipo varchar (255)
);
 select*from materiaInsumo;
  insert into materiaInsumo(nombre,unidad_medicion,cantidad,tipo)
values('Madera','5','10','materia'); 
 -- ////////////////////////////////////////////////////////////////////////
 create table detalleProduccion(
produccion_id int,
materia_insumo_id int,
unidad_medida varchar (255),
cantidad varchar(255),
foreign key(produccion_id) references produccion(id),
foreign key(materia_insumo_id) references materiaInsumo(id)
 );
 select*from detalleProduccion;
 insert into detalleProduccion(produccion_id,materia_insumo_id,unidad_medida,cantidad) 
values(1,1,'lt','5');               
 -- ////////////////////////////////////////////////////////////////////////
  create table detalleCompra(
compra_id int,
materia_insumo_id int,
unidad_medicion varchar(255),
cantidad varchar(255),
monto varchar(255),
foreign key(compra_id) references compra(id),
foreign key(materia_insumo_id) references materiaInsumo(id)
);
select*from detalleCompra;
 insert into detallecompra(compra_id,materia_insumo_id,unidad_medicion,cantidad,monto) 
values(1,1,'lt','5','5');
 -- ////////////////////////////////////////////////////////////////////////
 create table produccion(
 id int auto_increment primary key,
 tipo varchar(255),
 nombre varchar(255),
 cantidad_total varchar(255)
  
 );
 select*from produccion;
  insert into produccion(tipo,nombre,cantidad_total)
values('materia','silla','5'),
('materia','mesa','5');

create table produccionactualizado(
produccion_id int,
tipo varchar (255) default null,
nombre varchar (255) default null,
cantidad_total varchar(255) default null
);
select*from produccionactualizado;

DELIMITER //
CREATE TRIGGER guardarRegistrosInsertados
AFTER INSERT
ON produccion for each row
BEGIN
INSERT INTO produccionactualizado(tipo,nombre,cantidad_total)
VALUES (NEW.tipo,NEW.nombre,NEW.cantidad_total);
END // 
DELIMITER ;










