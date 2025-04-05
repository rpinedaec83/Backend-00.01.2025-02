-- 1. Seleccionar los clientes que viven en el país de "usa"
SELECT * 
FROM customer 
WHERE country = 'USA';

-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * 
FROM supplier 
WHERE city = 'BERLIN';

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
FROM orders 
WHERE orderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1, 3, 4, 8
SELECT * 
FROM `orders`
WHERE YEAR(`OrderDate`) = 1997
AND `EmployeeID` IN (1, 3, 4, 8);
-- 8. Mostrar las ordenes hechas en el año 1996
SELECT * 
FROM `orders`
WHERE YEAR(`OrderDate`) = 1996;
-- 9. Mostrar las ordenes hechas en el año 1997, del mes de abril
SELECT * 
FROM `orders`
WHERE YEAR(`OrderDate`) = 1997
AND MONTH(`OrderDate`) = 4;
-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT *
FROM orders
WHERE OrderDate >= '1998-01-01'
  AND OrderDate < '1999-01-01'
  AND DAY(OrderDate) = 1;
-- 11. Mostrar todos los clientes que no tienen fax
SELECT *
FROM customers
WHERE PostalCode IS NULL;
-- 12. Mostrar todos los clientes que tienen fax
SELECT *
FROM customers
WHERE PostalCode IS NOT NULL;
-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece
SELECT p.ProductID, p.ProductName, 
       p.Price, 
       IFNULL(SUM(od.Quantity), 0) AS TotalSold,
       c.CategoryName
FROM products p
LEFT JOIN categories c ON p.CategoryID = c.CategoryID
LEFT JOIN orderdetails od ON p.ProductID = od.ProductID
GROUP BY p.ProductID, p.ProductName, p.Price, c.CategoryName
ORDER BY p.ProductName ASC;
-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora
SELECT 
  p.ProductName,
  p.Price,
  p.SupplierID,
  s.SupplierName
FROM products p
INNER JOIN suppliers s ON p.SupplierID = s.SupplierID;
-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto
SELECT 
  od.OrderID,
  od.ProductID,
  p.Price,
  od.Quantity,
  (p.Price * od.Quantity) AS TotalPagado
FROM orderdetails od
INNER JOIN products p ON od.ProductID = p.ProductID;
-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo
SELECT 
  o.OrderID,
  o.OrderDate,
  od.ProductID,
  p.Price,
  o.EmployeeID,
  CONCAT(e.FirstName, ' ', e.LastName) AS NombreEmpleado
FROM orders o
INNER JOIN orderdetails od ON o.OrderID = od.OrderID
INNER JOIN products p ON od.ProductID = p.ProductID
INNER JOIN employees e ON o.EmployeeID = e.EmployeeID;
-- 17. Mostrar los 10 productos con menor stock
SELECT p.ProductID, p.ProductName, 
       IFNULL(SUM(od.Quantity), 0) AS TotalSold
FROM products p
LEFT JOIN orderdetails od ON p.ProductID = od.ProductID
GROUP BY p.ProductID
ORDER BY TotalSold ASC
LIMIT 10;
-- 18. Mostrar los 10 productos con mayor stock
SELECT p.ProductID, p.ProductName, 
       IFNULL(SUM(od.Quantity), 0) AS TotalSold
FROM products p
LEFT JOIN orderdetails od ON p.ProductID = od.ProductID
GROUP BY p.ProductID
ORDER BY TotalSold DESC
LIMIT 10;
-- 19. Mostrar los 10 productos con menor precio
SELECT ProductID, ProductName, Price
FROM products
ORDER BY Price ASC
LIMIT 10;
-- 20. Mostrar los 10 productos con mayor precio
SELECT ProductID, ProductName, Price
FROM products
ORDER BY Price DESC
LIMIT 10;
-- 21. Mostrar los 10 productos más baratos
SELECT 
  ProductID,
  ProductName,
  Price
FROM products
ORDER BY Price ASC
LIMIT 10;
-- 22. Mostrar los 10 productos más caros
SELECT 
  ProductID,
  ProductName,
  Price
FROM products
ORDER BY Price DESC
LIMIT 10;
-- 23. Seleccionar todos los campos de la tabla clientes, ordenar por compañía
SELECT *
FROM customers
ORDER BY CustomerName ASC;
-- 24. Seleccionar todos los campos de clientes, cuya compañía empiece con la letra B y pertenezcan a UK, ordenar por nombre de la compañía
SELECT *
FROM customers
WHERE CustomerName LIKE 'B%' AND Country = 'UK'
ORDER BY CustomerName ASC;
-- 25. Seleccionar todos los campos de productos de las categorías 1,3 y 5, ordenar por categoría
SELECT *
FROM products
WHERE CategoryID IN (1, 3, 5)
ORDER BY CategoryID ASC;
-- 26. Seleccionar los productos cuyos precios unitarios están entre 50 y 200
SELECT *
FROM products
WHERE Price BETWEEN 50 AND 200;
-- 27. Visualizar el nombre y el id de la compañía del cliente, fecha, precio unitario y producto de la orden
SELECT 
    c.CustomerName, 
    c.CustomerID, 
    o.OrderDate, 
    p.ProductName, 
    od.Quantity, 
    p.Price
