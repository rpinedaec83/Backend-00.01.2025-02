/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100428
 Source Host           : localhost:3306
 Source Schema         : sv70006483

 Target Server Type    : MySQL
 Target Server Version : 100428
 File Encoding         : 65001

 Date: 13/04/2025 07:25:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for asistencia
-- ----------------------------
DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE `asistencia`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empleado_id` int(11) NULL DEFAULT NULL,
  `fecha` date NULL DEFAULT NULL,
  `hora_entrada` time(0) NULL DEFAULT NULL,
  `hora_salida` time(0) NULL DEFAULT NULL,
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `empleado_id`(`empleado_id`) USING BTREE,
  CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of asistencia
-- ----------------------------
INSERT INTO `asistencia` VALUES (1, 1, '2025-04-13', '09:00:00', '18:00:00', 'Entrada tarde', 0);
INSERT INTO `asistencia` VALUES (2, 1, '2025-04-13', '08:00:00', '17:00:00', 'Asistencia completa', 1);
INSERT INTO `asistencia` VALUES (3, 1, '2025-04-13', '08:00:00', '17:00:00', 'Asistencia completa', 1);

-- ----------------------------
-- Table structure for compra
-- ----------------------------
DROP TABLE IF EXISTS `compra`;
CREATE TABLE `compra`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NULL DEFAULT NULL,
  `proveedor_id` int(11) NULL DEFAULT NULL,
  `monto_total` decimal(10, 2) NULL DEFAULT NULL,
  `usuario_creacion` int(11) NULL DEFAULT NULL,
  `fecha_creacion` datetime(0) NULL DEFAULT current_timestamp(0),
  `usuario_modificacion` int(11) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(0) NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `proveedor_id`(`proveedor_id`) USING BTREE,
  INDEX `usuario_creacion`(`usuario_creacion`) USING BTREE,
  INDEX `usuario_modificacion`(`usuario_modificacion`) USING BTREE,
  CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedores` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`usuario_creacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `compra_ibfk_3` FOREIGN KEY (`usuario_modificacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of compra
-- ----------------------------
INSERT INTO `compra` VALUES (2, '2025-04-13', 1, 1250.50, 1, '2025-04-13 07:12:32', NULL, NULL, 1);

