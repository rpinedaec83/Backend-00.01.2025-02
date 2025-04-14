drop procedure if exists crud_nacionalidad

DELIMITER $$

create procedure crud_nacionalidad(in opcion int, in pdescripcion varchar(100), in pis_activo bit, pid int, in pusuario int)
begin
	IF opcion = 1 then
    begin
		select * from tbl_nacionalidad where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_nacionalidad(descripcion, usuario_creacion)
        values(pdescripcion, pusuario);
    end;
    elseif opcion = 3 then
    begin
		update tbl_nacionalidad
			set descripcion = ifnull(pdescripcion, descripcion),
            is_activo = ifnull(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_nacionalidad
			set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;