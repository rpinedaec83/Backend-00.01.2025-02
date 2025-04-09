drop procedure if exists crud_mascota_vacuna

DELIMITER $$

create procedure crud_mascota_vacuna(in opcion int, in pid_mascota int, in pid_vacuna int, in pfecha_aplicacion date, 
in pis_activo bit, pid int, in pusuario_creacion int, in pusuario_modificacion int)

begin
	IF opcion = 1 then
    begin
		select * from tbl_mascota_vacuna where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_mascota_vacuna(id_mascota, id_vacuna, fecha_aplicacion, usuario_creacion, usuario_modificacion)
        values(pid_mascota, pid_vacuna, now(), pusuario_creacion, pusuario_modificacion);
    end;
    elseif opcion = 3 then
    begin
		update tbl_mascota_vacuna
			set id_mascota = ifnull(pid_mascota, id_mascota),
            id_vacuna = ifnull(pid_vacuna, pid_vacuna),
            fecha_aplicacion = ifnull(pfecha_aplicacion, now()),
            usuario_creacion = ifnull(pusuario_creacion, usuario_creacion),
            is_activo = ifnull(pis_activo, is_activo),
            fecha_creacion = current_timestamp(),
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_mascota_vacuna
			set is_activo = 0,
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;