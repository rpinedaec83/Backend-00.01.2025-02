-- Pregunta 1: Seleccionar los clientes que viven en el país de "USA"
SELECT * FROM Customers WHERE Country = 'USA';

-- Pregunta 2: Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM Suppliers WHERE City = 'Berlin';

-- Pregunta 3: Seleccionar los empleados con código 3, 5 y 8
SELECT * FROM Employees WHERE EmployeeID IN (3, 5, 8);

-- Pregunta 4: Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1, 3 y 5
SELECT * FROM Products 
 WHERE SupplierID IN (1, 3, 5) AND Unit > 0;

-- Pregunta 5: Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM Products 
WHERE Price >= 20 AND Price <= 90;

-- Pregunta 6: Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- Pregunta 7: Mostrar las órdenes hechas en el año 1997, que pertenecen a los empleados con códigos 1, 3, 4, 8
SELECT * FROM Orders 
WHERE YEAR(OrderDate) = 1997 AND EmployeeID IN (1, 3, 4, 8);

-- Pregunta 8: Mostrar las órdenes hechas en el año 1996
SELECT * FROM Orders 
WHERE YEAR(OrderDate) = 1996;

-- Pregunta 9: Mostrar las órdenes hechas en el año 1997, del mes de abril
SELECT * FROM Orders 
WHERE YEAR(OrderDate) = 1997 AND MONTH(OrderDate) = 4;

-- Pregunta 10: Mostrar las órdenes hechas el primero de todos los meses, del año 1998
SELECT * FROM Orders 
WHERE YEAR(OrderDate) = 1998 AND DAY(OrderDate) = 1;

-- Pregunta 11: Mostrar todos los clientes que no tienen fax

-- SELECT * FROM Customers WHERE Fax IS NULL;       -

-- Pregunta 12: Mostrar todos los clientes que tienen fax
-- SELECT * FROM Customers WHERE Fax IS NOT NULL;    -

-- Pregunta 13: Mostrar el nombre del producto, el precio, el stock y el nombre de la
-- categoría

SELECT P.ProductName, P.Price, P.Unit, C.CategoryName
FROM Products P
JOIN Categories C ON P.CategoryID = C.CategoryID;

-- Pregunta 14: Mostrar el nombre del producto, el precio producto, el código del proveedor
-- y el nombre de la compañía proveedora

SELECT P.ProductName, P.Price, P.SupplierID, S.SupplierName
FROM Products P
JOIN Suppliers S ON P.SupplierID = S.SupplierID;

-- Pregunta 15: Mostrar el número de orden, el código del producto, el precio, la cantidad y 
	-- el total pagado por producto
SELECT OD.OrderID, OD.ProductID, P.Price, OD.Quantity, (P.Price * OD.Quantity) AS TotalPagado
FROM OrderDetails OD
JOIN Products P ON OD.ProductID = P.ProductID;


-- Pregunta 16: Mostrar el número de la orden, fecha, código del producto, precio,
-- código del empleado y su nombre completo
SELECT O.OrderID, O.OrderDate, OD.ProductID, P.Price, E.EmployeeID, CONCAT(E.FirstName, ' ', E.LastName) AS NombreEmpleado
FROM Orders O --
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID 
JOIN Employees E ON O.EmployeeID = E.EmployeeID;

-- Pregunta 17: Mostrar los 10 productos con menor stock

SELECT * FROM Products  
ORDER BY UnitsInStock ASC 	
LIMIT 10;
 
-- Pregunta 18: Mostrar los 10 productos con mayor stock
SELECT * FROM Products 
ORDER BY UnitsInStock DESC 
LIMIT 10;
			
-- Pregunta 19: Mostrar los 10 productos con menor precio
SELECT * FROM Products 
ORDER BY Price ASC 
LIMIT 10;

-- Pregunta 20: Mostrar los 10 productos con mayor precio
SELECT * FROM Products 
ORDER BY Price DESC 
LIMIT 10;

