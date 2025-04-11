drop procedure if exists crud_propietario

DELIMITER $$

create procedure crud_propietario(in opcion int, in pnombre varchar(100), in papellido varchar(100), in pdocumento varchar(13), in pdireccion varchar(500), in ptelefono varchar(20), 
in pid_nacionalidad int, in pis_activo bit, pid int, in pusuario int)

begin
	IF opcion = 1 then
    begin
		select * from tbl_propietario where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_propietario(nombre, apellido, documento, direccion, telefono, id_nacionalidad, usuario_creacion)
        values(pnombre, papellido, pdocumento, pdireccion, ptelefono, pid_nacionalidad, pusuario);
    end;
    elseif opcion = 3 then
    begin
		update tbl_propietario
			set nombre = ifnull(pnombre, nombre),
            apellido = ifnull(papellido, apellido),
            documento = ifnull(pdocumento, documento),
            direccion = ifnull(pdireccion, direccion),
            telefono = ifnull(ptelefono, telefono),
            id_nacionalidad = ifnull(pid_nacionalidad, id_nacionalidad),
            is_activo = ifnull(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_propietario
			set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;