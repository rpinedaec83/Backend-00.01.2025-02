DROP PROCEDURE IF EXISTS crud_raza;

DELIMITER $$

CREATE PROCEDURE crud_raza(
    IN opcion INT,
    IN pdescripcion VARCHAR(50),
    IN pis_activo BIT,
    IN pid INT,
    IN pusuario INT
)
BEGIN
    IF opcion = 1 THEN
    BEGIN
        SELECT * FROM tbl_raza WHERE is_activo = 1;
    END;
    
    ELSEIF opcion = 2 THEN
    BEGIN
        INSERT INTO tbl_raza (descripcion, usuario_creacion)
        VALUES (pdescripcion, pusuario);
    END;
    
    ELSEIF opcion = 3 THEN
    BEGIN
        UPDATE tbl_raza
        SET descripcion = IFNULL(pdescripcion, descripcion),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    
    ELSEIF opcion = 4 THEN
    BEGIN
        UPDATE tbl_raza
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    END IF;
END $$

DELIMITER ;
