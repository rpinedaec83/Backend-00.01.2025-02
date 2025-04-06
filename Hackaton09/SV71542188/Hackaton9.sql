
-- 1. Seleccionar los clientes que viven en el país de "USA"
SELECT * FROM Customer WHERE country = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM Supplier WHERE city = 'BERLIN';

-- 3. Seleccionar los empleados con código 3,5 y 8
SELECT * FROM Employee WHERE empId IN (3, 5, 8);

-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM Product WHERE unitsInStock > 0 AND supplierId IN (1, 3, 5);

-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM Product WHERE unitPrice BETWEEN 20 AND 90;

-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM Orders WHERE orderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1, 3, 4, 8
SELECT * FROM Orders WHERE YEAR(orderDate) = 1997 AND employeeId IN (1, 3, 4, 8);

-- 8. Mostrar las órdenes hechas en el año 1996
SELECT * FROM Orders WHERE YEAR(orderDate) = 1996;

-- 9. Mostrar las órdenes hechas en el año 1997, del mes de abril
SELECT * FROM Orders WHERE YEAR(orderDate) = 1997 AND MONTH(orderDate) = 4;

-- 10. Mostrar las órdenes hechas el primero de todos los meses, del año 1998
SELECT * FROM Orders WHERE YEAR(orderDate) = 1998 AND DAY(orderDate) = 1;

-- 11. Mostrar todos los clientes que no tienen fax
SELECT * FROM Customer WHERE fax IS NULL OR fax = '';

-- 12. Mostrar todos los clientes que tienen fax
SELECT * FROM Customer WHERE fax IS NOT NULL AND fax <> '';

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece
SELECT p.productName, p.unitPrice, p.unitsInStock, c.categoryName
FROM Product p
JOIN Category c ON p.categoryId = c.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora
SELECT p.productName, p.unitPrice, p.supplierId, s.companyName
FROM Product p
JOIN Supplier s ON p.supplierId = s.supplierId;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto
SELECT orderId, productId, unitPrice, quantity, (unitPrice * quantity) AS total
FROM OrderDetail;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo
SELECT o.orderId, o.orderDate, od.productId, od.unitPrice, o.employeeId, CONCAT(e.firstName, ' ', e.lastName) AS empleado
FROM Orders o
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Employee e ON o.employeeId = e.empId;

-- 17. Mostrar los 10 productos con menor stock
SELECT * FROM Product ORDER BY unitsInStock ASC LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
SELECT * FROM Product ORDER BY unitsInStock DESC LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
SELECT * FROM Product ORDER BY unitPrice ASC LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
SELECT * FROM Product ORDER BY unitPrice DESC LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
SELECT * FROM Product ORDER BY unitPrice ASC LIMIT 10;

-- 22. Mostrar los 10 productos más caros
SELECT * FROM Product ORDER BY unitPrice DESC LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes, ordenar por compañia
SELECT * FROM Customer ORDER BY companyName;

-- 24. Seleccionar todos los campos de clientes, cuya compañia empiece con la letra B y pertenezcan a UK, ordenar por nombre de la compañia
SELECT * FROM Customer WHERE companyName LIKE 'B%' AND country = 'UK' ORDER BY companyName;

-- 25. Seleccionar todos los campos de productos de las categorías 1, 3 y 5, ordenar por categoría
SELECT * FROM Product WHERE categoryId IN (1, 3, 5) ORDER BY categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios están entre 50 y 200
SELECT * FROM Product WHERE unitPrice BETWEEN 50 AND 200;

-- 27. Visualizar el nombre y el id de la compañia del cliente, fecha, precio unitario y producto de la orden
SELECT c.companyName, c.custId, o.orderDate, od.unitPrice, p.productName
FROM Orders o
JOIN Customer c ON o.customerId = c.custId
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Product p ON od.productId = p.productId;

-- 28. Visualizar el nombre de la categoría y el número de productos que hay por cada categoría
SELECT c.categoryName, COUNT(p.productId) AS totalProductos
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
GROUP BY c.categoryName;

-- 29. Seleccionar los 5 productos más vendidos
SELECT p.productId, p.productName, SUM(od.quantity) AS totalVendido
FROM OrderDetail od
JOIN Product p ON od.productId = p.productId
GROUP BY p.productId, p.productName
ORDER BY totalVendido DESC
LIMIT 5;

-- 30. Seleccionar los jefes de los empleados
SELECT DISTINCT e2.empId AS jefeId, CONCAT(e2.firstName, ' ', e2.lastName) AS jefeNombre
FROM Employee e1
JOIN Employee e2 ON e1.reportsTo = e2.empId;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * FROM Product WHERE productName LIKE 'M%' AND unitPrice BETWEEN 28 AND 129;

