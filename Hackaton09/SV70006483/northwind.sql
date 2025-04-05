

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `categoryId` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `picture` blob NULL,
  PRIMARY KEY (`categoryId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for custcustdemographics
-- ----------------------------
DROP TABLE IF EXISTS `custcustdemographics`;
CREATE TABLE `custcustdemographics`  (
  `custId` int(11) NOT NULL,
  `customerTypeId` int(11) NOT NULL,
  PRIMARY KEY (`custId`, `customerTypeId`) USING BTREE,
  INDEX `customerTypeId`(`customerTypeId`) USING BTREE,
  CONSTRAINT `custcustdemographics_ibfk_1` FOREIGN KEY (`custId`) REFERENCES `customer` (`custId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `custcustdemographics_ibfk_2` FOREIGN KEY (`customerTypeId`) REFERENCES `customerdemographics` (`customerTypeId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `custId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `contactName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `contactTitle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `address` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `city` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `region` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `postalCode` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `country` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `mobile` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(225) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `fax` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`custId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 92 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for customerdemographics
-- ----------------------------
DROP TABLE IF EXISTS `customerdemographics`;
CREATE TABLE `customerdemographics`  (
  `customerTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `customerDesc` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  PRIMARY KEY (`customerTypeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `employeeId` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `firstname` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `titleOfCourtesy` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `birthDate` datetime(0) NULL DEFAULT NULL,
  `hireDate` datetime(0) NULL DEFAULT NULL,
  `address` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `city` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `region` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `postalCode` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `country` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `extension` varchar(4) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `mobile` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(225) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `photo` blob NULL,
  `notes` blob NULL,
  `mgrId` int(11) NULL DEFAULT NULL,
  `photoPath` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`employeeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for employeeterritory
-- ----------------------------
DROP TABLE IF EXISTS `employeeterritory`;
CREATE TABLE `employeeterritory`  (
  `employeeId` int(11) NOT NULL AUTO_INCREMENT,
  `territoryId` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`employeeId`, `territoryId`) USING BTREE,
  INDEX `territoryId`(`territoryId`) USING BTREE,
  CONSTRAINT `employeeterritory_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`employeeId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `employeeterritory_ibfk_2` FOREIGN KEY (`territoryId`) REFERENCES `territory` (`territoryId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail`  (
  `orderDetailId` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `unitPrice` decimal(10, 2) NOT NULL,
  `quantity` smallint(6) NOT NULL,
  `discount` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`orderDetailId`) USING BTREE,
  INDEX `orderId`(`orderId`) USING BTREE,
  INDEX `productId`(`productId`) USING BTREE,
  CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `salesorder` (`orderId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2156 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `supplierId` int(11) NULL DEFAULT NULL,
  `categoryId` int(11) NULL DEFAULT NULL,
  `quantityPerUnit` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `unitPrice` decimal(10, 2) NULL DEFAULT NULL,
  `unitsInStock` smallint(6) NULL DEFAULT NULL,
  `unitsOnOrder` smallint(6) NULL DEFAULT NULL,
  `reorderLevel` smallint(6) NULL DEFAULT NULL,
  `discontinued` char(1) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`productId`) USING BTREE,
  INDEX `supplierId`(`supplierId`) USING BTREE,
  INDEX `categoryId`(`categoryId`) USING BTREE,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 78 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for region
-- ----------------------------
DROP TABLE IF EXISTS `region`;
CREATE TABLE `region`  (
  `regionId` int(11) NOT NULL,
  `regiondescription` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`regionId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for salesorder
-- ----------------------------
DROP TABLE IF EXISTS `salesorder`;
CREATE TABLE `salesorder`  (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `custId` int(11) NOT NULL,
  `employeeId` int(11) NULL DEFAULT NULL,
  `orderDate` datetime(0) NULL DEFAULT NULL,
  `requiredDate` datetime(0) NULL DEFAULT NULL,
  `shippedDate` datetime(0) NULL DEFAULT NULL,
  `shipperid` int(11) NOT NULL,
  `freight` decimal(10, 2) NULL DEFAULT NULL,
  `shipName` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `shipAddress` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `shipCity` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `shipRegion` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `shipPostalCode` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `shipCountry` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`orderId`, `custId`) USING BTREE,
  INDEX `shipperid`(`shipperid`) USING BTREE,
  INDEX `custId`(`custId`) USING BTREE,
  CONSTRAINT `salesorder_ibfk_1` FOREIGN KEY (`shipperid`) REFERENCES `shipper` (`shipperId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `salesorder_ibfk_2` FOREIGN KEY (`custId`) REFERENCES `customer` (`custId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11078 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for shipper
-- ----------------------------
DROP TABLE IF EXISTS `shipper`;
CREATE TABLE `shipper`  (
  `shipperId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` varchar(44) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`shipperId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `supplierId` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `contactName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `contactTitle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `address` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `city` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `region` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `postalCode` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `country` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(225) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `fax` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `HomePage` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  PRIMARY KEY (`supplierId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for territory
-- ----------------------------
DROP TABLE IF EXISTS `territory`;
CREATE TABLE `territory`  (
  `territoryId` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `territorydescription` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `regionId` int(11) NOT NULL,
  PRIMARY KEY (`territoryId`) USING BTREE,
  INDEX `regionId`(`regionId`) USING BTREE,
  CONSTRAINT `territory_ibfk_1` FOREIGN KEY (`regionId`) REFERENCES `region` (`regionId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
