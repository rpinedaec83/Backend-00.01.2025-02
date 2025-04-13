DROP PROCEDURE IF EXISTS crud_pagos;

DELIMITER $$

CREATE PROCEDURE crud_pagos(
    IN opcion INT,
    IN pempleado_id INT,
    IN pfecha_pago DATE,
    IN pmonto DECIMAL(10, 2),
    IN pdescripcion TEXT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar pagos activos
        SELECT * FROM pagos WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo pago
        INSERT INTO pagos(empleado_id, fecha_pago, monto, descripcion)
        VALUES(pempleado_id, pfecha_pago, pmonto, pdescripcion);

    ELSEIF opcion = 3 THEN
        -- Actualizar pago existente
        UPDATE pagos
        SET 
            empleado_id = IFNULL(pempleado_id, empleado_id),
            fecha_pago = IFNULL(pfecha_pago, fecha_pago),
            monto = IFNULL(pmonto, monto),
            descripcion = IFNULL(pdescripcion, descripcion),
            is_activo = IFNULL(pis_activo, is_activo)
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar pago
        UPDATE pagos
        SET is_activo = 0
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
