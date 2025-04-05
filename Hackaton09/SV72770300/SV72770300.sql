Use northwind;

-- Ejercicio 01
-- Seleccionar los clientes que viven en el país de "usa".

	select * from customer;
    
    select * from customer 
    where Country = 'USA';
	
-- Ejercicio 02
-- Seleccionar los proveedores que viven en la ciudad de "BERLIN". No hay proveedores de la ciudad de "BERLIN".
	
    select * from supplier;
    
    select * from supplier 
    where City = 'Tokyo';
    
-- Ejercicio 03
-- Seleccionar los empleados con código 3,5 y 8.

	select * from employee;
    
    select * from employee 
    where EmployeeID in (3, 5, 8);
    
-- Ejercicio 04
-- Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5.

	select * from product;
    select * from supplier;
	select 
		p.ProductID,
		p.ProductName,
        p.unitsInStock,
        s.SupplierID,
        s.CompanyName
    from product as p 
    inner join supplier as s on s.SupplierID = p.SupplierID
    where p.unitsInStock > 0 and p.SupplierID in(1,3,5);
    
-- Ejercicio 05
-- Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90

	select * from product;
    select * from product
    where unitPrice >= 20 and unitPrice <= 90; 
    
-- Ejercicio 06
-- Mostrar las órdenes de compra entre las fechas 01/07/2006 al 25/10/2006
	
	select * from salesorder;
    select * from salesorder 
    where OrderDate between '2006-07-01' and '2006-10-25';

-- Ejercicio 07
-- Mostrar las órdenes de compra hechas en el año 2007, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
	
    select * from salesorder;
    select * from employee;
    
    select 
		o.OrderID,
        o.EmployeeID,
        e.FirstName,
        e.LastName
	from salesorder as o 
    inner join employee as e on o.EmployeeID = e.EmployeeID
    where o.EmployeeID in(1,3,4,8);
    
-- Ejercicio 08
-- Mostrar las ordenes hechas en el año 2006

	select * from salesorder;
    select * from salesorder 
    where OrderDate like '2006%';

-- Ejercicio 09
-- Mostrar las ordenes hechas en el año 2006, del mes de julio

	select * from salesorder;
	select * from salesorder 
    where OrderDate like '2006_07%';

-- Ejercicio 10
-- Mostrar las ordenes hechas el primero de todos los meses, del año 2008

	select * from salesorder;
    select * from salesorder 
    where OrderDate like '2008-__-01%';

-- Ejercicio 11
-- Mostrar todos los clientes que no tienen fax.

	select * from customer;
	select * from customer 
    where fax is null;
    
-- Ejercicio 12
-- Mostrar todos los clientes que tienen fax.

	select * from customer;
	select * from customer 
    where fax is not null;
    
-- Ejercicio 13
-- Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.

	select * from product, category;
    select 
        p.ProductName,
        p.unitPrice,
        p.unitsInStock,
        c.CategoryName
    from product as p
    inner join category as c on c.CategoryId = p.CategoryId;
    
-- Ejercicio 14
-- Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

	select * from product, supplier;
    select 
        p.ProductName,
        p.unitPrice,
        p.SupplierId,
        s.companyName
    from product as p
    inner join supplier as s on s.SupplierId = p.SupplierId;
    
-- Ejercicio 15
-- Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.

	select * from orderdetail, product;
    select 
		od.OrderId,
        od.ProductId,
        p.unitPrice,
        od.Quantity,
        od.unitPrice * od.Quantity as Total
	from orderdetail as od 
    inner join product as p on p.ProductId = od.ProductId;
    
-- Ejercicio 16
-- Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
    
    select * from orderdetail, salesorder, product, employee;

    select 
		od.OrderId,
        o.OrderDate,
        od.ProductId,
        p.unitPrice,
        o.EmployeeId,
        concat(e.FirstName, ' ',e.LastName) as 'Full Name'
	from orderdetail as od
    inner join salesorder as o on od.OrderId = o.OrderId
    inner join employee as e on e.EmployeeId = o.EmployeeId
    inner join product as p on p.ProductId = od.ProductId;
    
-- Ejercicio 17
-- Mostrar los 10 productos con menor stock

	select * from product;
    select * from product order by unitsInStock asc
    limit 10;
    
-- Ejercicio 18 - Corregir
-- Mostrar los 10 productos con mayor stock
    
	select * from product;
    select * from product order by unitsInStock desc
    limit 10;
    
-- Ejercicio 19
-- Mostrar los 10 productos con menor precio

	select * from product;
    select * from product order by unitPrice asc
    limit 10;
    
-- Ejercicio 20
-- Mostrar los 10 productos con mayor precio

    select * from product;
    select * from product order by unitPrice desc
    limit 10;