-- 32. Obtener todos los clientes del País de USA, Francia y UK
SELECT * FROM Customer WHERE country IN ('USA', 'France', 'UK');

-- 33. Obtener todos los productos descontinuados o con stock cero
SELECT * FROM Product WHERE discontinued = 1 OR unitsInStock = 0;

-- 34. Obtener todas las órdenes hechas por el empleado King Robert
SELECT * FROM Orders o
JOIN Employee e ON o.employeeId = e.empId
WHERE e.firstName = 'Robert' AND e.lastName = 'King';

-- 35. Obtener todas las órdenes por el cliente cuya compañía es "Que delicia"
SELECT * FROM Orders o
JOIN Customer c ON o.customerId = c.custId
WHERE c.companyName = 'Que delicia';

-- 36. Obtener todas las órdenes hechas por el empleado King Robert, Davolio Nancy y Fuller Andrew
SELECT * FROM Orders o
JOIN Employee e ON o.employeeId = e.empId
WHERE (e.firstName = 'Robert' AND e.lastName = 'King')
   OR (e.firstName = 'Nancy' AND e.lastName = 'Davolio')
   OR (e.firstName = 'Andrew' AND e.lastName = 'Fuller');

-- 37. Obtener todos los productos (código, nombre, precio, stock) de la orden 10257
SELECT p.productId, p.productName, p.unitPrice, p.unitsInStock
FROM OrderDetail od
JOIN Product p ON od.productId = p.productId
WHERE od.orderId = 10257;

-- 38. Obtener todos los productos (código, nombre, precio, stock) de las órdenes hechas desde 1997 hasta la fecha de hoy
SELECT DISTINCT p.productId, p.productName, p.unitPrice, p.unitsInStock
FROM Orders o
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
WHERE o.orderDate >= '1997-01-01';

-- 39. Calcular los 15 productos más caros
SELECT * FROM Product ORDER BY unitPrice DESC LIMIT 15;

-- 40. Calcular los 5 productos más baratos
SELECT * FROM Product ORDER BY unitPrice ASC LIMIT 5;

-- 41. Obtener el nombre de todas las categorías y los nombres de sus productos, precio y stock
SELECT c.categoryName, p.productName, p.unitPrice, p.unitsInStock
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId;

-- 42. Obtener el nombre de todas las categorías y los nombres de sus productos, solo los productos que su nombre no comience con la letra P
SELECT c.categoryName, p.productName, p.unitPrice, p.unitsInStock
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
WHERE p.productName NOT LIKE 'P%';

-- 43. Calcular el stock de productos por cada categoría. Mostrar el nombre de la categoría y el stock por categoría
SELECT c.categoryName, SUM(p.unitsInStock) AS stockTotal
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
GROUP BY c.categoryName;

-- 44. Obtener el Nombre del cliente, Nombre del Proveedor, Nombre del empleado y el nombre de los productos que están en la orden 10794
SELECT cu.companyName AS cliente, s.companyName AS proveedor, CONCAT(e.firstName, ' ', e.lastName) AS empleado, p.productName
FROM Orders o
JOIN Customer cu ON o.customerId = cu.custId
JOIN Employee e ON o.employeeId = e.empId
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
JOIN Supplier s ON p.supplierId = s.supplierId
WHERE o.orderId = 10794;

-- 45. Mostrar el número de órdenes de cada uno de los clientes por año, luego ordenar por código del cliente y el año
SELECT customerId, YEAR(orderDate) AS año, COUNT(*) AS totalOrdenes
FROM Orders
GROUP BY customerId, YEAR(orderDate)
ORDER BY customerId, año;

-- 46. Contar el número de órdenes que se han realizado por años y meses, luego debe ser ordenado por año y por mes
SELECT YEAR(orderDate) AS año, MONTH(orderDate) AS mes, COUNT(*) AS totalOrdenes
FROM Orders
GROUP BY año, mes
ORDER BY año, mes;

-- 47. JOIN múltiple con detalles del pedido
SELECT c.companyName AS cliente, o.orderId, o.orderDate, od.productId, od.quantity, p.productName, s.companyName AS proveedor, s.city
FROM Orders o
JOIN Customer c ON o.customerId = c.custId
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
JOIN Supplier s ON p.supplierId = s.supplierId;

-- 48. JOIN filtrado por proveedores entre A-G y cantidades específicas
SELECT c.companyName AS cliente, c.contactName, o.orderId, o.orderDate, od.productId, od.quantity, p.productName, s.companyName AS proveedor
FROM Orders o
JOIN Customer c ON o.customerId = c.custId
JOIN OrderDetail od ON o.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
JOIN Supplier s ON p.supplierId = s.supplierId
WHERE s.companyName BETWEEN 'A' AND 'G' AND od.quantity BETWEEN 23 AND 187;