FROM customers c
JOIN orders o ON c.CustomerID = o.CustomerID
JOIN orderdetails od ON o.OrderID = od.OrderID
JOIN products p ON od.ProductID = p.ProductID;
-- 28. Visualizar el nombre de la categoría y el número de productos que hay por cada 
SELECT 
    c.CategoryName, 
    COUNT(p.ProductID) AS ProductCount
FROM categories c
JOIN products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;
-- 29. Seleccionar los 5 productos más vendidos
SELECT 
    p.ProductName, 
    SUM(od.Quantity) AS TotalQuantitySold
FROM orderdetails od
JOIN products p ON od.ProductID = p.ProductID
GROUP BY p.ProductName
ORDER BY TotalQuantitySold DESC
LIMIT 5;
-- 30. Seleccionar los jefes de los empleados
SELECT 
    e.EmployeeID AS EmployeeID,
    e.FirstName AS EmployeeFirstName,
    e.LastName AS EmployeeLastName,
    o.OrderID AS OrderID,
    o.OrderDate AS OrderDate
FROM employees e
LEFT JOIN orders o ON e.EmployeeID = o.EmployeeID;
-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT 
    ProductID, 
    ProductName, 
    Price
FROM products
WHERE ProductName LIKE 'M%' 
  AND Price BETWEEN 28 AND 129;
-- 32. Obtener todos los clientes del país de USA, Francia y UK
SELECT 
    CustomerID, 
    CustomerName, 
    ContactName, 
    Address, 
    City, 
    PostalCode, 
    Country
FROM customers
WHERE Country IN ('USA', 'France', 'UK');
-- 33. Obtener todos los productos descontinuados o con stock cero
SELECT p.ProductID, p.ProductName, '' as Discontinued, IFNULL(SUM(od.Quantity), 0) AS Stock
FROM products p
LEFT JOIN orderdetails od ON p.ProductID = od.ProductID
GROUP BY p.ProductID
HAVING SUM(od.Quantity) = 0;
-- 34. Obtener todas las órdenes hechas por el empleado King Robert
SELECT 
    o.OrderID, 
    o.OrderDate, 
    o.CustomerID, 
    o.EmployeeID
FROM orders o
JOIN employees e ON o.EmployeeID = e.EmployeeID
WHERE e.LastName = 'King' AND e.FirstName = 'Robert';
-- 35. Obtener todas las órdenes por el cliente cuya compañía es "Que delicia"
SELECT 
    o.OrderID, 
    o.OrderDate, 
    o.CustomerID, 
    o.EmployeeID, 
    o.ShipperID
FROM orders o
JOIN customers c ON o.CustomerID = c.CustomerID
WHERE c.CustomerName = 'Que delicia';
-- 36. Obtener todas las órdenes hechas por el empleado King Robert, Davolio Nancy y Fuller Andrew
SELECT 
    o.OrderID, 
    o.OrderDate, 
    o.CustomerID, 
    o.EmployeeID, 
    o.ShipperID
FROM orders o
JOIN employees e ON o.EmployeeID = e.EmployeeID
WHERE (e.LastName = 'King' AND e.FirstName = 'Robert')
   OR (e.LastName = 'Davolio' AND e.FirstName = 'Nancy')
   OR (e.LastName = 'Fuller' AND e.FirstName = 'Andrew');
-- 37. Obtener todos los productos (código, nombre, precio, stock) de la orden 10257
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.Price, 
    od.Quantity AS Stock
FROM 
    orderdetails od
JOIN 
    products p ON od.ProductID = p.ProductID
WHERE 
    od.OrderID = 10257;
-- 38. Obtener todos los productos (código, nombre, precio, stock) de las órdenes hechas desde 1997 hasta la fecha de hoy
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.Price, 
    od.Quantity AS Stock
FROM 
    orderdetails od
JOIN 
    products p ON od.ProductID = p.ProductID
JOIN 
    orders o ON od.OrderID = o.OrderID
WHERE 
    o.OrderDate >= '1997-01-01' 
    AND o.OrderDate <= CURDATE();
-- 39. Calcular los 15 productos más caros
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.Price
FROM 
    products p
ORDER BY 
    p.Price DESC
LIMIT 15;
-- 40. Calcular los 5 productos más baratos
SELECT 
    p.ProductID, 
    p.ProductName, 
    p.Price
FROM 
    products p
ORDER BY 
    p.Price ASC
LIMIT 5;
-- 41. Obtener el nombre de todas las categorías y los nombres de sus productos, precio y stock
SELECT 
    c.CategoryName, 
    p.ProductName, 
    p.Price, 
    IFNULL(od.Quantity, 0) AS Stock
FROM 
    categories c
