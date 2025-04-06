-- #Ejercicio . Descripcion -- 
-- E1. Seleccionar los clientes que viven en el país de "usa"
	Select * from Customers where Country = 'USA';
    
-- E2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
	SELECT SupplierName, Country FROM Suppliers 
    WHERE Country = 'BERLIN';

-- E3.  Seleccionar los empleados con código 3,5 y 8
    SELECT EmployeeID, CONCAT(FirstName,' ',LastName) AS Nombre FROM Employees
    WHERE EmployeeID IN (3,5,8) ;

-- E4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
    SELECT ProductName, SupplierID, Unit FROM Products
    WHERE Unit > 0 AND SupplierID IN (1,3,5);

-- E5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
    SELECT ProductName, Price FROM Products
    WHERE Price >= 20 AND Price <= 90;

-- E6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
    SELECT OrderID, OrderDate FROM Orders
    WHERE OrderDate BETWEEN '1997-01-01' AND '1997-07-15'
    ORDER BY OrderDate ASC;
    
-- E7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
    SELECT OrderID, EmployeeID, OrderDate FROM Orders
    WHERE YEAR(OrderDAte) = 1997 AND EmployeeID IN (1,3,4,8);

-- E8.  Mostrar las ordenes hechas en el año 1996
    SELECT OrderID, OrderDate FROM Orders
    WHERE YEAR(OrderDate)='1996';

-- E9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
    SELECT OrderID, OrderDate FROM Orders
    WHERE YEAR(OrderDate)= '1997' AND MONTH(OrderDate) = '4';

-- E10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
	SELECT OrderID, OrderDate FROM Orders
    WHERE YEAR(OrderDate)='1998' AND DAY(OrderDate)='1';

-- E11. Mostrar todos los clientes que no tienen fax
    SELECT CustomerName,PostalCode FROM Customers
    WHERE PostalCode = '' OR PostalCode IS NULL; 	-- Como no hay columna Fax, hice los que no tiene PostalCode

-- E12. Mostrar todos los clientes que tienen fax
    SELECT CustomerName,PostalCode FROM Customers
    WHERE PostalCode <> '' AND PostalCode IS NOT NULL;	-- Como no hay columna Fax, hice los que tiene PostalCode

-- E13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
    SELECT p.ProductName, p.Price, p.Unit, c.CategoryName
    FROM Products p -- Reemplaza Products por p, y Categories por c
    INNER JOIN Categories c ON p.CategoryID = c.CategoryID;

-- E14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
    SELECT p.ProductName, p.Price, p.SupplierID, s.SupplierName
    FROM Products p -- Reemplaza Products por p, y Supplier por s
    INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID;

-- E15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
    SELECT od.OrderID, od.ProductID, p.Price ,od.Quantity , ( p.Price*od.Quantity) AS Importe
    FROM OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID;

-- E16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
    SELECT od.OrderID, o.OrderDate, od.ProductID, p.Price, e.EmployeeID, CONCAT(e.LastName,',',e.FirstName)  AS 'Nombre Completo'
    FROM OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID
    INNER JOIN Orders o ON od.OrderID = o.OrderID
    INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID;

-- E17. Mostrar los 10 productos con menor stock
    SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Unit FROM Products
    ORDER BY Unit ASC
    LIMIT 10;

-- E18. Mostrar los 10 productos con mayor stock
   SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Unit FROM Products
    ORDER BY Unit DESC
    LIMIT 10;

-- E19. Mostrar los 10 productos con menor precio
    SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Price FROM Products
    ORDER BY Price ASC
    LIMIT 10;

-- E20. Mostrar los 10 productos con mayor precio
    SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Price FROM Products
    ORDER BY Price DESC
    LIMIT 10;

-- E21. Mostrar los 10 productos más baratos
    SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Price FROM Products
    ORDER BY Price ASC
    LIMIT 10;

-- E22. Mostrar los 10 productos más caros
    SELECT ROW_NUMBER() OVER () AS Puesto,ProductName, Price FROM Products
    ORDER BY Price DESC
    LIMIT 10;

-- E23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
    SELECT * FROM Customers
    ORDER BY CustomerName;

-- E24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
    SELECT * FROM Customers
    WHERE CustomerName LIKE 'B%' AND Country = 'UK'
	ORDER BY CustomerName;

-- E25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
    SELECT * FROM Products
    WHERE CategoryID IN (1,3,5)
    ORDER BY CategoryID;

-- E26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
    SELECT ProductName, Price FROM Products
    WHERE Price BETWEEN 50 AND 200
    ORDER BY Price ASC;
												
-- E27. Visualizar el nombre y el id de la compania  del cliente,fecha,precio unitario y producto de la orden
    SELECT c.CustomerName, c.CustomerID, o.OrderDate, p.Price, p.ProductName
    FROM OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID
    INNER JOIN Orders o ON od.OrderID = o.OrderID
    INNER JOIN Customers c ON o.CustomerID = c.CustomerID
    ORDER BY c.CustomerID;
	
-- E28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
	SELECT c.CategoryName, COUNT(p.ProductID) AS 'Numero de Productos'
	FROM Categories c
	INNER JOIN Products p ON c.CategoryID = p.CategoryID
	GROUP BY c.CategoryID;

