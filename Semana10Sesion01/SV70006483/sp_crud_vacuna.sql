DROP PROCEDURE IF EXISTS crud_vacuna;

DELIMITER $$

CREATE PROCEDURE crud_vacuna(
    IN opcion INT,
    IN pdescripcion VARCHAR(50),
    IN plote VARCHAR(45),
    IN pis_activo BIT,
    IN pid INT,
    IN pusuario INT
)
BEGIN
    IF opcion = 1 THEN
    BEGIN
        SELECT * FROM tbl_vacuna WHERE is_activo = 1;
    END;

    ELSEIF opcion = 2 THEN
    BEGIN
        INSERT INTO tbl_vacuna (descripcion, lote, usuario_creacion)
        VALUES (pdescripcion, plote, pusuario);
    END;

    ELSEIF opcion = 3 THEN
    BEGIN
        UPDATE tbl_vacuna
        SET descripcion = IFNULL(pdescripcion, descripcion),
            lote = IFNULL(plote, lote),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;

    ELSEIF opcion = 4 THEN
    BEGIN
        UPDATE tbl_vacuna
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END;
    END IF;
END $$

DELIMITER ;
