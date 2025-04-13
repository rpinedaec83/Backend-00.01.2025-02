create table proveedor_audit (
    id_audit int auto_increment primary key,
    id_proveedor int,
    nombre varchar(100),
    contacto varchar(100),
    telefono varchar(20),
    direccion varchar(255),
    accion char(1),
    fecha timestamp default current_timestamp()
);

create table compra_audit (
    id_audit int auto_increment primary key,
    id_compra int,
    proveedor_id int,
    fecha datetime,
    accion char(1),
    fecha_audit timestamp default current_timestamp()
);

create table producto_audit (
    id_audit int auto_increment primary key,
    id_producto int,
    codigo varchar(20),
    nombre varchar(100),
    descripcion varchar(255),
    stock_actual int,
    accion char(1),
    fecha timestamp default current_timestamp()
);

create table inventario_producto_audit (
    id_audit int auto_increment primary key,
    id_producto int,
    cantidad_disponible int,
    accion char(1),
    fecha timestamp default current_timestamp()
);

-- -----------------------proveedor------------------------------------------------


create trigger trg_proveedor_insert
after insert on proveedor
for each row
insert into proveedor_audit (id_proveedor, nombre, contacto, telefono, direccion, accion)
values (new.id_proveedor, new.nombre, new.contacto, new.telefono, new.direccion, 'I');

create trigger trg_proveedor_update
after update on proveedor
for each row
insert into proveedor_audit (id_proveedor, nombre, contacto, telefono, direccion, accion)
values (new.id_proveedor, new.nombre, new.contacto, new.telefono, new.direccion, 'U');

create trigger trg_proveedor_delete
after delete on proveedor
for each row
insert into proveedor_audit (id_proveedor, nombre, contacto, telefono, direccion, accion)
values (old.id_proveedor, old.nombre, old.contacto, old.telefono, old.direccion, 'D');

-- ------------------------------------------------compra------------------------------------------------
create trigger trg_compra_insert
after insert on compra
for each row
insert into compra_audit (id_compra, proveedor_id, fecha, accion)
values (new.id, new.proveedor_id, new.fecha, 'I');

create trigger trg_compra_delete
after delete on compra
for each row
insert into compra_audit (id_compra, proveedor_id, fecha, accion)
values (old.id, old.proveedor_id, old.fecha, 'D');

-- ------------------------------------------------producto------------------------------------------------
create trigger trg_producto_insert
after insert on producto
for each row
insert into producto_audit (id_producto, codigo, nombre, descripcion, stock_actual, accion)
values (new.id_producto, new.codigo, new.nombre, new.descripcion, new.stock_actual, 'I');

create trigger trg_producto_update
after update on producto
for each row
insert into producto_audit (id_producto, codigo, nombre, descripcion, stock_actual, accion)
values (new.id_producto, new.codigo, new.nombre, new.descripcion, new.stock_actual, 'U');

-- i------------------------------------------------nventario_producto------------------------------------------------
create trigger trg_inventario_producto_insert
after insert on inventario_producto
for each row
insert into inventario_producto_audit (id_producto, cantidad_disponible, accion)
values (new.id_producto, new.cantidad_disponible, 'I');

create trigger trg_inventario_producto_update
after update on inventario_producto
for each row
insert into inventario_producto_audit (id_producto, cantidad_disponible, accion)
values (new.id_producto, new.cantidad_disponible, 'U');