DROP PROCEDURE IF EXISTS crud_empleados;

DELIMITER $$

CREATE PROCEDURE crud_empleados(
    IN opcion INT,
    IN pusuario_id INT,
    IN pcargo VARCHAR(50),
    IN psalario DECIMAL(10, 2),
    IN pnombre VARCHAR(100),
    IN papellido VARCHAR(100),
    IN pdni VARCHAR(20),
    IN pusuario_creacion INT,
    IN pusuario_modificacion INT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar empleados activos
        SELECT * FROM empleados WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo empleado
        INSERT INTO empleados(usuario_id, cargo, salario, nombre, apellido, dni, usuario_creacion)
        VALUES(pusuario_id, pcargo, psalario, pnombre, papellido, pdni, pusuario_creacion);

    ELSEIF opcion = 3 THEN
        -- Actualizar empleado existente
        UPDATE empleados
        SET 
            usuario_id = IFNULL(pusuario_id, usuario_id),
            cargo = IFNULL(pcargo, cargo),
            salario = IFNULL(psalario, salario),
            nombre = IFNULL(pnombre, nombre),
            apellido = IFNULL(papellido, apellido),
            dni = IFNULL(pdni, dni),
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = CURRENT_TIMESTAMP,
            is_activo = IFNULL(pis_activo, is_activo)
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar empleado
        UPDATE empleados
        SET is_activo = 0,
            usuario_modificacion = pusuario_modificacion,
            fecha_modificacion = CURRENT_TIMESTAMP
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