-- E29. Seleccionar los 5 productos mas vendidos
    SELECT p.ProductName, SUM(od.Quantity) AS 'Cantidad Vendida'
    FROM OrderDetails od
    INNER JOIN Products p ON od.ProductID = p.ProductID
    GROUP BY p.ProductName
    ORDER BY SUM(od.Quantity) DESC
    LIMIT 5;
    
-- E30. Seleccionar los jefes de los empleados
    SELECT CONCAT(FirstName,' ',LastName) AS Jefe, Notes FROM Employees
    WHERE Notes LIKE '%promoted%';

-- E31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
    SELECT ProductName, Price FROM Products
    WHERE ProductName LIKE 'M%' AND Price BETWEEN 28 AND 129
    ORDER BY Price;

-- E32. Obtener todos los clientes del Pais de USA,Francia y UK
    SELECT CustomerName, Country FROM Customers
    WHERE Country IN ('USA','Francia','UK')
    ORDER BY CustomerName;

-- E33. Obtener todos los productos descontinuados o con stock cero.
    SELECT ProductName, Unit FROM Products
    WHERE Unit = '' OR Unit IS NULL;

-- E34. Obtener todas las ordenes hechas por el empleado King Robert
    SELECT CONCAT(e.LastName,' ',e.FirstName) AS Empleado, e.EmployeeID, o.OrderID, o.OrderDate 
    FROM Orders o 
    INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
    WHERE e.EmployeeID = 7;

-- E35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
    SELECT c.CustomerName,o.CustomerID, o.OrderID, o.OrderDate 
    FROM Orders o
    INNER JOIN Customers c ON o.CustomerID = c.CustomerID
    WHERE c.CustomerID = 61;

-- E36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
    SELECT CONCAT(e.LastName,' ',e.FirstName) AS Empleado, e.EmployeeID, o.OrderID, o.OrderDate 
    FROM Orders o 
    INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
    WHERE e.EmployeeID IN (7,1,2);

-- E37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
    SELECT o.OrderID, p.ProductID, p.ProductName, p.Price, p.Unit
    FROM Orders o
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
    WHERE o.OrderID = '10257';

-- E38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
    SELECT o.OrderID, p.ProductID, p.ProductName, p.Price, p.Unit
    FROM Orders o
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
    WHERE o.OrderDate BETWEEN '1997-01-01' AND CURRENT_DATE;
    
-- E39. Calcular los 15 productos mas caros
	SELECT ProductID, ProductName, Price
	FROM Products
	ORDER BY Price DESC
	LIMIT 15;

-- E40. Calcular los 5 productos mas baratos
	SELECT ProductID, ProductName, Price
	FROM Products
	ORDER BY Price ASC
	LIMIT 5;

-- E41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
    SELECT c.CategoryName, p.ProductName, p.Price, p.Unit
    FROM Products p 
    INNER JOIN Categories c ON p.CategoryID = c.CategoryID
    ORDER BY c.CategoryName;

-- E42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
   SELECT c.CategoryName, p.ProductName, p.Price, p.Unit
    FROM Products p 
    INNER JOIN Categories c ON p.CategoryID = c.CategoryID
    WHERE p.ProductName LIKE 'P%'
    ORDER BY c.CategoryName;

-- E43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
	SELECT c.CategoryName, SUM(p.Unit) AS Stock
    FROM Products p 
    INNER JOIN Categories c ON p.CategoryID = c.CategoryID
    GROUP BY c.CategoryName;

-- E44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
	SELECT c.CustomerName, s.SupplierName, e.FirstName, p.ProductName
	FROM Orders o
	INNER JOIN Customers c ON o.CustomerID = c.CustomerID
	INNER JOIN Employees e ON o.EmployeeID = e.EmployeeID
	INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
	INNER JOIN Products p ON od.ProductID = p.ProductID
	INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID
	WHERE o.OrderID = '10794';
	
-- E45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
	SELECT CustomerID, YEAR(OrderDate) AS Año, COUNT(OrderID) AS 'Total Ordenes'
	FROM Orders
	GROUP BY CustomerID, YEAR(OrderDate)
	ORDER BY CustomerID, Año;

-- E46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
	SELECT YEAR(OrderDate) AS Año, MONTH(OrderDate) AS Mes, COUNT(OrderID) AS 'Total Ordenes'
	FROM Orders
	GROUP BY YEAR(OrderDate), MONTH(OrderDate)
	ORDER BY Año, Mes;
    
-- E47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
	SELECT c.CustomerName, o.OrderID, o.OrderDate, p.ProductID, od.Quantity, p.ProductName, s.SupplierName, s.City
	FROM Orders o
	INNER JOIN Customers c ON o.CustomerID = c.CustomerID
	INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
	INNER JOIN Products p ON od.ProductID = p.ProductID
	INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID;
    
-- E48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

	-- Revisado
	SELECT c.CustomerName, c.ContactName, o.OrderID, o.OrderDate, p.ProductID, od.Quantity, p.ProductName, s.SupplierName
	FROM Orders o
	INNER JOIN Customers c ON o.CustomerID = c.CustomerID
	INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
	INNER JOIN Products p ON od.ProductID = p.ProductID
	INNER JOIN Suppliers s ON p.SupplierID = s.SupplierID
	WHERE s.SupplierName >= 'A' AND s.SupplierName < 'H' AND od.Quantity BETWEEN 23 AND 187;
