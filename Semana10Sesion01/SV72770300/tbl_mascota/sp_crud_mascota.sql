drop procedure if exists crud_mascota

DELIMITER $$

create procedure crud_mascota(in opcion int, in pnombre varchar(100), in pfecha_nacimiento date, in p_peso decimal(8,2), in pid_especie int, in pid_raza int, 
in pid_color int, in pid_sexo int, in pid_propietario int, in pis_activo bit, pid int, in pusuario int)

begin
	IF opcion = 1 then
    begin
		select * from tbl_mascota where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_mascota(nombre, fecha_nacimiento, peso, id_especie, id_raza, id_color, id_sexo, id_propietario, usuario_creacion)
        values(pnombre, pfecha_nacimiento, p_peso, pid_especie, pid_raza, pid_color, pid_sexo, pid_propietario, pusuario);
    end;
    elseif opcion = 3 then
    begin
		update tbl_mascota
			set nombre = ifnull(pnombre, nombre),
            fecha_nacimiento = ifnull(pfecha_nacimiento, fecha_nacimiento),
            peso = ifnull(p_peso, peso),
            id_especie = ifnull(pid_especie, id_especie),
            id_raza = ifnull(pid_raza, id_raza),
            id_color = ifnull(pid_color, id_color),
            id_sexo = ifnull(pid_sexo, id_sexo),
            id_propietario = ifnull(pid_propietario, id_propietario),
            is_activo = ifnull(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_mascota
			set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;