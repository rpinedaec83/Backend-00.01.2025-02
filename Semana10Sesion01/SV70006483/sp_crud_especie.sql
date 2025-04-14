DROP PROCEDURE IF EXISTS crud_especie;

DELIMITER $$

CREATE PROCEDURE crud_especie(
    IN opcion INT,
    IN pdescripcion VARCHAR(50),
    IN pis_activo BIT,
    IN pid INT,
    IN pusuario INT
)
BEGIN
    IF opcion = 1 THEN
    BEGIN
        SELECT * FROM tbl_especie WHERE is_activo = 1;
    END;
    
    ELSEIF opcion = 2 THEN
    BEGIN
        INSERT INTO tbl_especie (descripcion, usuario_creacion)
        VALUES (pdescripcion, pusuario);
    END;
    
    ELSEIF opcion = 3 THEN
    BEGIN
        UPDATE tbl_especie
        SET descripcion = IFNULL(pdescripcion, descripcion),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    
    ELSEIF opcion = 4 THEN
    BEGIN
        UPDATE tbl_especie
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    END IF;
END $$

DELIMITER ;
