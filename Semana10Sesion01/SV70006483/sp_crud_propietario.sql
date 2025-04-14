DROP PROCEDURE IF EXISTS crud_propietario;

DELIMITER $$

CREATE PROCEDURE crud_propietario(
    IN opcion INT,
    IN pnombre VARCHAR(50),
    IN papellido VARCHAR(100),
    IN pdocumento VARCHAR(13),
    IN pdireccion VARCHAR(500),
    IN ptelefono VARCHAR(20),
    IN pid_nacionalidad INT,
    IN pis_activo BIT,
    IN pid INT,
    IN pusuario INT
)
BEGIN
    IF opcion = 1 THEN
    BEGIN
        SELECT * FROM tbl_propietario WHERE is_activo = 1;
    END;

    ELSEIF opcion = 2 THEN
    BEGIN
        INSERT INTO tbl_propietario (
            nombre, apellido, documento, direccion, telefono, id_nacionalidad, usuario_creacion
        ) VALUES (
            pnombre, papellido, pdocumento, pdireccion, ptelefono, pid_nacionalidad, pusuario
        );
    END;

    ELSEIF opcion = 3 THEN
    BEGIN
        UPDATE tbl_propietario
        SET nombre = IFNULL(pnombre, nombre),
            apellido = IFNULL(papellido, apellido),
            documento = IFNULL(pdocumento, documento),
            direccion = IFNULL(pdireccion, direccion),
            telefono = IFNULL(ptelefono, telefono),
            id_nacionalidad = IFNULL(pid_nacionalidad, id_nacionalidad),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;

    ELSEIF opcion = 4 THEN
    BEGIN
        UPDATE tbl_propietario
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    END IF;
END $$

DELIMITER ;
