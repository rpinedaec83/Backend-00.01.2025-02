CREATE DATABASE  IF NOT EXISTS `sv72770300` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `sv72770300`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sv72770300
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_compra`
--

DROP TABLE IF EXISTS `tbl_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) NOT NULL,
  `monto_total` decimal(8,2) DEFAULT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  KEY `id_proveedor` (`id_proveedor`),
  CONSTRAINT `tbl_compra_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_compra_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_compra_ibfk_3` FOREIGN KEY (`id_proveedor`) REFERENCES `tbl_proveedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_compra`
--

LOCK TABLES `tbl_compra` WRITE;
/*!40000 ALTER TABLE `tbl_compra` DISABLE KEYS */;
INSERT INTO `tbl_compra` VALUES (1,1,1320.60,'2025-04-12 19:26:37',_binary '',1,'2025-04-12 19:26:37',3,'2025-04-12 19:30:13'),(2,4,800.80,'2025-03-20 00:00:00',_binary '',3,'2025-04-12 19:27:10',1,'2025-04-12 19:32:27'),(3,3,785.20,'2025-04-12 19:28:55',_binary '\0',3,'2025-04-12 19:28:55',4,'2025-04-12 19:33:30'),(4,4,410.90,'2025-04-12 19:28:57',_binary '',2,'2025-04-12 19:28:57',NULL,NULL),(5,2,152.40,'2025-04-12 19:29:13',_binary '\0',2,'2025-04-12 19:29:13',1,'2025-04-12 19:33:32'),(6,3,541.70,'2025-04-12 19:29:15',_binary '',4,'2025-04-12 19:29:15',2,'2025-04-12 19:31:04'),(7,1,785.10,'2025-04-12 19:29:18',_binary '',1,'2025-04-12 19:29:18',NULL,NULL),(9,3,950.00,'2025-04-13 11:42:08',_binary '',3,'2025-04-13 11:42:08',3,'2025-04-13 11:42:39');
/*!40000 ALTER TABLE `tbl_compra` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertCompra after insert on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_proveedor,
    new.monto_total,
    new.fecha,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateCompra after update on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_proveedor,
    old.monto_total,
    old.fecha,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteCompra after delete on tbl_compra
for each row
begin
	INSERT INTO tbl_compra_audit
(`id`,
`id_proveedor`,
`monto_total`,
`fecha`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_proveedor,
    old.monto_total,
    old.fecha,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_compra_audit`
--

DROP TABLE IF EXISTS `tbl_compra_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_compra_audit` (
  `id` int(11) DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `monto_total` decimal(8,2) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_compra_audit`
--

LOCK TABLES `tbl_compra_audit` WRITE;
/*!40000 ALTER TABLE `tbl_compra_audit` DISABLE KEYS */;
INSERT INTO `tbl_compra_audit` VALUES (8,1,410.00,'2025-04-13 11:41:44',_binary '',1,'2025-04-13 11:41:44',NULL,NULL,'I','root@localhost'),(9,3,850.00,'2025-04-13 11:42:08',_binary '',3,'2025-04-13 11:42:08',NULL,NULL,'I','root@localhost'),(9,3,850.00,'2025-04-13 11:42:08',_binary '',3,'2025-04-13 11:42:08',NULL,NULL,'U','root@localhost'),(8,1,410.00,'2025-04-13 11:41:44',_binary '',1,'2025-04-13 11:41:44',NULL,NULL,'D','root@localhost');
/*!40000 ALTER TABLE `tbl_compra_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_detalle_compra`
--

DROP TABLE IF EXISTS `tbl_detalle_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_detalle_compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_compra` int(11) NOT NULL,
  `id_materia_insumo` int(11) NOT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `monto` decimal(8,2) DEFAULT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  KEY `id_compra` (`id_compra`),
  KEY `id_materia_insumo` (`id_materia_insumo`),
  CONSTRAINT `tbl_detalle_compra_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_detalle_compra_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_detalle_compra_ibfk_3` FOREIGN KEY (`id_compra`) REFERENCES `tbl_compra` (`id`),
  CONSTRAINT `tbl_detalle_compra_ibfk_4` FOREIGN KEY (`id_materia_insumo`) REFERENCES `tbl_materia_insumo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_detalle_compra`
--

LOCK TABLES `tbl_detalle_compra` WRITE;
/*!40000 ALTER TABLE `tbl_detalle_compra` DISABLE KEYS */;
INSERT INTO `tbl_detalle_compra` VALUES (1,1,2,'pliegos',10,1000.00,_binary '',1,'2025-04-12 21:03:31',NULL,NULL),(2,1,2,'pliegos',10,500.00,_binary '',1,'2025-04-12 21:04:13',2,'2025-04-12 21:44:10'),(3,1,2,'pliegos',10,1000.00,_binary '',1,'2025-04-12 21:06:11',NULL,NULL),(4,1,3,'Bolsa',10,500.00,_binary '',2,'2025-04-12 21:09:11',2,'2025-04-12 21:24:24'),(5,1,4,'Unidad',8,500.00,_binary '',1,'2025-04-12 21:25:38',1,'2025-04-12 21:44:12'),(6,2,5,'Unidad',15,150.00,_binary '',2,'2025-04-12 21:40:57',3,'2025-04-12 21:45:08'),(7,2,6,'Litros',6,450.00,_binary '',2,'2025-04-12 21:41:00',4,'2025-04-12 21:44:14'),(8,3,9,'Bolsa',3,500.00,_binary '',2,'2025-04-13 12:14:07',NULL,NULL),(9,3,2,'Pliego',5,200.00,_binary '',1,'2025-04-13 12:14:09',4,'2025-04-13 12:16:25'),(11,3,10,'Hoja',15,85.20,_binary '',1,'2025-04-13 12:15:09',3,'2025-04-13 12:17:17');
/*!40000 ALTER TABLE `tbl_detalle_compra` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertDetalleCompra after insert on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_compra,
    new.id_materia_insumo,
    new.unidad_medicion,
    new.cantidad,
    new.monto,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateDetalleCompra after update on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_compra,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.monto,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteDetalleCompra after delete on tbl_detalle_compra
for each row
begin
	INSERT INTO tbl_detalle_compra_audit
(`id`,
`id_compra`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`monto`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_compra,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.monto,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_detalle_compra_audit`
--

DROP TABLE IF EXISTS `tbl_detalle_compra_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_detalle_compra_audit` (
  `id` int(11) DEFAULT NULL,
  `id_compra` int(11) DEFAULT NULL,
  `id_materia_insumo` int(11) DEFAULT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `monto` decimal(8,2) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_detalle_compra_audit`
--

LOCK TABLES `tbl_detalle_compra_audit` WRITE;
/*!40000 ALTER TABLE `tbl_detalle_compra_audit` DISABLE KEYS */;
INSERT INTO `tbl_detalle_compra_audit` VALUES (8,3,9,'Bolsa',3,500.00,_binary '',2,'2025-04-13 12:14:07',NULL,NULL,'I','root@localhost'),(9,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:14:09',NULL,NULL,'I','root@localhost'),(10,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:14:43',NULL,NULL,'I','root@localhost'),(11,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:15:09',NULL,NULL,'I','root@localhost'),(9,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:14:09',NULL,NULL,'U','root@localhost'),(11,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:15:09',NULL,NULL,'U','root@localhost'),(10,3,2,'Pliego',5,285.20,_binary '',1,'2025-04-13 12:14:43',NULL,NULL,'D','root@localhost');
/*!40000 ALTER TABLE `tbl_detalle_compra_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_detalle_produccion`
--

DROP TABLE IF EXISTS `tbl_detalle_produccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_detalle_produccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produccion` int(11) NOT NULL,
  `id_materia_insumo` int(11) NOT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  KEY `id_produccion` (`id_produccion`),
  KEY `id_materia_insumo` (`id_materia_insumo`),
  CONSTRAINT `tbl_detalle_produccion_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_detalle_produccion_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_detalle_produccion_ibfk_3` FOREIGN KEY (`id_produccion`) REFERENCES `tbl_produccion` (`id`),
  CONSTRAINT `tbl_detalle_produccion_ibfk_4` FOREIGN KEY (`id_materia_insumo`) REFERENCES `tbl_materia_insumo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_detalle_produccion`
--

LOCK TABLES `tbl_detalle_produccion` WRITE;
/*!40000 ALTER TABLE `tbl_detalle_produccion` DISABLE KEYS */;
INSERT INTO `tbl_detalle_produccion` VALUES (1,1,2,'Pliego',12,_binary '',2,'2025-04-13 10:41:15',NULL,NULL),(2,1,4,'Bolsa',3,_binary '\0',2,'2025-04-13 10:41:18',3,'2025-04-13 10:47:26'),(3,1,6,'Litro',4,_binary '',3,'2025-04-13 10:41:20',1,'2025-04-13 10:46:33'),(4,1,5,'Unidad',4,_binary '',1,'2025-04-13 10:41:23',2,'2025-04-13 10:45:16'),(5,3,2,'Pliego',10,_binary '',1,'2025-04-13 10:43:57',NULL,NULL),(6,3,10,'Hoja',9,_binary '\0',4,'2025-04-13 10:44:01',4,'2025-04-13 10:47:36'),(7,3,5,'Unidad',6,_binary '\0',4,'2025-04-13 10:44:03',3,'2025-04-13 13:11:23'),(8,5,2,'Pliego',20,_binary '',2,'2025-04-13 13:09:13',NULL,NULL),(10,5,5,'Unidad',16,_binary '',1,'2025-04-13 13:09:19',NULL,NULL);
/*!40000 ALTER TABLE `tbl_detalle_produccion` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertDetalleProduccion after insert on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.id_produccion,
    new.id_materia_insumo,
    new.unidad_medicion,
    new.cantidad,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateDetalleProduccion after update on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_produccion,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteDetalleProduccion after delete on tbl_detalle_produccion
for each row
begin
	INSERT INTO tbl_detalle_produccion_audit
(`id`,
`id_produccion`,
`id_materia_insumo`,
`unidad_medicion`,
`cantidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_produccion,
    old.id_materia_insumo,
    old.unidad_medicion,
    old.cantidad,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_detalle_produccion_audit`
--

DROP TABLE IF EXISTS `tbl_detalle_produccion_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_detalle_produccion_audit` (
  `id` int(11) DEFAULT NULL,
  `id_produccion` int(11) DEFAULT NULL,
  `id_materia_insumo` int(11) DEFAULT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_detalle_produccion_audit`
--

LOCK TABLES `tbl_detalle_produccion_audit` WRITE;
/*!40000 ALTER TABLE `tbl_detalle_produccion_audit` DISABLE KEYS */;
INSERT INTO `tbl_detalle_produccion_audit` VALUES (8,5,2,'Pliego',20,_binary '',2,'2025-04-13 13:09:13',NULL,NULL,'I','root@localhost'),(9,5,7,'Litros',3,_binary '',4,'2025-04-13 13:09:16',NULL,NULL,'I','root@localhost'),(10,5,5,'Unidad',16,_binary '',1,'2025-04-13 13:09:19',NULL,NULL,'I','root@localhost'),(9,5,7,'Litros',3,_binary '',4,'2025-04-13 13:09:16',NULL,NULL,'U','root@localhost'),(7,3,5,'Unidad',6,_binary '',4,'2025-04-13 10:44:03',NULL,NULL,'U','root@localhost'),(9,5,7,'Litros',4,_binary '',4,'2025-04-13 13:09:16',2,'2025-04-13 13:10:41','D','root@localhost');
/*!40000 ALTER TABLE `tbl_detalle_produccion_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_empleados`
--

DROP TABLE IF EXISTS `tbl_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(13) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `salario` decimal(8,2) DEFAULT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  CONSTRAINT `tbl_empleados_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_empleados_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_empleados`
--

LOCK TABLES `tbl_empleados` WRITE;
/*!40000 ALTER TABLE `tbl_empleados` DISABLE KEYS */;
INSERT INTO `tbl_empleados` VALUES (1,'01456792','Camila','Vargas Quispe','Gerente de Producción',2800.52,_binary '',1,'2025-04-12 18:35:01',3,'2025-04-12 18:40:55'),(2,'23678901','Sebastián','Rojas Torres','Supervisor de Producción',2200.19,_binary '',2,'2025-04-12 18:36:08',NULL,NULL),(3,'01456792','Sofía','Silva Ruiz','Planificador de la Producción',2000.54,_binary '',2,'2025-04-12 18:37:29',3,'2025-04-13 11:23:03'),(4,'89234506','Gabriel','Chávez Díaz','Operario de Ensamblaje',1800.79,_binary '\0',3,'2025-04-12 18:38:30',2,'2025-04-12 18:44:41'),(6,'25146985','Lucas','Loayza Burgos','Ensamblador de Muebles',1500.64,_binary '',4,'2025-04-13 11:22:20',NULL,NULL);
/*!40000 ALTER TABLE `tbl_empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertEmpleado after insert on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.dni,
    new.nombre,
    new.apellido,
    new.cargo,
    new.salario,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateEmpleado after update on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.dni,
    old.nombre,
    old.apellido,
    old.cargo,
    old.salario,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteEmpleado after delete on tbl_empleados
for each row
begin
	INSERT INTO tbl_empleados_audit
(`id`,
`dni`,
`nombre`,
`apellido`,
`cargo`,
`salario`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.dni,
    old.nombre,
    old.apellido,
    old.cargo,
    old.salario,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_empleados_audit`
--

DROP TABLE IF EXISTS `tbl_empleados_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_empleados_audit` (
  `id` int(11) DEFAULT NULL,
  `dni` varchar(13) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `salario` decimal(8,2) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_empleados_audit`
--

LOCK TABLES `tbl_empleados_audit` WRITE;
/*!40000 ALTER TABLE `tbl_empleados_audit` DISABLE KEYS */;
INSERT INTO `tbl_empleados_audit` VALUES (6,'25146985','Lucas','Loayza Burgos','Ensamblador de Muebles',1500.64,_binary '',4,'2025-04-13 11:22:20',NULL,NULL,'I','root@localhost'),(3,'12789043','Sofía','Silva	Ruiz','Planificador de la Producción',2100.69,_binary '',2,'2025-04-12 18:37:29',2,'2025-04-12 19:09:04','U','root@localhost'),(5,'67501283','Antonella','Gutiérrez Ramos','Operario de Control de Calidad',1750.68,_binary '',4,'2025-04-12 18:39:18',NULL,NULL,'D','root@localhost');
/*!40000 ALTER TABLE `tbl_empleados_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_materia_insumo`
--

DROP TABLE IF EXISTS `tbl_materia_insumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_materia_insumo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  CONSTRAINT `tbl_materia_insumo_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_materia_insumo_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_materia_insumo`
--

LOCK TABLES `tbl_materia_insumo` WRITE;
/*!40000 ALTER TABLE `tbl_materia_insumo` DISABLE KEYS */;
INSERT INTO `tbl_materia_insumo` VALUES (1,'Madera contrachapada','Pliego ',20,'Materia prima',_binary '',1,'2025-04-12 19:07:21',3,'2025-04-12 21:35:23'),(2,'(MDF)','Pliego ',40,'Materia prima',_binary '',1,'2025-04-12 19:07:25',3,'2025-04-13 11:33:04'),(3,'Manijas','Bolsa  ',13,'Insumo',_binary '\0',2,'2025-04-12 19:07:27',4,'2025-04-13 11:33:34'),(4,'Bisagras','Unidad  ',6,'Insumo',_binary '',2,'2025-04-12 19:07:30',3,'2025-04-13 10:39:34'),(5,'Manijas','Unidad  ',8,'Insumo',_binary '',2,'2025-04-12 19:07:33',2,'2025-04-12 19:10:32'),(6,'Pintura o barniz','Litros  ',7,'Insumo',_binary '',3,'2025-04-12 19:07:36',NULL,NULL),(7,'Pegamento para madera','Litros  ',4,'Insumo',_binary '',3,'2025-04-12 19:07:38',NULL,NULL),(8,'Rieles para cajones','Par',15,'Insumo',_binary '',4,'2025-04-12 19:07:42',NULL,NULL),(9,'Clavos','Bolsa',6,'Insumo',_binary '',4,'2025-04-12 19:07:45',NULL,NULL),(10,'Lija','Hoja',10,'Insumo',_binary '',4,'2025-04-12 19:07:47',NULL,NULL);
/*!40000 ALTER TABLE `tbl_materia_insumo` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertMateriaInsumo after insert on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.nombre,
    new.unidad_medicion,
    new.cantidad,
    new.tipo,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateMateriaInsumo after update on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.unidad_medicion,
    old.cantidad,
    old.tipo,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteMateriaInsumo after delete on tbl_materia_insumo
for each row
begin
	INSERT INTO tbl_materia_insumo_audit
(`id`,
`nombre`,
`unidad_medicion`,
`cantidad`,
`tipo`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.unidad_medicion,
    old.cantidad,
    old.tipo,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_materia_insumo_audit`
--

DROP TABLE IF EXISTS `tbl_materia_insumo_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_materia_insumo_audit` (
  `id` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `unidad_medicion` varchar(20) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_materia_insumo_audit`
--

LOCK TABLES `tbl_materia_insumo_audit` WRITE;
/*!40000 ALTER TABLE `tbl_materia_insumo_audit` DISABLE KEYS */;
INSERT INTO `tbl_materia_insumo_audit` VALUES (11,'Melamina','Pliego',50,'Materia prima',_binary '',2,'2025-04-13 11:32:18',NULL,NULL,'I','root@localhost'),(2,'Madera de fibra de densidad media (MDF)','Pliego ',20,'Materia prima',_binary '',1,'2025-04-12 19:07:25',3,'2025-04-12 21:35:37','U','root@localhost'),(3,'Manijas','Bolsa  ',13,'Insumo',_binary '',2,'2025-04-12 19:07:27',3,'2025-04-12 19:11:28','U','root@localhost'),(11,'Melamina','Pliego',50,'Materia prima',_binary '',2,'2025-04-13 11:32:18',NULL,NULL,'D','root@localhost');
/*!40000 ALTER TABLE `tbl_materia_insumo_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_produccion`
--

DROP TABLE IF EXISTS `tbl_produccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_produccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cantidad_total` int(11) DEFAULT NULL,
  `id_empleado` int(11) NOT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `tbl_produccion_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_produccion_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_produccion_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `tbl_empleados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_produccion`
--

LOCK TABLES `tbl_produccion` WRITE;
/*!40000 ALTER TABLE `tbl_produccion` DISABLE KEYS */;
INSERT INTO `tbl_produccion` VALUES (1,'Empotrado','Armario Empotrado Clásico',3,1,_binary '',1,'2025-04-12 19:42:22',3,'2025-04-12 19:44:57'),(2,'Modular','Armario Modular Personalizable',8,1,_binary '\0',2,'2025-04-12 19:43:08',3,'2025-04-12 19:47:05'),(3,'Ropero tradicional','Ropero de Puertas Batientes',5,3,_binary '',4,'2025-04-12 19:43:45',NULL,NULL),(4,'Multifuncional','Armario Multifunción con Escritorio',4,1,_binary '\0',3,'2025-04-12 19:44:15',1,'2025-04-13 12:01:39'),(5,'Infantil','Armario Infantil con Temática',8,2,_binary '',4,'2025-04-12 19:46:43',NULL,NULL);
/*!40000 ALTER TABLE `tbl_produccion` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertProduccion after insert on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.tipo,
    new.nombre,
    new.cantidad_total,
    new.id_empleado,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateProduccion after update on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.tipo,
    old.nombre,
    old.cantidad_total,
    old.id_empleado,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteProduccion after delete on tbl_produccion
for each row
begin
	INSERT INTO tbl_produccion_audit
(`id`,
`tipo`,
`nombre`,
`cantidad_total`,
`id_empleado`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.tipo,
    old.nombre,
    old.cantidad_total,
    old.id_empleado,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_produccion_audit`
--

DROP TABLE IF EXISTS `tbl_produccion_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_produccion_audit` (
  `id` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `cantidad_total` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_produccion_audit`
--

LOCK TABLES `tbl_produccion_audit` WRITE;
/*!40000 ALTER TABLE `tbl_produccion_audit` DISABLE KEYS */;
INSERT INTO `tbl_produccion_audit` VALUES (6,'Multifuncional','Armario con Escritorio Incorporado',15,4,_binary '',2,'2025-04-13 12:00:28',NULL,NULL,'I','root@localhost'),(6,'Multifuncional','Armario con Escritorio Incorporado',15,4,_binary '',2,'2025-04-13 12:00:28',NULL,NULL,'U','root@localhost'),(4,'Multifuncional','Armario Multifunción con Escritorio',4,1,_binary '',3,'2025-04-12 19:44:15',1,'2025-04-12 19:45:54','U','root@localhost'),(6,'Vestidor (Walk-in)','Armario Vestidor Abierto / Walk-in',15,4,_binary '',2,'2025-04-13 12:00:28',4,'2025-04-13 12:01:20','D','root@localhost');
/*!40000 ALTER TABLE `tbl_produccion_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_proveedores`
--

DROP TABLE IF EXISTS `tbl_proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `ruc` varchar(100) NOT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  CONSTRAINT `tbl_proveedores_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_proveedores_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proveedores`
--

LOCK TABLES `tbl_proveedores` WRITE;
/*!40000 ALTER TABLE `tbl_proveedores` DISABLE KEYS */;
INSERT INTO `tbl_proveedores` VALUES (1,'Garciherrajes S.A.','20606422793','999123456',_binary '',1,'2025-04-12 18:17:55',3,'2025-04-12 18:22:16'),(2,'Gimatec S.A.','20100012345','941000258',_binary '',1,'2025-04-12 18:17:58',3,'2025-04-13 11:12:15'),(3,'Sodimac S.A.','20605100016','987654321',_binary '\0',2,'2025-04-12 18:18:01',2,'2025-04-12 18:23:06'),(4,'Mademaq S.A.','20525994741','978456875',_binary '\0',2,'2025-04-12 18:18:03',2,'2025-04-13 11:12:51');
/*!40000 ALTER TABLE `tbl_proveedores` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertProveedor after insert on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.nombre,
    new.ruc,
    new.telefono,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateProveedor after update on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.ruc,
    old.telefono,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteProveedor after delete on tbl_proveedores
for each row
begin
	INSERT INTO tbl_proveedores_audit
(`id`,
`nombre`,
`ruc`,
`telefono`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.ruc,
    old.telefono,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_proveedores_audit`
--

DROP TABLE IF EXISTS `tbl_proveedores_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_proveedores_audit` (
  `id` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `ruc` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_proveedores_audit`
--

LOCK TABLES `tbl_proveedores_audit` WRITE;
/*!40000 ALTER TABLE `tbl_proveedores_audit` DISABLE KEYS */;
INSERT INTO `tbl_proveedores_audit` VALUES (5,'Promart S.A.','20600098765','987459876',_binary '',1,'2025-04-13 11:11:10',NULL,NULL,'I','root@localhost'),(2,'Gimatec S.A.','20777888999','945678901',_binary '',1,'2025-04-12 18:17:58',2,'2025-04-12 18:22:19','U','root@localhost'),(4,'Mademaq S.A.','20525994741','978456875',_binary '',2,'2025-04-12 18:18:03',4,'2025-04-12 18:22:23','U','root@localhost'),(5,'Promart S.A.','20600098765','987459876',_binary '',1,'2025-04-13 11:11:10',NULL,NULL,'D','root@localhost');
/*!40000 ALTER TABLE `tbl_proveedores_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuario`
--

DROP TABLE IF EXISTS `tbl_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `contrasena` varchar(512) NOT NULL,
  `email` varchar(100) NOT NULL,
  `is_activo` bit(1) NOT NULL DEFAULT b'0',
  `usuario_creacion` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `usuario_creacion` (`usuario_creacion`),
  KEY `usuario_modificacion` (`usuario_modificacion`),
  CONSTRAINT `tbl_usuario_ibfk_1` FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  CONSTRAINT `tbl_usuario_ibfk_2` FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario`
--

LOCK TABLES `tbl_usuario` WRITE;
/*!40000 ALTER TABLE `tbl_usuario` DISABLE KEYS */;
INSERT INTO `tbl_usuario` VALUES (1,'emersonjerzy72','leonduemer19','jerzypa.19@gmail.com',_binary '',1,'2025-04-12 17:34:45',1,'2025-04-12 17:37:37'),(2,'lizparedes133','paredes1487&e','liz1945@outlook.es',_binary '',2,'2025-04-12 17:36:21',2,'2025-04-12 17:42:52'),(3,'benitojose1254','loayza148benit','benitjos@outlook.es',_binary '\0',1,'2025-04-12 17:40:12',2,'2025-04-13 11:03:39'),(4,'danixalopez75892','dani14loayza/&','danixa145@gmail.com',_binary '',2,'2025-04-12 17:40:15',1,'2025-04-12 17:41:40');
/*!40000 ALTER TABLE `tbl_usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrInsertUsuario after insert on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.username,
    new.contrasena,
    new.email,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrUpdateUsuario after update on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.username,
    old.contrasena,
    old.email,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger tgrDeleteUsuario after delete on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`contrasena`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.username,
    old.contrasena,
    old.email,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_usuario_audit`
--

DROP TABLE IF EXISTS `tbl_usuario_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_usuario_audit` (
  `id` int(11) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `contrasena` varchar(512) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `is_activo` bit(1) DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `accion` char(1) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario_audit`
--

LOCK TABLES `tbl_usuario_audit` WRITE;
/*!40000 ALTER TABLE `tbl_usuario_audit` DISABLE KEYS */;
INSERT INTO `tbl_usuario_audit` VALUES (5,'franciscomendo74','mendofrancis&/\"#','francismend@gmail.com',_binary '\0',1,'2025-04-13 10:57:44',NULL,NULL,'I','root@localhost'),(3,'benitojoseloy76','loayza148benit','beniloayza@gmail.com',_binary '',1,'2025-04-12 17:40:12',2,'2025-04-12 17:41:37','U','root@localhost'),(3,'benitojose1254','loayza148benit','benitjos@outlook.es',_binary '',1,'2025-04-12 17:40:12',1,'2025-04-13 11:03:30','U','root@localhost'),(5,'franmendoza','mendofrancis&/\"#','mendofra145@outlook.es',_binary '',1,'2025-04-13 10:57:44',3,'2025-04-13 10:58:54','D','root@localhost');
/*!40000 ALTER TABLE `tbl_usuario_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sv72770300'
--

--
-- Dumping routines for database 'sv72770300'
--
/*!50003 DROP PROCEDURE IF EXISTS `crud_compra` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_compra`(in opcion_in int, in id_proveedor_in int, in monto_total_in decimal(8,2), 
in fecha_in date, in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select * from tbl_compra where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_compra(id_proveedor, monto_total, fecha, usuario_creacion)
        values(id_proveedor_in, monto_total_in, now(), usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_compra
			set id_proveedor = ifnull(id_proveedor_in, id_proveedor),
            monto_total = ifnull(monto_total_in, monto_total),
            fecha = ifnull(fecha_in, fecha),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_compra	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_detalle_compra` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_detalle_compra`(
    in opcion_in int,
    in id_compra_in int,
    in id_materia_insumo_in int,
    in unidad_medicion_in varchar(20),
    in cantidad_in int,
    in monto_in decimal(8,2),
    in is_activo_in bit,
    in id_in int,
    in usuario_in int
)
begin
    if opcion_in = 1 then
        begin
            select * from tbl_detalle_compra where is_activo = 1;
        end;
    elseif opcion_in = 2 then
        begin
            insert into tbl_detalle_compra(id_compra, id_materia_insumo, unidad_medicion, cantidad, monto, usuario_creacion)
            values(id_compra_in, id_materia_insumo_in, unidad_medicion_in, cantidad_in, monto_in, usuario_in);

            -- update tbl_materia_insumo
            -- set cantidad = ifnull(cantidad + cantidad_in, cantidad)
            -- where id = id_materia_insumo_in;

        end;
    elseif opcion_in = 3 then
        begin
            -- declare old_detalle_cantidad int;
            -- select cantidad into old_detalle_cantidad
            -- from tbl_detalle_compra
            -- where id = id_in;

            update tbl_detalle_compra
            set id_compra = ifnull(id_compra_in, id_compra),
                id_materia_insumo = ifnull(id_materia_insumo_in, id_materia_insumo),
                unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
                cantidad = ifnull(cantidad_in, cantidad),
                monto = ifnull(monto_in, monto),
                is_activo = ifnull(is_activo_in, is_activo),
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;

            -- if cantidad_in is not null then
               -- update tbl_materia_insumo
               -- set cantidad = cantidad - old_detalle_cantidad + cantidad_in
               -- where id = ifnull(id_materia_insumo_in, (select id_materia_insumo from tbl_detalle_compra where id = id_in));
            -- end if;

        end;
    elseif opcion_in = 4 then
        begin
             -- declare deleted_detalle_cantidad int;
            -- declare deleted_materia_insumo_id int;
            -- select cantidad, id_materia_insumo into deleted_detalle_cantidad, deleted_materia_insumo_id
            -- from tbl_detalle_compra
            -- where id = id_in;

            update tbl_detalle_compra
            set is_activo = 0,
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;

            -- update tbl_materia_insumo
            -- set cantidad = cantidad - deleted_detalle_cantidad
            -- where id = deleted_materia_insumo_id;
        end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_detalle_produccion` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_detalle_produccion`(
    in opcion_in int,
    in id_produccion_in int,
    in id_materia_insumo_in int,
    in unidad_medicion_in varchar(20),
    in cantidad_in int,
    in is_activo_in bit,
    in id_in int,
    in usuario_in int
)
begin
    if opcion_in = 1 then
        begin
            select * from tbl_detalle_produccion where is_activo = 1;
        end;
    elseif opcion_in = 2 then
        begin
            insert into tbl_detalle_produccion(id_produccion, id_materia_insumo, unidad_medicion, cantidad, usuario_creacion)
            values(id_produccion_in, id_materia_insumo_in, unidad_medicion_in, cantidad_in, usuario_in);
        end;
    elseif opcion_in = 3 then
        begin
            update tbl_detalle_produccion
            set id_produccion = ifnull(id_produccion_in, id_produccion),
                id_materia_insumo = ifnull(id_materia_insumo_in, id_materia_insumo),
                unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
                cantidad = ifnull(cantidad_in, cantidad),
                is_activo = ifnull(is_activo_in, is_activo),
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;
        end;
    elseif opcion_in = 4 then
        begin
            update tbl_detalle_produccion
            set is_activo = 0,
                usuario_modificacion = usuario_in,
                fecha_modificacion = current_timestamp()
            where id = id_in;
        end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_empleados` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_empleados`(in opcion_in int, in dni_in varchar(13), in nombre_in varchar(100), in apellido_in varchar(100), 
in cargo_in varchar(100), in salario_in decimal(8,2), in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select * from tbl_empleados where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_empleados(dni, nombre, apellido, cargo, salario, usuario_creacion)
        values(dni_in, nombre_in, apellido_in, cargo_in, salario_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_empleados
			set dni =  ifnull(dni_in, dni),
            nombre = ifnull(nombre_in, nombre),
            apellido = ifnull(apellido_in, apellido),
            cargo = ifnull(cargo_in, cargo),
            salario = ifnull(salario_in, salario),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_empleados	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_materia_insumo` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_materia_insumo`(in opcion_in int, in nombre_in varchar(100), in unidad_medicion_in varchar(20), 
in cantidad_in int, in tipo_in varchar(50), in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select * from tbl_materia_insumo where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_materia_insumo(nombre, unidad_medicion, cantidad, tipo, usuario_creacion)
        values(nombre_in, unidad_medicion_in, cantidad_in, tipo_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_materia_insumo
			set nombre = ifnull(nombre_in, nombre),
            unidad_medicion = ifnull(unidad_medicion_in, unidad_medicion),
            cantidad = ifnull(cantidad_in, cantidad),
            tipo = ifnull(tipo_in, tipo),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_materia_insumo	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_produccion` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_produccion`(in opcion_in int, in tipo_in varchar(50), in nombre_in varchar(100), 
in cantidad_total_in int, in id_empleado_in int, in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select p.id, p.tipo, p.nombre, p.cantidad_total, p.id_empleado as 'Responsable',
        p.usuario_creacion, p.fecha_creacion, p.usuario_modificacion, p.fecha_modificacion from tbl_produccion as p where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_produccion(tipo, nombre, cantidad_total, id_empleado, usuario_creacion)
        values(tipo_in, nombre_in, cantidad_total_in, id_empleado_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_produccion
			set tipo = ifnull(tipo_in, tipo),
            nombre = ifnull(nombre_in, nombre),
            cantidad_total = ifnull(cantidad_total_in, cantidad_total),
            id_empleado = ifnull(id_empleado_in, id_empleado),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_produccion	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_proveedores` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_proveedores`(in opcion_in int, in nombre_in varchar(100), in ruc_in varchar(100), in telefono_in varchar(50),
in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select * from tbl_proveedores where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_proveedores(nombre, ruc, telefono, usuario_creacion)
        values(nombre_in, ruc_in, telefono_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_proveedores
			set nombre = ifnull(nombre_in, nombre),
            ruc = ifnull(ruc_in, ruc),
            telefono = ifnull(telefono_in, telefono),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_proveedores	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `crud_usuario` */;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crud_usuario`(in opcion_in int, in username_in varchar(50), in contrasena_in varchar(512), in email_in varchar(100),
in is_activo_in bit, id_in int, in usuario_in int)
begin
	if opcion_in = 1 then
    begin
		select * from tbl_usuario where is_activo = 1;
    end;
    elseif opcion_in = 2 then
    begin
		insert into tbl_usuario(username, contrasena, email, usuario_creacion)
        values(username_in, contrasena_in, email_in, usuario_in);
    end;
    elseif opcion_in = 3 then
    begin
		update tbl_usuario
			set username = ifnull(username_in, username),
            contrasena = ifnull(contrasena_in, contrasena),
            email = ifnull(email_in, email),
            is_activo = ifnull(is_activo_in, is_activo),
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    elseif opcion_in = 4 then
    begin
		update tbl_usuario	
			set is_activo = 0,
            usuario_modificacion = usuario_in,
            fecha_modificacion = current_timestamp()
		where id = id_in;
    end;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `sv72770300` CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13 13:19:25
