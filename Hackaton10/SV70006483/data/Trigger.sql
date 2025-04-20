DELIMITER //

CREATE TRIGGER trg_empleado_update BEFORE UPDATE ON empleados
FOR EACH ROW
BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END;
//

DELIMITER ;

DELIMITER //

CREATE TRIGGER trg_materia_insumo_update BEFORE UPDATE ON materia_insumo
FOR EACH ROW
BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END;
//

DELIMITER ;

DELIMITER //

CREATE TRIGGER trg_proveedores_update BEFORE UPDATE ON proveedores
FOR EACH ROW
BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER trg_compra_update BEFORE UPDATE ON compra
FOR EACH ROW
BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER trg_produccion_update BEFORE UPDATE ON produccion
FOR EACH ROW
BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER trg_descuento_stock_produccion AFTER INSERT ON detalle_produccion
FOR EACH ROW
BEGIN
    UPDATE materia_insumo
    SET cantidad = cantidad - NEW.cantidad
    WHERE id = NEW.materia_insumo_id;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER trg_aumento_stock_compra AFTER INSERT ON detalle_compra
FOR EACH ROW
BEGIN
    UPDATE materia_insumo
    SET cantidad = cantidad + NEW.cantidad
    WHERE id = NEW.materia_insumo_id;
END;
//

DELIMITER ;
