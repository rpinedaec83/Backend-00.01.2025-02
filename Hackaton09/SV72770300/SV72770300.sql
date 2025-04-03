Use northwind;

-- Ejercicio 01
-- Seleccionar los clientes que viven en el país de "usa"

	select * from customers;
    
    select * from customers where Country = 'USA';
	
-- Ejercicio 02
-- Seleccionar los proveedores que viven en la ciudad de "BERLIN"
	
    select * from suppliers;
    
    select * from suppliers where City = 'BERLIN';
    
-- Ejercicio 03
-- Seleccionar los empleados con código 3,5 y 8

	select * from employees;
    
    select * from employees where EmployeeID in (3, 5, 8);
    
-- Ejercicio 04
-- Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5

	select * from products;
    
	select 
		p.ProductID,
		p.ProductName,
        p.unit,
        s.SupplierID,
        s.SupplierName
    from products as p 
    inner join suppliers as s on p.SupplierID = s.SupplierID
    where p.unit <> 0 and p.SupplierID in(1,3,5);
    
-- Ejercicio 05
-- Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90

	select * from products;
    select * from products where price >= 20 and price <= 90; 
    
-- Ejercicio 06
-- Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
	
	select * from orders;
    select * from orders where OrderDate between '1997-01-01' and '1997-07-15';

-- Ejercicio 07
-- Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
	
    select * from orders;
    
    select 
		o.OrderID,
        o.EmployeeID,
        e.FirstName,
        e.LastName
	from orders as o 
    inner join employees as e on o.EmployeeID = e.EmployeeID
    where o.EmployeeID in(1,3,4,8);
    
-- Ejercicio 08
-- Mostrar las ordenes hechas en el año 1996

	select * from orders;
    select * from orders where OrderDate like '1996%';

-- Ejercicio 09
-- Mostrar las ordenes hechas en el año 1996, del mes de julio
-- Las ordenes del año 1997, del mes de abril no existen en la tabla "orders"

	select * from orders;
	select * from orders where OrderDate like '1996_07%';

-- Ejercicio 10
-- Mostrar las ordenes hechas el primero de todos los meses, del año 1997
-- Las ordenes hechas el primero de todos los meses, del año 1998 no existen en la tabla "orders"

	select * from orders;
    select * from orders where OrderDate like '1997-__-01%'