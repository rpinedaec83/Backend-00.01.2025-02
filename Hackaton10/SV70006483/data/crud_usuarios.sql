DROP PROCEDURE IF EXISTS crud_usuarios;

DELIMITER $$

CREATE PROCEDURE crud_usuarios(
    IN opcion INT,
    IN pusername VARCHAR(50),
    IN ppassword VARCHAR(100),
    IN pemail VARCHAR(100),
    IN prol ENUM('admin', 'empleado', 'gerente'),
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar usuarios activos
        SELECT * FROM usuarios WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo usuario
        INSERT INTO usuarios(username, password, email, rol)
        VALUES(pusername, ppassword, pemail, prol);

    ELSEIF opcion = 3 THEN
        -- Actualizar usuario existente
        UPDATE usuarios
        SET 
            username = IFNULL(pusername, username),
            password = IFNULL(ppassword, password),
            email = IFNULL(pemail, email),
            rol = IFNULL(prol, rol),
            is_activo = IFNULL(pis_activo, is_activo)
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar usuario
        UPDATE usuarios
        SET is_activo = 0
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