-- Pregunta 21: Mostrar los 10 productos más baratos

SELECT * FROM Products 
ORDER BY Price ASC 
LIMIT 10;

-- Pregunta 22: Mostrar los 10 productos más caros

SELECT * FROM Products 
ORDER BY Price DESC 
LIMIT 10;

-- Pregunta 23: Seleccionar todos los campos de la tabla clientes, ordenar por compañía
SELECT * FROM Customers	 
ORDER BY CustomerName; 
	
-- Pregunta 24: Seleccionar todos los campos de clientes cuya compañía empiece 
	-- con la letra B y pertenezcan a UK, ordenar por nombre de la compañía
SELECT * FROM Customers 
WHERE CustomerName LIKE 'B%' AND Country = 'UK'
ORDER BY CustomerName;

-- Pregunta 25: Seleccionar todos los campos de productos de las categorías 1, 3 y 5,
-- ordenar por categoría

SELECT * FROM Products 
WHERE CategoryID IN (1, 3, 5)
ORDER BY CategoryID;

-- Pregunta 26: Seleccionar los productos cuyos precios unitarios están entre 50 y 200
SELECT * FROM Products 
WHERE Price BETWEEN 50 AND 200;

-- Pregunta 27: Visualizar el nombre y el id de la compañía del cliente, fecha, precio unitario y producto de la orden
SELECT C.CustomerName, C.CustomerID, O.OrderDate, P.Price, P.ProductName
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID;

-- Pregunta 28: Visualizar el nombre de la categoría y el número de productos que hay por 
-- cada categoría
SELECT C.CategoryName, COUNT(P.ProductID) AS TotalProductos
FROM Categories C
JOIN Products P ON C.CategoryID = P.CategoryID
GROUP BY C.CategoryName;

-- Pregunta 29: Seleccionar los 5 productos más vendidos (por cantidad total vendida)
SELECT P.ProductName, SUM(OD.Quantity) AS TotalVendido
FROM OrderDetails OD
JOIN Products P ON OD.ProductID = P.ProductID
GROUP BY P.ProductID
ORDER BY TotalVendido DESC
LIMIT 5;

-- Pregunta 30: Seleccionar los jefes de los empleados
-- (No hay relación jefe-empleado)

-- Pregunta 31: Obtener todos los productos cuyo nombre comienzan con M y tienen un precio entre 28 y 129
SELECT * FROM Products 
WHERE ProductName LIKE 'M%' AND Price BETWEEN 28 AND 129;

-- Pregunta 32: Obtener todos los clientes del país USA, Francia y UK
SELECT * FROM Customers 
WHERE Country IN ('USA', 'France', 'UK');

-- Pregunta 33: Obtener todos los productos descontinuados o con stock cero

SELECT * FROM Products 
WHERE Units = 0;

-- Pregunta 34: Obtener todas las órdenes hechas por el empleado King Robert

SELECT *
FROM Orders O
JOIN Employees E ON O.EmployeeID = E.EmployeeID
WHERE E.FirstName = 'Robert' AND E.LastName = 'King';

-- Pregunta 35: Obtener todas las órdenes por el cliente cuya compañía es "Que delicia"
SELECT *
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
WHERE C.CustomerName = 'Que delicia';

-- Pregunta 36: Obtener todas las órdenes hechas por el empleado King Robert,
-- Davolio Nancy y Fuller Andrew

SELECT *
FROM Orders O
JOIN Employees E ON O.EmployeeID = E.EmployeeID
WHERE (E.FirstName = 'Robert' AND E.LastName = 'King')
   OR (E.FirstName = 'Nancy' AND E.LastName = 'Davolio')
   OR (E.FirstName = 'Andrew' AND E.LastName = 'Fuller');


-- Pregunta 37: Obtener todos los productos (código, nombre, precio, stock) de la orden 10257

SELECT P.ProductID, P.ProductName, P.Price, P.UnitsInStock
FROM OrderDetails OD
JOIN Products P ON OD.ProductID = P.ProductID
WHERE OD.OrderID = 10257;


