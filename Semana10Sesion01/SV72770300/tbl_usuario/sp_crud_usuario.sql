drop procedure if exists crud_usuario

DELIMITER $$

create procedure crud_usuario(in opcion int, in pusername varchar(100), in pcontrasena varchar(100), in pemail varchar(100), 
in pis_activo bit, pid int, in pusuario_creacion int, in pusuario_modificacion int)

begin
	IF opcion = 1 then
    begin
		select * from tbl_usuario where is_activo = 1;
    end;
    elseif opcion = 2 then
    begin
		insert into tbl_usuario(username, password, email, usuario_creacion, usuario_modificacion)
        values(pusername, pcontrasena, pemail, pusuario_creacion, pusuario_modificacion);
    end;
    elseif opcion = 3 then
    begin
		update tbl_usuario
			set username = ifnull(pusername, username),
            password = ifnull(pcontrasena, password),
            email = ifnull(pemail, email),
            usuario_creacion = ifnull(pusuario_creacion, usuario_creacion),
            is_activo = ifnull(pis_activo, is_activo),
            fecha_creacion = current_timestamp(),
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    elseif opcion = 4 then
    begin
		update tbl_usuario
			set is_activo = 0,
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = current_timestamp()
		where id = pid;
    end;
    end if;
END $$

DELIMITER ;