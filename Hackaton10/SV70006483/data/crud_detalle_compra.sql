DROP PROCEDURE IF EXISTS crud_detalle_compra;

DELIMITER $$

CREATE PROCEDURE crud_detalle_compra(
    IN opcion INT,
    IN pcompra_id INT,
    IN pmateria_insumo_id INT,
    IN punidad_medicion VARCHAR(20),
    IN pcantidad DECIMAL(10,2),
    IN pmonto DECIMAL(10,2)
)
BEGIN
    IF opcion = 1 THEN
        -- Listar detalles por compra
        SELECT * FROM detalle_compra WHERE compra_id = pcompra_id;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo detalle
        INSERT INTO detalle_compra(compra_id, materia_insumo_id, unidad_medicion, cantidad, monto)
        VALUES(pcompra_id, pmateria_insumo_id, punidad_medicion, pcantidad, pmonto);

    ELSEIF opcion = 3 THEN
        -- Actualizar detalle existente
        UPDATE detalle_compra
        SET 
            unidad_medicion = IFNULL(punidad_medicion, unidad_medicion),
            cantidad = IFNULL(pcantidad, cantidad),
            monto = IFNULL(pmonto, monto)
        WHERE compra_id = pcompra_id AND materia_insumo_id = pmateria_insumo_id;

    ELSEIF opcion = 4 THEN
        -- Eliminar detalle específico
        DELETE FROM detalle_compra
        WHERE compra_id = pcompra_id AND materia_insumo_id = pmateria_insumo_id;
    END IF;
END $$

DELIMITER ;