-- Pregunta 38: Obtener todos los productos (código, nombre, precio, stock) 
-- de las órdenes hechas desde 1997 hasta hoy
SELECT * from products;
SELECT  P.ProductID, P.ProductName, P.Price,P.Unit
FROM Orders O
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID
WHERE O.OrderDate >= '1997-01-01';

-- Pregunta 39: Calcular los 15 productos más caros

SELECT * FROM Products
ORDER BY Price DESC
LIMIT 15;

-- Pregunta 40: Calcular los 5 productos más baratos

SELECT * FROM Products
ORDER BY Price ASC
LIMIT 5;

-- Pregunta 41: Obtener el nombre de todas las categorías y los nombres de sus productos, precio y stock

SELECT C.CategoryName, P.ProductName, P.Price, P.UnitsInStock
FROM Categories C
JOIN Products P ON C.CategoryID = P.CategoryID;

-- Pregunta 42: Obtener el nombre de todas las categorías y los nombres de sus productos, solo los productos que no comienzan con la letra P
SELECT C.CategoryName, P.ProductName
FROM Categories C
JOIN Products P ON C.CategoryID = P.CategoryID
WHERE P.ProductName NOT LIKE 'P%';

-- Pregunta 43: Calcular el stock de productos por cada categoría. Mostrar el nombre de la categoría y el stock por categoría

SELECT C.CategoryName, SUM(P.UnitsInStock) AS StockTotal
FROM Categories C
JOIN Products P ON C.CategoryID = P.CategoryID
GROUP BY C.CategoryName;

-- Pregunta 44: Obtener el nombre del cliente, nombre del proveedor, nombre del empleado y el nombre de los productos que están en la orden 10794



SELECT C.CustomerName, S.SupplierName, CONCAT(E.FirstName, ' ', E.LastName) AS NombreEmpleado, P.ProductName
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN Employees E ON O.EmployeeID = E.EmployeeID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID
JOIN Suppliers S ON P.SupplierID = S.SupplierID
WHERE O.OrderID = 10794;



-- Pregunta 45: Mostrar el número de órdenes de cada uno de los clientes por año, luego ordenar por código del cliente y el año


SELECT C.CustomerID, YEAR(O.OrderDate) AS Anio, COUNT(O.OrderID) AS TotalOrdenes
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
GROUP BY C.CustomerID, Anio
ORDER BY C.CustomerID, Anio;

-- Pregunta 46: Contar el número de órdenes que se han realizado por años y meses, luego ordenado por año y mes

SELECT YEAR(OrderDate) AS Anio, MONTH(OrderDate) AS Mes, COUNT(OrderID) AS TotalOrdenes
FROM Orders
GROUP BY Anio, Mes
ORDER BY Anio, Mes;

-- Pregunta 47: Seleccionar nombre de compañía del cliente, código de orden, fecha, código del producto, cantidad pedida, nombre del producto, nombre del proveedor y ciudad del proveedor
SELECT C.CustomerName, O.OrderID, O.OrderDate, OD.ProductID, OD.Quantity, P.ProductName, S.SupplierName, S.City
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID
JOIN Suppliers S ON P.SupplierID = S.SupplierID;

-- Pregunta 48: Seleccionar nombre de la compañía del cliente, contacto, código de orden, fecha, código del producto, cantidad, nombre del producto, nombre de proveedor
-- Solo proveedores con nombres que comienzan de A a G y cantidades entre 23 y 187



SELECT C.CustomerName, C.ContactName, O.OrderID, O.OrderDate, OD.ProductID, OD.Quantity, P.ProductName, S.SupplierName
FROM Orders O
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID
JOIN Suppliers S ON P.SupplierID = S.SupplierID
WHERE S.SupplierName BETWEEN 'A' AND 'G'
  AND OD.Quantity BETWEEN 23 AND 187;

