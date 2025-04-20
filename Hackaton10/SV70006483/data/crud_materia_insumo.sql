DROP PROCEDURE IF EXISTS crud_materia_insumo;

DELIMITER $$

CREATE PROCEDURE crud_materia_insumo(
    IN opcion INT,
    IN pnombre VARCHAR(100),
    IN punidad_medicion VARCHAR(20),
    IN pcantidad DECIMAL(10,2),
    IN ptipo ENUM('insumo', 'materia'),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar registros activos
        SELECT * FROM materia_insumo WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo registro
        INSERT INTO materia_insumo(nombre, unidad_medicion, cantidad, tipo, usuario_creacion)
        VALUES(pnombre, punidad_medicion, pcantidad, ptipo, pusuario);

    ELSEIF opcion = 3 THEN
        -- Actualizar registro existente
        UPDATE materia_insumo
        SET 
            nombre = IFNULL(pnombre, nombre),
            unidad_medicion = IFNULL(punidad_medicion, unidad_medicion),
            cantidad = IFNULL(pcantidad, cantidad),
            tipo = IFNULL(ptipo, tipo),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar registro
        UPDATE materia_insumo
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
