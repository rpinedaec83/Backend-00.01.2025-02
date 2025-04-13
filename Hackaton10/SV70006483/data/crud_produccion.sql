DROP PROCEDURE IF EXISTS crud_produccion;

DELIMITER $$

CREATE PROCEDURE crud_produccion(
    IN opcion INT,
    IN ptipo VARCHAR(50),
    IN pnombre VARCHAR(100),
    IN pcantidad_total DECIMAL(10,2),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar registros activos
        SELECT * FROM produccion WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nueva producción
        INSERT INTO produccion(tipo, nombre, cantidad_total, usuario_creacion)
        VALUES(ptipo, pnombre, pcantidad_total, pusuario);

    ELSEIF opcion = 3 THEN
        -- Actualizar producción existente
        UPDATE produccion
        SET 
            tipo = IFNULL(ptipo, tipo),
            nombre = IFNULL(pnombre, nombre),
            cantidad_total = IFNULL(pcantidad_total, cantidad_total),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar producción
        UPDATE produccion
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
