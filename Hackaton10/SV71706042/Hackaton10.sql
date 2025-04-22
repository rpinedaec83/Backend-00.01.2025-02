

use produccion_armarios;

drop table if exists proveedor;
drop table if exists materia_prima;
drop table if exists insumo;
drop table if exists producto;
drop table if exists producto_materia_prima;
drop table if exists producto_insumo;
drop table if exists empleado;
drop table if exists plan_produccion;
drop table if exists produccion_empleado;
drop table if exists inventario_producto;
drop table if exists compra;
drop table if exists compra_materia_insumo;
drop table if exists plan_produccion_producto;
drop table if exists detalle_compra;
-- ------------------------------------------------------------------
-- tabla de proveedores
create table proveedor (
    id_proveedor int auto_increment primary key,
    nombre varchar(100) not null,
    contacto varchar(100),
    telefono varchar(20),
    direccion varchar(255),
    is_activo bit
);

-- compras generales
create table compra (
    id int auto_increment primary key,
    fecha datetime not null default current_timestamp(),
    proveedor_id int,
    foreign key (proveedor_id) references proveedor(id_proveedor)
);

-- detalle de conpra
create table detalle_compra (
    id int auto_increment primary key,
    compra_id int,
    tipo enum('materia','insumo'),
    id_recurso int,
    cantidad decimal(10,2),
    unidad_medida varchar(20),
    descripcion varchar(256),
    foreign key (compra_id) references compra(id) -- esto es ya que una compra puede tener muchos detalles asi que absorbe su PK
);
-- ------------------------------------------------------------------
-- tabla de materia prima
create table materia_prima (
    id_materia_prima int auto_increment primary key,
    nombre varchar(100),
    unidad_medida varchar(20),
    stock_actual decimal(10,2),
    id_proveedor int,
    foreign key (id_proveedor) references proveedor(id_proveedor)
);

-- tabla de insumos
create table insumo (
    id_insumo int auto_increment primary key,
    nombre varchar(100),
    unidad_medida varchar(20),
    stock_actual decimal(10,2),
    id_proveedor int,
    foreign key (id_proveedor) references proveedor(id_proveedor)
);
-- ------------------------------------------------------------------
-- tabla de productos (armarios)
create table producto (
    id_producto int auto_increment primary key,
    codigo varchar(20) unique not null, -- codigo unico para etiquetare a cada armario
    nombre varchar(100) not null,
    descripcion varchar(255),
    stock_actual int default 0 -- cuando se agregue algun producto nuevo, por defecto iniciara en 0 su stock
);

-- tabla plan de produccion
create table plan_produccion (
    id_plan int auto_increment primary key,
    fecha_inicio date,
    fecha_fin date
);

-- tabla intermedia entre plan y producto
create table plan_produccion_producto (
    id int auto_increment primary key,
    id_plan int,
    id_producto int,
    cantidad_estimado int,
    foreign key (id_plan) references plan_produccion(id_plan),
    foreign key (id_producto) references producto(id_producto)
); -- En un plan de produccion puede haber muchos productos y un producto puede estar en varios planes por eso una tabla extra
-- ---------------CANTIDADES REQUERIDAS-----------------------
-- tabla cantidades necesarias materia prima por producto
create table producto_materia_prima (
    id int auto_increment primary key,
    id_producto int,
    id_materia_prima int,
    cantidad_requerida decimal(10,2),
    foreign key (id_producto) references producto(id_producto),
    foreign key (id_materia_prima) references materia_prima(id_materia_prima)
);

-- tabla cantidades necesarias insumos por producto
create table producto_insumo (
    id int auto_increment primary key,
    id_producto int,
    id_insumo int,
    cantidad_requerida decimal(10,2),
    foreign key (id_producto) references producto(id_producto),
    foreign key (id_insumo) references insumo(id_insumo)
);
-- ------------------------------------------------------------------
-- tabla empleados
create table empleado (
    id_empleado int auto_increment primary key,
    nombre varchar(100),
    apellido varchar(100),
    cargo varchar(50),
    fecha_ingreso date,
    salario_base decimal(10,2)
);
-- Se le asignara a un empleado una produccion de productos selecionados:

-- tabla produccion por empleado
create table produccion_empleado (
    id int auto_increment primary key,
    id_plan int,
    id_empleado int,
    id_producto int,
    cantidad_armarios int,
    pago_total decimal(10,2),
    foreign key (id_plan) references plan_produccion(id_plan),
    foreign key (id_empleado) references empleado(id_empleado),
    foreign key (id_producto) references producto(id_producto)
);

-- inventario de productos una vez esten terminados: 
create table inventario_producto (
    id int auto_increment primary key,
    id_producto int,
    cantidad_disponible int,
    ultima_actualizacion timestamp default current_timestamp(),
    foreign key (id_producto) references producto(id_producto)
);

-- datos de prueba

insert into proveedor (nombre, contacto, telefono, direccion,is_activo) values
('maderas del sur','luis prado','987654321','calle 123',1),
('cristales ica','sofia ramos','999888777','av. principal 456',1),
('herrajes andinos','carlos vega','922112233','jr. comercio 789',1);

insert into materia_prima (nombre, unidad_medida, stock_actual, id_proveedor) values
('madera mdf','m2',1500,1),
('vidrio templado','m2',600,2),
('madera pino','m2',1000,1);

insert into insumo (nombre, unidad_medida, stock_actual, id_proveedor) values
('tornillos','unidad',25000,1),
('pegamento','litro',250,1),
('bisagras','unidad',8000,3);

insert into producto (codigo, nombre, descripcion, stock_actual) values
('arm001','armario clasico','armario de madera con 2 puertas',20),
('arm002','armario moderno','armario con diseno minimalista',5),
('arm003','armario medio','armario de tamano intermedio',10),
('arm004','armario lujoso','armario con diseno lujoso',10);

insert into producto_materia_prima (id_producto, id_materia_prima, cantidad_requerida) values
(1,1,3.5), (1,2,1.0), (2,1,4.0), (2,2,1.5), (3,3,3.0), (4,1,5.5), (4,2,2.0);

insert into producto_insumo (id_producto, id_insumo, cantidad_requerida) values
(1,1,50), (1,2,0.5), (2,1,60), (2,2,0.75), (3,1,40), (3,2,0.4), (4,1,70), (4,2,1.0), (4,3,6);

insert into empleado (nombre, apellido, cargo, fecha_ingreso, salario_base) values
('juan','perez','armador','2023-01-01',1500.00),
('ana','gomez','armadora','2022-06-15',1600.00),
('carlos','diaz','armador','2023-02-20',1400.00),
('luisa','ramirez','armadora','2023-05-10',1550.00);

insert into plan_produccion (fecha_inicio, fecha_fin) values
('2025-04-01','2025-04-30'),
('2025-05-01','2025-05-31');

insert into plan_produccion_producto (id_plan, id_producto, cantidad_estimado) values
(1,1,30), (1,2,20), (1,3,10), (1,4,40), (2,1,25), (2,3,15);

insert into produccion_empleado (id_plan, id_empleado, id_producto, cantidad_armarios, pago_total) values
(1,1,1,10,300.00), (1,2,1,12,360.00), (1,3,2,8,240.00), (1,4,3,5,150.00), (1,1,4,15,450.00);

insert into inventario_producto (id_producto, cantidad_disponible) values
(1,22), (2,10), (3,8), (4,15);

insert into compra (proveedor_id) values
(1), (2);

insert into detalle_compra (compra_id, tipo, id_recurso, cantidad, unidad_medida, descripcion) values
(1,'materia',1,75,'m2','compra de madera mdf'),
(2,'materia',2,30,'m2','compra de vidrio templado'),
(2,'insumo',1,3000,'unidad','compra de tornillos');




