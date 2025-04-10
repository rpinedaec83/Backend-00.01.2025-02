use Veterinaria;

drop procedure if exists crud_mascota;

select * from tbl_mascota;

DELIMITER $$

create procedure crud_mascota(in opcion int,
						      in pnombre varchar(50),
                              in pfecha_nacimiento date,
                              in ppeso decimal(18,2),
                              in pid_especie int,
                              in pid_raza int,
                              in pid_color int,
                              in pid_sexo int,
                              in pid_propietario int,
                              in pis_activo bit,
                              in pid int,
                              in pusuario int)
BEGIN
	if opcion = 1 then
		select * from tbl_mascota where is_activo = 1;
	elseif opcion = 2 then
		insert into tbl_mascota(nombre, fecha_nacimiento, peso, id_especie, id_raza,
            id_color, id_sexo, id_propietario, usuario_creacion)
		values(pnombre, pfecha_nacimiento, ppeso, pid_especie, pid_raza,
            pid_color, pid_sexo, pid_propietario, pusuario);
	elseif opcion = 3 then
		update tbl_mascota
        set nombre = IFNULL(pnombre, nombre),
            fecha_nacimiento = IFNULL(pfecha_nacimiento, fecha_nacimiento),
            peso = IFNULL(ppeso, peso),
            id_especie = IFNULL(pid_especie, id_especie),
            id_raza = IFNULL(pid_raza, id_raza),
            id_color = IFNULL(pid_color, id_color),
            id_sexo = IFNULL(pid_sexo, id_sexo),
            id_propietario = IFNULL(pid_propietario, id_propietario),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
        where id = pid;
	elseif opcion = 4 then
        update tbl_mascota
        set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
        where id = pid;
	end if;
END $$

DELIMITER ;

-- mascotas activas
call crud_mascota(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- nueva mascota
call crud_mascota(2, 'Firulais', '2022-05-10', 12.3, 2, 1, 1, 1, 1, NULL, NULL, 1);

-- Actualizar peso y nombre de mascota con ID 2
call crud_mascota(3, 'Firu', NULL, 13.5, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1);

-- Desactivar mascota con ID 1
call crud_mascota(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1);

select * from tbl_mascota;