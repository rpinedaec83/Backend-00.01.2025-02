DROP PROCEDURE IF EXISTS crud_detalle_produccion;

DELIMITER $$

CREATE PROCEDURE crud_detalle_produccion(
    IN opcion INT,
    IN pproduccion_id INT,
    IN pmateria_insumo_id INT,
    IN punidad_medida VARCHAR(20),
    IN pcantidad DECIMAL(10,2)
)
BEGIN
    IF opcion = 1 THEN
        -- Listar detalles por ID de producción
        SELECT * FROM detalle_produccion
        WHERE produccion_id = pproduccion_id;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo detalle
        INSERT INTO detalle_produccion(produccion_id, materia_insumo_id, unidad_medida, cantidad)
        VALUES (pproduccion_id, pmateria_insumo_id, punidad_medida, pcantidad);

    ELSEIF opcion = 3 THEN
        -- Actualizar detalle existente
        UPDATE detalle_produccion
        SET 
            unidad_medida = IFNULL(punidad_medida, unidad_medida),
            cantidad = IFNULL(pcantidad, cantidad)
        WHERE produccion_id = pproduccion_id AND materia_insumo_id = pmateria_insumo_id;

    ELSEIF opcion = 4 THEN
        -- Eliminar detalle
        DELETE FROM detalle_produccion
        WHERE produccion_id = pproduccion_id AND materia_insumo_id = pmateria_insumo_id;
    END IF;
END $$

DELIMITER ;
