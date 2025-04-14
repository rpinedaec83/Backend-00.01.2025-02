DROP PROCEDURE IF EXISTS crud_proveedores;

DELIMITER $$

CREATE PROCEDURE crud_proveedores(
    IN opcion INT,
    IN pnombre VARCHAR(100),
    IN pruc VARCHAR(20),
    IN pcel VARCHAR(15),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT
)
BEGIN
    IF opcion = 1 THEN
        -- Listar proveedores activos
        SELECT * FROM proveedores WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo proveedor
        INSERT INTO proveedores(nombre, ruc, cel, usuario_creacion)
        VALUES(pnombre, pruc, pcel, pusuario);

    ELSEIF opcion = 3 THEN
        -- Actualizar proveedor
        UPDATE proveedores
        SET 
            nombre = IFNULL(pnombre, nombre),
            ruc = IFNULL(pruc, ruc),
            cel = IFNULL(pcel, cel),
            is_activo = IFNULL(pis_activo, is_activo),
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar proveedor
        UPDATE proveedores
        SET is_activo = 0,
            usuario_modificacion = pusuario,
            fecha_modificacion = CURRENT_TIMESTAMP()
        WHERE id = pid;
    END IF;
END $$

DELIMITER ;