JOIN 
    products p ON c.CategoryID = p.CategoryID
LEFT JOIN 
    orderdetails od ON p.ProductID = od.ProductID
ORDER BY 
    c.CategoryName, p.ProductName;
-- 42. Obtener el nombre de todas las categorías y los nombres de sus productos, solo los productos que su nombre no comience con la letra P
SELECT 
    c.CategoryName, 
    p.ProductName, 
    p.Price, 
    IFNULL(od.Quantity, 0) AS Stock
FROM 
    categories c
JOIN 
    products p ON c.CategoryID = p.CategoryID
LEFT JOIN 
    orderdetails od ON p.ProductID = od.ProductID
WHERE 
    p.ProductName NOT LIKE 'P%'
ORDER BY 
    c.CategoryName, p.ProductName;
-- 43. Calcular el stock de productos por cada categoría. Mostrar el nombre de la categoría y el stock por categoría
SELECT 
    c.CategoryName, 
    SUM(IFNULL(od.Quantity, 0)) AS Stock
FROM 
    categories c
JOIN 
    products p ON c.CategoryID = p.CategoryID
LEFT JOIN 
    orderdetails od ON p.ProductID = od.ProductID
GROUP BY 
    c.CategoryName
ORDER BY 
    c.CategoryName;
-- 44. Obtener el nombre del cliente, nombre del proveedor, nombre del empleado y el nombre de los productos que están en la orden 10794
SELECT 
    cu.CustomerName AS Cliente,
    su.SupplierName AS Proveedor,
    e.FirstName AS EmpleadoNombre,
    e.LastName AS EmpleadoApellido,
    p.ProductName AS Producto
FROM 
    orders o
JOIN 
    customers cu ON o.CustomerID = cu.CustomerID
JOIN 
    employees e ON o.EmployeeID = e.EmployeeID
JOIN 
    orderdetails od ON o.OrderID = od.OrderID
JOIN 
    products p ON od.ProductID = p.ProductID
JOIN 
    suppliers su ON p.SupplierID = su.SupplierID
WHERE 
    o.OrderID = 10794;
-- 45. Mostrar el número de órdenes de cada uno de los clientes por año, luego ordenar por código del cliente y el año
SELECT 
    cu.CustomerID AS ClienteID,
    YEAR(o.OrderDate) AS Año,
    COUNT(o.OrderID) AS NumeroDeOrdenes
FROM 
    orders o
JOIN 
    customers cu ON o.CustomerID = cu.CustomerID
GROUP BY 
    cu.CustomerID, YEAR(o.OrderDate)
ORDER BY 
    cu.CustomerID, Año;
-- 46. Contar el número de órdenes que se han realizado por años y meses, luego debe ser ordenado por año y por mes
SELECT 
    YEAR(o.OrderDate) AS Año,
    MONTH(o.OrderDate) AS Mes,
    COUNT(o.OrderID) AS NumeroDeOrdenes
FROM 
    orders o
GROUP BY 
    YEAR(o.OrderDate), MONTH(o.OrderDate)
ORDER BY 
    Año, Mes;
-- 47. Seleccionar el nombre de la compañía del cliente, el código de la orden de compra, la fecha de la orden de compra, código del producto, cantidad pedida del producto, nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor, usar JOIN
SELECT 
    c.CustomerName AS NombreCompaniaCliente,
    o.OrderID AS CodigoOrdenCompra,
    o.OrderDate AS FechaOrdenCompra,
    od.ProductID AS CodigoProducto,
    od.Quantity AS CantidadPedidaProducto,
    p.ProductName AS NombreProducto,
    s.SupplierName AS NombreCompaniaProveedora,
    s.City AS CiudadProveedor
FROM 
    orders o
JOIN 
    customers c ON o.CustomerID = c.CustomerID
JOIN 
    orderdetails od ON o.OrderID = od.OrderID
JOIN 
    products p ON od.ProductID = p.ProductID
JOIN 
    suppliers s ON p.SupplierID = s.SupplierID;
-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto, cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora. Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G, además la cantidad pedida del producto debe estar entre 23 y 187
SELECT 
    c.CustomerName AS NombreCompaniaCliente,
    c.ContactName AS NombreContacto,
    o.OrderID AS CodigoOrdenCompra,
    o.OrderDate AS FechaOrdenCompra,
    od.ProductID AS CodigoProducto,
    od.Quantity AS CantidadPedidaProducto,
    p.ProductName AS NombreProducto,
    s.SupplierName AS NombreCompaniaProveedora
FROM 
    orders o
JOIN 
    customers c ON o.CustomerID = c.CustomerID
JOIN 
    orderdetails od ON o.OrderID = od.OrderID
JOIN 
    products p ON od.ProductID = p.ProductID
JOIN 
    suppliers s ON p.SupplierID = s.SupplierID
WHERE 
    s.SupplierName BETWEEN 'A' AND 'G'
    AND od.Quantity BETWEEN 23 AND 187;

