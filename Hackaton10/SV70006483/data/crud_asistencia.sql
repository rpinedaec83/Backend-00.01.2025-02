DROP PROCEDURE IF EXISTS crud_asistencia;

DELIMITER $$

CREATE PROCEDURE crud_asistencia(
    IN opcion INT,
    IN pempleado_id INT,
    IN pfecha DATE,
    IN phora_entrada TIME,
    IN phora_salida TIME,
    IN pobservaciones TEXT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar asistencia activa
        SELECT * FROM asistencia WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nueva asistencia
        INSERT INTO asistencia(empleado_id, fecha, hora_entrada, hora_salida, observaciones)
        VALUES(pempleado_id, pfecha, phora_entrada, phora_salida, pobservaciones);

    ELSEIF opcion = 3 THEN
        -- Actualizar asistencia existente
        UPDATE asistencia
        SET 
            empleado_id = IFNULL(pempleado_id, empleado_id),
            fecha = IFNULL(pfecha, fecha),
            hora_entrada = IFNULL(phora_entrada, hora_entrada),
            hora_salida = IFNULL(phora_salida, hora_salida),
            observaciones = IFNULL(pobservaciones, observaciones),
            is_activo = IFNULL(pis_activo, is_activo)
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar asistencia
        UPDATE asistencia
        SET is_activo = 0
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
