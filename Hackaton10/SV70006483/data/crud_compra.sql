DROP PROCEDURE IF EXISTS crud_compra;

DELIMITER $$

CREATE PROCEDURE crud_compra(
    IN opcion INT,
    IN pfecha DATE,
    IN pproveedor_id INT,
    IN pmonto_total DECIMAL(10,2),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar compras activas
        SELECT * FROM compra WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nueva compra
        INSERT INTO compra(fecha, proveedor_id, monto_total, usuario_creacion)
        VALUES(pfecha, pproveedor_id, pmonto_total, pusuario);

    ELSEIF opcion = 3 THEN
        -- Actualizar compra existente
        UPDATE compra
        SET 
            fecha = IFNULL(pfecha, fecha),
            proveedor_id = IFNULL(pproveedor_id, proveedor_id),
            monto_total = IFNULL(pmonto_total, monto_total),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar compra
        UPDATE compra
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