-- ----------------------------
-- Table structure for detalle_compra
-- ----------------------------
DROP TABLE IF EXISTS `detalle_compra`;
CREATE TABLE `detalle_compra`  (
  `compra_id` int(11) NULL DEFAULT NULL,
  `materia_insumo_id` int(11) NULL DEFAULT NULL,
  `unidad_medicion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` decimal(10, 2) NULL DEFAULT NULL,
  `monto` decimal(10, 2) NULL DEFAULT NULL,
  INDEX `compra_id`(`compra_id`) USING BTREE,
  INDEX `materia_insumo_id`(`materia_insumo_id`) USING BTREE,
  CONSTRAINT `detalle_compra_ibfk_1` FOREIGN KEY (`compra_id`) REFERENCES `compra` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `detalle_compra_ibfk_2` FOREIGN KEY (`materia_insumo_id`) REFERENCES `materia_insumo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for detalle_produccion
-- ----------------------------
DROP TABLE IF EXISTS `detalle_produccion`;
CREATE TABLE `detalle_produccion`  (
  `produccion_id` int(11) NULL DEFAULT NULL,
  `materia_insumo_id` int(11) NULL DEFAULT NULL,
  `unidad_medida` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` decimal(10, 2) NULL DEFAULT NULL,
  INDEX `produccion_id`(`produccion_id`) USING BTREE,
  INDEX `materia_insumo_id`(`materia_insumo_id`) USING BTREE,
  CONSTRAINT `detalle_produccion_ibfk_1` FOREIGN KEY (`produccion_id`) REFERENCES `produccion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `detalle_produccion_ibfk_2` FOREIGN KEY (`materia_insumo_id`) REFERENCES `materia_insumo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for empleados
-- ----------------------------
DROP TABLE IF EXISTS `empleados`;
CREATE TABLE `empleados`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NULL DEFAULT NULL,
  `cargo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `salario` decimal(10, 2) NULL DEFAULT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `apellido` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `dni` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usuario_creacion` int(11) NULL DEFAULT NULL,
  `fecha_creacion` datetime(0) NULL DEFAULT current_timestamp(0),
  `usuario_modificacion` int(11) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(0) NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `usuario_id`(`usuario_id`) USING BTREE,
  INDEX `usuario_creacion`(`usuario_creacion`) USING BTREE,
  INDEX `usuario_modificacion`(`usuario_modificacion`) USING BTREE,
  CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`usuario_creacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`usuario_modificacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of empleados
-- ----------------------------
INSERT INTO `empleados` VALUES (1, 1, 'Analista', 4000.00, 'Carlos', 'Gómez', '12345678', 1, '2025-04-13 07:02:32', 1, '2025-04-13 07:05:08', 0);

-- ----------------------------
-- Table structure for materia_insumo
-- ----------------------------
DROP TABLE IF EXISTS `materia_insumo`;
CREATE TABLE `materia_insumo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `unidad_medicion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` decimal(10, 2) NULL DEFAULT NULL,
  `tipo` enum('insumo','materia') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usuario_creacion` int(11) NULL DEFAULT NULL,
  `fecha_creacion` datetime(0) NULL DEFAULT current_timestamp(0),
  `usuario_modificacion` int(11) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(0) NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `usuario_creacion`(`usuario_creacion`) USING BTREE,
  INDEX `usuario_modificacion`(`usuario_modificacion`) USING BTREE,
  CONSTRAINT `materia_insumo_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `materia_insumo_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of materia_insumo
-- ----------------------------
INSERT INTO `materia_insumo` VALUES (1, 'Harina refinada', 'kg', 120.00, 'materia', 1, '2025-04-13 07:11:28', 1, '2025-04-13 07:11:55', 0);
INSERT INTO `materia_insumo` VALUES (2, 'Harina de trigo', 'kg', 100.00, 'materia', 1, '2025-04-13 07:11:28', NULL, NULL, 1);

-- ----------------------------
-- Table structure for pagos
-- ----------------------------
DROP TABLE IF EXISTS `pagos`;
CREATE TABLE `pagos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empleado_id` int(11) NULL DEFAULT NULL,
  `fecha_pago` date NULL DEFAULT NULL,
  `monto` decimal(10, 2) NULL DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `empleado_id`(`empleado_id`) USING BTREE,
  CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pagos
-- ----------------------------
INSERT INTO `pagos` VALUES (1, 1, '2025-04-15', 1600.00, 'Pago de salario ajustado', 0);

-- ----------------------------
-- Table structure for produccion
-- ----------------------------
DROP TABLE IF EXISTS `produccion`;
CREATE TABLE `produccion`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad_total` decimal(10, 2) NULL DEFAULT NULL,
  `usuario_creacion` int(11) NULL DEFAULT NULL,
  `fecha_creacion` datetime(0) NULL DEFAULT current_timestamp(0),
  `usuario_modificacion` int(11) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(0) NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `usuario_creacion`(`usuario_creacion`) USING BTREE,
  INDEX `usuario_modificacion`(`usuario_modificacion`) USING BTREE,
  CONSTRAINT `produccion_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `produccion_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of produccion
-- ----------------------------
INSERT INTO `produccion` VALUES (1, 'Producto Final', 'Mermelada de Fresa', 180.00, 1, '2025-04-13 07:16:59', 1, '2025-04-13 07:17:31', 0);

-- ----------------------------
-- Table structure for proveedores
-- ----------------------------
DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE `proveedores`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ruc` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cel` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usuario_creacion` int(11) NULL DEFAULT NULL,
  `fecha_creacion` datetime(0) NULL DEFAULT current_timestamp(0),
  `usuario_modificacion` int(11) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(0) NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `usuario_creacion`(`usuario_creacion`) USING BTREE,
  INDEX `usuario_modificacion`(`usuario_modificacion`) USING BTREE,
  CONSTRAINT `proveedores_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `proveedores_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of proveedores
-- ----------------------------
INSERT INTO `proveedores` VALUES (1, 'Proveedor Actualizado', '10987654321', '912345678', 1, '2025-04-13 07:10:10', 1, '2025-04-13 07:10:52', 0);

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rol` enum('admin','empleado','gerente') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `is_activo` tinyint(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (1, 'dhayroactualizado', 'secreto123', 'juan@example.com', 'gerente', 0);
INSERT INTO `usuarios` VALUES (3, 'dhayrokong', 'secreto123', 'dhayrokong@example.com', 'empleado', 1);

-- ----------------------------
-- Procedure structure for crud_asistencia
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_asistencia`;
delimiter ;;
CREATE PROCEDURE `crud_asistencia`(IN opcion INT,
    IN pempleado_id INT,
    IN pfecha DATE,
    IN phora_entrada TIME,
    IN phora_salida TIME,
    IN pobservaciones TEXT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_compra
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_compra`;
delimiter ;;
CREATE PROCEDURE `crud_compra`(IN opcion INT,
    IN pfecha DATE,
    IN pproveedor_id INT,
    IN pmonto_total DECIMAL(10,2),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_detalle_compra
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_detalle_compra`;
delimiter ;;
CREATE PROCEDURE `crud_detalle_compra`(IN opcion INT,
    IN pcompra_id INT,
    IN pmateria_insumo_id INT,
    IN punidad_medicion VARCHAR(20),
    IN pcantidad DECIMAL(10,2),
    IN pmonto DECIMAL(10,2))
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_detalle_produccion
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_detalle_produccion`;
delimiter ;;
CREATE PROCEDURE `crud_detalle_produccion`(IN opcion INT,
    IN pproduccion_id INT,
    IN pmateria_insumo_id INT,
    IN punidad_medida VARCHAR(20),
    IN pcantidad DECIMAL(10,2))
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_empleados
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_empleados`;
delimiter ;;
CREATE PROCEDURE `crud_empleados`(IN opcion INT,
    IN pusuario_id INT,
    IN pcargo VARCHAR(50),
    IN psalario DECIMAL(10, 2),
    IN pnombre VARCHAR(100),
    IN papellido VARCHAR(100),
    IN pdni VARCHAR(20),
    IN pusuario_creacion INT,
    IN pusuario_modificacion INT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_materia_insumo
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_materia_insumo`;
delimiter ;;
CREATE PROCEDURE `crud_materia_insumo`(IN opcion INT,
    IN pnombre VARCHAR(100),
    IN punidad_medicion VARCHAR(20),
    IN pcantidad DECIMAL(10,2),
    IN ptipo ENUM('insumo', 'materia'),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_pagos
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_pagos`;
delimiter ;;
CREATE PROCEDURE `crud_pagos`(IN opcion INT,
    IN pempleado_id INT,
    IN pfecha_pago DATE,
    IN pmonto DECIMAL(10, 2),
    IN pdescripcion TEXT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_produccion
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_produccion`;
delimiter ;;
CREATE PROCEDURE `crud_produccion`(IN opcion INT,
    IN ptipo VARCHAR(50),
    IN pnombre VARCHAR(100),
    IN pcantidad_total DECIMAL(10,2),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_proveedores
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_proveedores`;
delimiter ;;
CREATE PROCEDURE `crud_proveedores`(IN opcion INT,
    IN pnombre VARCHAR(100),
    IN pruc VARCHAR(20),
    IN pcel VARCHAR(15),
    IN pusuario INT,
    IN pis_activo TINYINT,
    IN pid INT)
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
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for crud_usuarios
-- ----------------------------
DROP PROCEDURE IF EXISTS `crud_usuarios`;
delimiter ;;
CREATE PROCEDURE `crud_usuarios`(IN opcion INT,
    IN pusername VARCHAR(50),
    IN ppassword VARCHAR(100),
    IN pemail VARCHAR(100),
    IN prol ENUM('admin', 'empleado', 'gerente'),
    IN pis_activo TINYINT,
    IN pid INT)
BEGIN
    IF opcion = 1 THEN
        -- Listar usuarios activos
        SELECT * FROM usuarios WHERE is_activo = 1;

    ELSEIF opcion = 2 THEN
        -- Insertar nuevo usuario
        INSERT INTO usuarios(username, password, email, rol)
        VALUES(pusername, ppassword, pemail, prol);

    ELSEIF opcion = 3 THEN
        -- Actualizar usuario existente
        UPDATE usuarios
        SET 
            username = IFNULL(pusername, username),
            password = IFNULL(ppassword, password),
            email = IFNULL(pemail, email),
            rol = IFNULL(prol, rol),
            is_activo = IFNULL(pis_activo, is_activo)
        WHERE id = pid;

    ELSEIF opcion = 4 THEN
        -- Desactivar usuario
        UPDATE usuarios
        SET is_activo = 0
        WHERE id = pid;
    END IF;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table compra
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_compra_update`;
delimiter ;;
CREATE TRIGGER `trg_compra_update` BEFORE UPDATE ON `compra` FOR EACH ROW BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table detalle_compra
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_aumento_stock_compra`;
delimiter ;;
CREATE TRIGGER `trg_aumento_stock_compra` AFTER INSERT ON `detalle_compra` FOR EACH ROW BEGIN
    UPDATE materia_insumo
    SET cantidad = cantidad + NEW.cantidad
    WHERE id = NEW.materia_insumo_id;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table detalle_produccion
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_descuento_stock_produccion`;
delimiter ;;
CREATE TRIGGER `trg_descuento_stock_produccion` AFTER INSERT ON `detalle_produccion` FOR EACH ROW BEGIN
    UPDATE materia_insumo
    SET cantidad = cantidad - NEW.cantidad
    WHERE id = NEW.materia_insumo_id;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table empleados
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_empleado_update`;
delimiter ;;
CREATE TRIGGER `trg_empleado_update` BEFORE UPDATE ON `empleados` FOR EACH ROW BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table materia_insumo
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_materia_insumo_update`;
delimiter ;;
CREATE TRIGGER `trg_materia_insumo_update` BEFORE UPDATE ON `materia_insumo` FOR EACH ROW BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table produccion
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_produccion_update`;
delimiter ;;
CREATE TRIGGER `trg_produccion_update` BEFORE UPDATE ON `produccion` FOR EACH ROW BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table proveedores
-- ----------------------------
DROP TRIGGER IF EXISTS `trg_proveedores_update`;
delimiter ;;
CREATE TRIGGER `trg_proveedores_update` BEFORE UPDATE ON `proveedores` FOR EACH ROW BEGIN
    SET NEW.fecha_modificacion = CURRENT_TIMESTAMP;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
