-- -----------------------------------PROCEDURE CRUD para PROVEEDOR-----------------------------------
-- crear
delimiter $$
create procedure insertar_proveedor(
    in p_nombre varchar(100),
    in p_contacto varchar(100),
    in p_telefono varchar(20),
    in p_direccion varchar(255)
)
begin
    insert into proveedor(nombre, contacto, telefono, direccion)
    values (p_nombre, p_contacto, p_telefono, p_direccion);
end $$
delimiter ;

-- leer
delimiter $$
create procedure listar_proveedores()
begin
    select * from proveedor;
end $$
delimiter ;

-- actualizar
delimiter $$
create procedure actualizar_proveedor(
    in p_id int,
    in p_nombre varchar(100),
    in p_contacto varchar(100),
    in p_telefono varchar(20),
    in p_direccion varchar(255)
)
begin
    update proveedor set
        nombre = p_nombre,
        contacto = p_contacto,
        telefono = p_telefono,
        direccion = p_direccion
    where id_proveedor = p_id;
end $$
delimiter ;

-- eliminar
delimiter $$
create procedure eliminar_proveedor(
    in p_id int
)
begin
    update proveedor set is_activo=0 where id_proveedor = p_id;
end $$
delimiter ;

-- -----------------------------------CRUD para tabla COMPRA-----------------------------------

-- insertar
delimiter $$
create procedure insertar_compra(
    in p_proveedor_id int
)
begin
    insert into compra(proveedor_id)
    values (p_proveedor_id);
end $$
delimiter ;

-- leer
delimiter $$
create procedure listar_compras()
begin
    select * from compra;
end $$
delimiter ;

-- -----------------------------------CRUD para INVENTARIO-----------------------------------

-- insertar
delimiter $$
create procedure insertar_inventario(
    in p_id_producto int,
    in p_cantidad int
)
begin
    insert into inventario_producto(id_producto, cantidad_disponible)
    values (p_id_producto, p_cantidad);
end $$
delimiter ;

-- actualizar
delimiter $$
create procedure actualizar_inventario(
    in p_id_producto int,
    in p_nueva_cantidad int
)
begin
    update inventario_producto
    set cantidad_disponible = p_nueva_cantidad,
        ultima_actualizacion = current_timestamp()
    where id_producto = p_id_producto;
end $$
delimiter ;

-- listar
delimiter $$
create procedure listar_inventario()
begin
    select * from inventario_producto;
end $$
delimiter ;
