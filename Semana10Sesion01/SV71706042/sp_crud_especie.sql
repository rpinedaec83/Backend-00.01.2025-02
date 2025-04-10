use Veterinaria;
drop procedure if exists crud_especie;

DELIMITER $$

create procedure crud_especie(in opcion int,
								in pdescripcion varchar(100),
								in pis_activo bit,
								in pid int,
								in pusuario int
								)
BEGIN
	if opcion = 1 then
		select * from tbl_especie where is_activo = 1;
	elseif opcion = 2 then
		insert into tbl_especie(descripcion,usuario_creacion)
        values(pdescripcion,pusuario);
	elseif opcion = 3 then
		update tbl_especie
        set descripcion = IFNULL(pdescripcion, descripcion),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
		where id = pid;
	elseif opcion = 4 then
		update tbl_especie
        set is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = current_timestamp()
        where id = pid;

    end if;

END $$

DELIMITER ;
# 1
call crud_especie(1, NULL, NULL, NULL, NULL);

# 2
call crud_especie(2, 'Conejos', NULL, NULL, 1);

# 3
call crud_especie(3, 'Conejos Enanos', NULL, 4, 1);

# 4
call crud_especie(4, NULL, NULL, 3, 1);

select * from tbl_especie;

