drop procedure if exists crud_vacuna;

DELIMITER $$

create procedure crud_vacuna(in opcion int, in pdescripcion varchar(50),in plote varchar(45),pis_activo bit, pid int, in pusuario int)
begin
	IF opcion = 1 then
    begin
		select * from tbl_vacuna where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_vacuna(descripcion, lote, usuario_creacion)
        values(pdescripcion, plote, pusuario);
    end;
    elseif opcion = 3 then
    begin
		update tbl_vacuna
			set descripcion = ifnull( pdescripcion,descripcion),
                 lote = ifnull( plote,lote),
            is_activo = ifnull(pis_activo,is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_vacuna
			set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;