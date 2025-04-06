-- 1. Seleccionar los clientes que viven en el país de "usa"
SELECT * 
FROM customer 
WHERE upper(country) = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * 
FROM supplier 
WHERE upper(city) = 'BERLIN';

-- 3. Seleccionar los empleados con código 3,5 y 8
SELECT * 
FROM employee 
WHERE employeeID IN (3, 5, 8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * 
FROM product 
WHERE unitsInStock > 0 
  AND supplierID IN (1, 3, 5);

-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * 
FROM product 
WHERE unitPrice BETWEEN 20 AND 90;

-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997 --
SELECT *
FROM salesorder
WHERE orderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1, 3, 4, 8
SELECT *
FROM salesorder
WHERE YEAR(orderDate) = 1997
AND employeeID IN (1, 3, 4, 8);

-- 8. Mostrar las ordenes hechas en el año 1996
SELECT * 
FROM salesorder
WHERE YEAR(orderDate) = 1996;

-- 9. Mostrar las ordenes hechas en el año 1997, del mes de abril
SELECT * 
FROM salesorder
WHERE YEAR(orderDate) = 1997
  AND MONTH(orderDate) = 4;

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * 
FROM salesorder
WHERE YEAR(orderDate) = 1998
  AND DAY(orderDate) = 1;

-- 11. Mostrar todos los clientes que no tienen fax
SELECT * 
FROM customer
WHERE fax IS NULL OR fax = '';

-- 12. Mostrar todos los clientes que tienen fax
SELECT * 
FROM customer
WHERE fax IS NOT NULL AND fax != '';

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece
SELECT 
    p.productName AS Producto, 
    p.unitPrice AS Precio, 
    ifnull(p.unitsInStock,0) AS Stock, 
    c.categoryName AS Categoria
FROM 
    product p
JOIN 
    category c ON p.categoryId = c.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora
SELECT 
    p.productName AS Producto, 
    p.unitPrice AS Precio, 
    p.supplierId AS CodigoProveedor, 
    s.companyName AS CompaniaProveedora
FROM 
    product p
JOIN 
    supplier s ON p.supplierId = s.supplierId;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto
SELECT 
    o.orderId AS "Número de Orden", 
    od.productId AS "Código de Producto", 
    od.unitPrice AS "Precio", 
    od.quantity AS "Cantidad", 
    (od.unitPrice * od.quantity) AS "Total Pagado por Producto"
FROM 
    orderdetail od
JOIN 
    salesorder o ON od.orderId = o.orderId;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo
SELECT 
    o.orderId AS "Número de Orden", 
    o.orderDate AS "Fecha", 
    od.productId AS "Código de Producto", 
    od.unitPrice AS "Precio", 
    e.employeeId AS "Código de Empleado", 
    CONCAT(e.firstName, ' ', e.lastName) AS "Nombre Completo"
FROM 
    salesorder o
JOIN 
    orderdetail od ON o.orderId = od.orderId
JOIN 
    employee e ON o.employeeId = e.employeeId;

-- 17. Mostrar los 10 productos con menor stock
SELECT 
    productName AS Producto, 
    IFNULL(unitsInStock, 0) AS Stock
FROM 
    product
ORDER BY 
    unitsInStock ASC
LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
SELECT 
    productName AS Producto, 
    IFNULL(unitsInStock, 0) AS Stock
FROM 
    product
ORDER BY 
    unitsInStock DESC
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
SELECT 
    productName AS Producto, 
    IFNULL(unitPrice, 0) AS Precio
FROM 
    product
ORDER BY 
    unitPrice ASC
LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
SELECT 
    productName AS Producto, 
    IFNULL(unitPrice, 0) AS Precio
FROM 
    product
ORDER BY 
    unitPrice DESC
LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
SELECT 
    productName AS Producto, 
    IFNULL(unitPrice, 0) AS Precio
FROM 
    product
ORDER BY 
    unitPrice ASC
LIMIT 10;

-- 22. Mostrar los 10 productos más caros
SELECT 
    productName AS Producto, 
    IFNULL(unitPrice, 0) AS Precio
FROM 
    product
ORDER BY 
    unitPrice DESC
LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes, ordenar por compañía
SELECT * FROM customer
ORDER BY companyName;

-- 24. Seleccionar todos los campos de clientes, cuya compañía empiece con la letra B y pertenezcan a UK, ordenar por nombre de la compañía
SELECT * FROM customer
WHERE upper(companyName) LIKE 'B%' 
AND upper(country) = 'UK'
ORDER BY companyName;

-- 25. Seleccionar todos los campos de productos de las categorías 1,3 y 5, ordenar por categoría
SELECT * 
FROM product
WHERE categoryId IN (1, 3, 5)
ORDER BY categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios están entre 50 y 200
SELECT * 
FROM product
WHERE unitPrice BETWEEN 50 AND 200;

-- 27. Visualizar el nombre y el id de la compañía del cliente, fecha, precio unitario y producto de la orden
SELECT 
    c.companyName AS 'Nombre de la Compañía', 
    c.custId AS 'ID del Cliente', 
    so.orderDate AS 'Fecha de la Orden', 
    od.unitPrice AS 'Precio Unitario', 
    p.productName AS 'Producto'
FROM 
    customer c
JOIN 
    salesorder so ON c.custId = so.custId
JOIN 
    orderdetail od ON so.orderId = od.orderId
JOIN 
    product p ON od.productId = p.productId;

-- 28. Visualizar el nombre de la categoría y el número de productos que hay por cada 
SELECT 
    c.categoryName AS 'Nombre de la Categoría', 
    COUNT(p.productId) AS 'Número de Productos'
FROM 
    category c
JOIN 
    product p ON c.categoryId = p.categoryId
GROUP BY 
    c.categoryName;

-- 29. Seleccionar los 5 productos más vendidos
SELECT p.productName AS NombreProducto, 
       SUM(od.quantity) AS TotalVendido
FROM orderdetail od
JOIN product p ON od.productId = p.productId
GROUP BY p.productName
ORDER BY TotalVendido DESC
LIMIT 5;

-- 30. Seleccionar los jefes de los empleados
SELECT 
    e1.employeeId AS empleado_id,
    e1.firstname AS empleado_nombre,
    e1.lastname AS empleado_apellido,
    e2.employeeId AS jefe_id,
    e2.firstname AS jefe_nombre,
    e2.lastname AS jefe_apellido
FROM 
    employee e1
LEFT JOIN 
    employee e2 ON e1.mgrId = e2.employeeId;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * 
FROM product
WHERE productName LIKE 'M%' 
AND unitPrice BETWEEN 28 AND 129;

-- 32. Obtener todos los clientes del país de USA, Francia y UK
SELECT * 
FROM customer
WHERE upper(country) IN ('USA', 'FRANCE', 'UK');

-- 33. Obtener todos los productos descontinuados o con stock cero
SELECT * 
FROM product
WHERE discontinued = 0 OR unitsInStock = 0;

-- 34. Obtener todas las órdenes hechas por el empleado King Robert
SELECT so.*
FROM salesorder AS so
JOIN employee AS e ON so.employeeId = e.employeeId
WHERE upper(e.firstname) = 'ROBERT' AND upper(e.lastname) = 'KING';

-- 35. Obtener todas las órdenes por el cliente cuya compañía es "Que delicia"
SELECT so.*
FROM salesorder AS so
JOIN customer AS c ON so.custId = c.custId
WHERE c.companyName = 'Que delicia';

-- 36. Obtener todas las órdenes hechas por el empleado King Robert, Davolio Nancy y Fuller Andrew
SELECT so.*
FROM salesorder so
JOIN employee e ON so.employeeId = e.employeeId
WHERE UPPER(CONCAT(e.firstname, ' ', e.lastname)) IN (
    'ROBERT KING',
    'NANCY DAVOLIO',
    'ANDREW FULLER'
);

-- 37. Obtener todos los productos (código, nombre, precio, stock) de la orden 10257
SELECT 
    p.productId AS codigo_producto, 
    p.productName AS nombre_producto, 
    p.unitPrice AS precio, 
    p.unitsInStock AS stock
FROM 
    orderdetail od
JOIN 
    product p ON od.productId = p.productId
WHERE 
    od.orderId = 10257;

-- 38. Obtener todos los productos (código, nombre, precio, stock) de las órdenes hechas desde 1997 hasta la fecha de hoy
SELECT 
    p.productId AS 'Código',
    p.productName AS 'Nombre',
    p.unitPrice AS 'Precio',
    p.unitsInStock AS 'Stock'
FROM 
    product p
JOIN 
    orderdetail od ON p.productId = od.productId
JOIN 
    salesorder o ON od.orderId = o.orderId
WHERE 
    o.orderDate >= '1997-01-01' 
    AND o.orderDate <= CURDATE()
GROUP BY 
    p.productId, p.productName, p.unitPrice, p.unitsInStock
ORDER BY 
    p.productName;
    
-- 39. Calcular los 15 productos más caros
SELECT 
    p.productId AS 'Código',
    p.productName AS 'Nombre',
    p.unitPrice AS 'Precio',
    c.categoryName AS 'Categoría',
    p.unitsInStock AS 'Stock'
FROM 
    product p
LEFT JOIN 
    category c ON p.categoryId = c.categoryId
ORDER BY 
    p.unitPrice DESC
LIMIT 15;

-- 40. Calcular los 5 productos más baratos
SELECT 
    p.productId AS 'Código',
    p.productName AS 'Nombre',
    p.unitPrice AS 'Precio',
    c.categoryName AS 'Categoría',
    p.unitsInStock AS 'Stock'
FROM 
    product p
LEFT JOIN 
    category c ON p.categoryId = c.categoryId
ORDER BY 
    p.unitPrice asc
LIMIT 5;

-- 41. Obtener el nombre de todas las categorías y los nombres de sus productos, precio y stock
SELECT 
    c.categoryName AS 'Categoría',
    p.productName AS 'Producto',
    p.unitPrice AS 'Precio',
    p.unitsInStock AS 'Stock'
FROM 
    category c
LEFT JOIN 
    product p ON c.categoryId = p.categoryId -- AND p.discontinued = 1
ORDER BY 
    c.categoryName,
    p.productName;

-- 42. Obtener el nombre de todas las categorías y los nombres de sus productos, solo los productos que su nombre no comience con la letra P
SELECT 
    c.categoryName AS 'Categoría',
    p.productName AS 'Producto',
    p.unitPrice AS 'Precio',
    p.unitsInStock AS 'Stock'
FROM 
    category c
LEFT JOIN 
    product p ON c.categoryId = p.categoryId
WHERE 
   upper(p.productName) NOT LIKE 'P%' -- OR p.productName IS NULL
ORDER BY 
    c.categoryName ASC,
    p.productName ASC;

-- 43. Calcular el stock de productos por cada categoría. Mostrar el nombre de la categoría y el stock por categoría
SELECT 
    c.categoryName AS 'Categoría',
    SUM(p.unitsInStock) AS 'Total Stock',
    COUNT(p.productId) AS 'Cantidad de Productos',
    CONCAT('$', FORMAT(SUM(p.unitPrice * p.unitsInStock), 2)) AS 'Valor Total en Stock'
FROM 
    category c
LEFT JOIN 
    product p ON c.categoryId = p.categoryId

GROUP BY 
    c.categoryId, c.categoryName
ORDER BY 
    SUM(p.unitsInStock) DESC;

-- 44. Obtener el nombre del cliente, nombre del proveedor, nombre del empleado y el nombre de los productos que están en la orden 10794
SELECT 
    o.orderId AS 'Número de Orden',
    c.companyName AS 'Cliente',
    s.companyName AS 'Proveedor',
    CONCAT(e.firstname, ' ', e.lastname) AS 'Empleado',
    p.productName AS 'Producto',
    od.quantity AS 'Cantidad',
    CONCAT('$', FORMAT(od.unitPrice, 2)) AS 'Precio Unitario',
    CONCAT('$', FORMAT((od.unitPrice * od.quantity), 2)) AS 'Subtotal'
FROM 
    salesorder o
JOIN 
    customer c ON o.custId = c.custId
JOIN 
    employee e ON o.employeeId = e.employeeId
JOIN 
    orderdetail od ON o.orderId = od.orderId
JOIN 
    product p ON od.productId = p.productId
JOIN 
    supplier s ON p.supplierId = s.supplierId
WHERE 
    o.orderId = 10794
ORDER BY 
    p.productName;
    
-- 45. Mostrar el número de órdenes de cada uno de los clientes por año, luego ordenar por código del cliente y el año
SELECT 
    c.custId AS 'Código Cliente',
    c.companyName AS 'Nombre Cliente',
    YEAR(o.orderDate) AS 'Año',
    COUNT(o.orderId) AS 'Número de Órdenes'
FROM 
    customer c
LEFT JOIN 
    salesorder o ON c.custId = o.custId
GROUP BY 
    c.custId, 
    c.companyName, 
    YEAR(o.orderDate)
ORDER BY 
    c.custId ASC,
    YEAR(o.orderDate) ASC;

-- 46. Contar el número de órdenes que se han realizado por años y meses, luego debe ser ordenado por año y por mes
SELECT 
    YEAR(orderDate) AS 'Año',
    MONTH(orderDate) AS 'Mes',
    MONTHNAME(orderDate) AS 'Nombre Mes',
    COUNT(orderId) AS 'Total Órdenes'
FROM 
    salesorder
WHERE 
    orderDate IS NOT NULL
GROUP BY 
    YEAR(orderDate),
    MONTH(orderDate),
    MONTHNAME(orderDate)
ORDER BY 
    YEAR(orderDate) ASC,
    MONTH(orderDate) ASC;

-- 47. Seleccionar el nombre de la compañía del cliente, el código de la orden de compra, la fecha de la orden de compra, código del producto, cantidad pedida del producto, nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor, usar JOIN
SELECT
    c.companyName AS 'Cliente',
    o.orderId AS 'Orden ID',
    DATE_FORMAT(o.orderDate, '%Y-%m-%d') AS 'Fecha Orden',
    p.productId AS 'Código Producto',
    od.quantity AS 'Cantidad',
    p.productName AS 'Producto',
    s.companyName AS 'Proveedor',
    s.city AS 'Ciudad Proveedor'
FROM
    salesorder o
JOIN
    customer c ON o.custId = c.custId
JOIN
    orderdetail od ON o.orderId = od.orderId
JOIN
    product p ON od.productId = p.productId
JOIN
    supplier s ON p.supplierId = s.supplierId
ORDER BY
    o.orderDate DESC,
    c.companyName ASC;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto, cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora. Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G, además la cantidad pedida del producto debe estar entre 23 y 187
SELECT
    c.companyName AS 'Cliente',
    c.contactName AS 'Contacto',
    o.orderId AS 'Número de Orden',
    DATE_FORMAT(o.orderDate, '%d/%m/%Y') AS 'Fecha de Orden',
    p.productId AS 'Código de Producto',
    od.quantity AS 'Cantidad Pedida',
    p.productName AS 'Producto',
    s.companyName AS 'Proveedor'
FROM
    salesorder o
INNER JOIN
    customer c ON o.custId = c.custId
INNER JOIN
    orderdetail od ON o.orderId = od.orderId
INNER JOIN
    product p ON od.productId = p.productId
INNER JOIN
    supplier s ON p.supplierId = s.supplierId
WHERE
    s.companyName BETWEEN 'A%' AND 'H%'  -- Proveedores de A a G
    AND s.companyName < 'H'  -- Alternativa para asegurar solo A-G
    AND od.quantity BETWEEN 23 AND 187  -- Cantidad en rango
ORDER BY
    s.companyName ASC,
    od.quantity DESC; 

