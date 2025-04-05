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