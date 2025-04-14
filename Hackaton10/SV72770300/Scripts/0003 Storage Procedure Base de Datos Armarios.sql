-- Storage Procedure crud_usuario

drop procedure if exists crud_usuario

DELIMITER $$

create procedure crud_usuario(in opcion_in int, in username_in varchar(50), in contrasena_in varchar(512), in email_in varchar(100),
in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select * from tbl_usuario where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_usuario(username, contrasena, email, usuario_creacion)
        values(username_in, contrasena_in, email_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_usuario
			set username = ifnull(username_in, username),
            contrasena = ifnull(contrasena_in, contrasena),
            email = ifnull(email_in, email),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_usuario	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_proveedores

drop procedure if exists crud_proveedores

DELIMITER $$

create procedure crud_proveedores(in opcion_in int, in nombre_in varchar(100), in ruc_in varchar(100), in telefono_in varchar(50),
in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select * from tbl_proveedores where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_proveedores(nombre, ruc, telefono, usuario_creacion)
        values(nombre_in, ruc_in, telefono_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_proveedores
			set nombre = ifnull(nombre_in, nombre),
            ruc = ifnull(ruc_in, ruc),
            telefono = ifnull(telefono_in, telefono),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_proveedores	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_empleados

drop procedure if exists crud_empleados

DELIMITER $$

create procedure crud_empleados(in opcion_in int, in dni_in varchar(13), in nombre_in varchar(100), in apellido_in varchar(100), 
in cargo_in varchar(100), in salario_in decimal(8,2), in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select * from tbl_empleados where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_empleados(dni, nombre, apellido, cargo, salario, usuario_creacion)
        values(dni_in, nombre_in, apellido_in, cargo_in, salario_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_empleados
			set dni =  ifnull(dni_in, dni),
            nombre = ifnull(nombre_in, nombre),
            apellido = ifnull(apellido_in, apellido),
            cargo = ifnull(cargo_in, cargo),
            salario = ifnull(salario_in, salario),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_empleados	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_materia_insumo

drop procedure if exists crud_materia_insumo

DELIMITER $$

create procedure crud_materia_insumo(in opcion_in int, in nombre_in varchar(100), in unidad_medicion_in varchar(20), 
in cantidad_in int, in tipo_in varchar(50), in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select * from tbl_materia_insumo where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_materia_insumo(nombre, unidad_medicion, cantidad, tipo, usuario_creacion)
        values(nombre_in, unidad_medicion_in, cantidad_in, tipo_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_materia_insumo
			set nombre = ifnull(nombre_in, nombre),
            unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
            cantidad = ifnull(cantidad_in, cantidad),
            tipo = ifnull(tipo_in, tipo),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_materia_insumo	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_compra

drop procedure if exists crud_compra

DELIMITER $$

create procedure crud_compra(in opcion_in int, in id_proveedor_in int, in monto_total_in decimal(8,2), 
in fecha_in date, in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select * from tbl_compra where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_compra(id_proveedor, monto_total, fecha, usuario_creacion)
        values(id_proveedor_in, monto_total_in, now(), usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_compra
			set id_proveedor = ifnull(id_proveedor_in, id_proveedor),
            monto_total = ifnull(monto_total_in, monto_total),
            fecha = ifnull(fecha_in, fecha),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_compra	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_produccion

drop procedure if exists crud_produccion

DELIMITER $$

create procedure crud_produccion(in opcion_in int, in tipo_in varchar(50), in nombre_in varchar(100), 
in cantidad_total_in int, in id_empleado_in int, in is_activo_in bit, id_in int, in usuario_in int)

begin
	if opcion_in = 1 then
    begin
		select p.id, p.tipo, p.nombre, p.cantidad_total, p.id_empleado as 'Responsable',
        p.usuario_creacion, p.fecha_creacion, p.usuario_modificacion, p.fecha_modificacion from tbl_produccion as p where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_produccion(tipo, nombre, cantidad_total, id_empleado, usuario_creacion)
        values(tipo_in, nombre_in, cantidad_total_in, id_empleado_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_produccion
			set tipo = ifnull(tipo_in, tipo),
            nombre = ifnull(nombre_in, nombre),
            cantidad_total = ifnull(cantidad_total_in, cantidad_total),
            id_empleado = ifnull(id_empleado_in, id_empleado),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_produccion	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_detalle_compra

drop procedure if exists crud_detalle_compra;

DELIMITER $$

create procedure crud_detalle_compra(
    in opcion_in int,
    in id_compra_in int,
    in id_materia_insumo_in int,
    in unidad_medicion_in varchar(20),
    in cantidad_in int,
    in monto_in decimal(8,2),
    in is_activo_in bit,
    in id_in int,
    in usuario_in int
)
begin
    if opcion_in = 1 then
        begin
            select * from tbl_detalle_compra where is_activo = 1;
        end;
    elseif opcion_in = 2 then
        begin
            insert into tbl_detalle_compra(id_compra, id_materia_insumo, unidad_medicion, cantidad, monto, usuario_creacion)
            values(id_compra_in, id_materia_insumo_in, unidad_medicion_in, cantidad_in, monto_in, usuario_in);

            -- update tbl_materia_insumo
            -- set cantidad = ifnull(cantidad + cantidad_in, cantidad)
            -- where id = id_materia_insumo_in;

        end;
    elseif opcion_in = 3 then
        begin
            -- declare old_detalle_cantidad int;
            -- select cantidad into old_detalle_cantidad
            -- from tbl_detalle_compra
            -- where id = id_in;

            update tbl_detalle_compra
            set id_compra = ifnull(id_compra_in, id_compra),
                id_materia_insumo = ifnull(id_materia_insumo_in, id_materia_insumo),
                unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
                cantidad = ifnull(cantidad_in, cantidad),
                monto = ifnull(monto_in, monto),
                is_activo = ifnull(is_activo_in, is_activo),
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;

            -- if cantidad_in is not null then
               -- update tbl_materia_insumo
               -- set cantidad = cantidad - old_detalle_cantidad + cantidad_in
               -- where id = ifnull(id_materia_insumo_in, (select id_materia_insumo from tbl_detalle_compra where id = id_in));
            -- end if;

        end;
    elseif opcion_in = 4 then
        begin
             -- declare deleted_detalle_cantidad int;
            -- declare deleted_materia_insumo_id int;
            -- select cantidad, id_materia_insumo into deleted_detalle_cantidad, deleted_materia_insumo_id
            -- from tbl_detalle_compra
            -- where id = id_in;

            update tbl_detalle_compra
            set is_activo = 0,
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;

            -- update tbl_materia_insumo
            -- set cantidad = cantidad - deleted_detalle_cantidad
            -- where id = deleted_materia_insumo_id;
        end;
    end if;
END $$

DELIMITER ;


-- Storage Procedure crud_detalle_produccion

drop procedure if exists crud_detalle_produccion;

DELIMITER $$

create procedure crud_detalle_produccion(
    in opcion_in int,
    in id_produccion_in int,
    in id_materia_insumo_in int,
    in unidad_medicion_in varchar(20),
    in cantidad_in int,
    in is_activo_in bit,
    in id_in int,
    in usuario_in int
)
begin
    if opcion_in = 1 then
        begin
            select * from tbl_detalle_produccion where is_activo = 1;
        end;
    elseif opcion_in = 2 then
        begin
            insert into tbl_detalle_produccion(id_produccion, id_materia_insumo, unidad_medicion, cantidad, usuario_creacion)
            values(id_produccion_in, id_materia_insumo_in, unidad_medicion_in, cantidad_in, usuario_in);
        end;
    elseif opcion_in = 3 then
        begin
            update tbl_detalle_produccion
            set id_produccion = ifnull(id_produccion_in, id_produccion),
                id_materia_insumo = ifnull(id_materia_insumo_in, id_materia_insumo),
                unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
                cantidad = ifnull(cantidad_in, cantidad),
                is_activo = ifnull(is_activo_in, is_activo),
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;
        end;
    elseif opcion_in = 4 then
        begin
            update tbl_detalle_produccion
            set is_activo = 0,
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;
        end;
    end if;
END $$

DELIMITER ;