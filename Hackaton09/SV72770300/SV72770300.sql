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

-- Ejercicio 21
-- Mostrar los 10 productos más baratos

	select * from product;
    select * from product order by unitPrice asc
    limit 10;
    
-- Ejercicio 22
-- Mostrar los 10 productos más caros

	select * from product;
    select * from product order by unitPrice desc
    limit 10;
    
-- Ejercicio 23
-- Seleccionar todos los campos de la tabla clientes, ordenar por compania.

	select * from customer;
    select * from customer 
    order by companyName;
    
-- Ejercicio 24
-- Seleccionar todos los campos de clientes, cuya compania empiece con la letra C y pertenezcan a UK, ordenar por nombre de la compania. 
    
	select * from customer;
    select * from customer 
    where companyName like 'C%' and Country = 'UK'
    order by companyName;
    
-- Ejercicio 25
-- Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria. 
    
    select * from product, category;
    select
		p.ProductId,
        p.ProductName,
        p.CategoryId,
        c.CategoryName
	from product as p 
    inner join category as c on c.CategoryId = p.CategoryId
    where p.CategoryId in(1,3,5) order by p.CategoryId;
    
-- Ejercicio 26
-- Seleccionar los productos cuyos precios unitarios estén entre 50 y 200.

	select * from product;
    select * from product
    where unitPrice between 50 and 200;
    
-- Ejercicio 27
-- Visualizar el nombre y el id de la compania del cliente, fecha, precio unitario y producto de la orden.
    
    select * from orderdetail, salesorder, product, customer;
    select * from customer;
    select 
		o.custId,
        c.CompanyName,
        o.OrderDate,
        p.unitPrice,
        p.ProductName
	from orderdetail as od
    inner join salesorder as o on o.OrderId = od.OrderId
    inner join product as p on p.ProductId = od.ProductId
    inner join customer as c on c.custId = o.custId;
    
-- Ejercicio 28
-- Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

	select * from product, category;
    select 
		c.CategoryName,
        count(p.CategoryId) as 'Cantidad de Productos'
	from category as c
    inner join product as p on p.CategoryId = c.CategoryId 
    group by c.CategoryName;
    
-- Ejercicio 29
-- Seleccionar los 5 productos mas vendidos.

	select * from product;
    select * from orderdetail;
    
    select 
		od.ProductId,
		p.ProductName,
        sum(od.Quantity) as Total
	from orderdetail as od
    inner join product as p on p.ProductId = od.ProductId
    group by od.ProductId
    order by Total desc
    limit 5;
        
-- Ejercicio 30
-- Seleccionar los jefes de los empleados.

	select e.employeeId, concat(e.firstname,' ',e.lastname) as employeeName, 
    e.mgrId,
    concat(m.firstName, ' ',m.lastname) as managmentName
    from employee as e
    left join employee as m
    on e.mgrId = e.employeeId;

-- Ejercicio 31
-- Obtener todos los productos cuyo nombre comienzan con C y tienen un precio comprendido entre 28 y 81.

	select * from product;
    select * from product 
    where ProductName like 'Product_C%' and (unitPrice between 28 and 81);
    
-- Ejercicio 32
-- Obtener todos los clientes del Pais de USA,Francia y UK.

	select * from customer;
    select * from customer 
    where Country in('USA','France','UK');
    
-- Ejercicio 33
-- Obtener todos los productos descontinuados o con stock cero.

	select * from product;
	select * from product 
    where discontinued = true;
    
-- Ejercicio 34
-- Obtener todas las ordenes hechas por el empleado King Russell.

	select * from salesorder, employee;

	select 
		o.OrderId,
        concat(e.LastName, ' ' ,e.FirstName) as Employee
	from salesorder as o
    inner join employee as e on e.EmployeeId = o.EmployeeId
    where concat(e.LastName, ' ' ,e.FirstName) like 'King Russell';
    
-- Ejercicio 35
-- Obtener todas las ordenes por el cliente cuya compania es "Customer MLTDN".

	select * from salesorder, customer;

    select 
		o.orderId,
        c.CompanyName
	from salesorder as o
    inner join customer as c on c.custId = o.custId
    where c.CompanyName = 'Customer MLTDN';
    
-- Ejercicio 36
-- Obtener todas las ordenes hechas por el empleado King Russell, Lew Judy y Davis Sara.

	select * from employee;

	select 
		o.OrderId,
        concat(e.LastName, ' ' ,e.FirstName) as Employee
	from salesorder as o
    inner join employee as e on e.EmployeeId = o.EmployeeId
    where concat(e.LastName, ' ' ,e.FirstName) in('King Russell', 'Lew Judy', 'Davis Sara');
    
-- Ejercicio 37
-- Obtener todos los productos(codigo, nombre, precio, stock) de la orden 10257.
	
    select * from product;
    select * from orderdetail;
    
    select 
		od.ProductId,
        p.ProductName,
        p.unitPrice,
        p.unitsInStock
	from orderdetail as od
    inner join product as p on p.ProductId = od.ProductId
    where od.OrderId = 10257;
    
-- Ejercicio 38
-- Obtener todos los productos(codigo, nombre, precio, stock) de las ordenes hechas desde 2007 hasta la fecha de hoy.   
        
    select * from orderdetail, salesorder, product;
    
    select 
		od.ProductId,
        p.ProductName,
        p.unitPrice,
        p.UnitsInStock
	from orderdetail as od
    inner join product as p on p.ProductId = od.ProductId
    inner join salesorder as o on o.OrderId = od.OrderId
    where o.OrderDate between '2007-01-01' and curdate(); -- current_date();
    
-- Ejercicio 39
-- Calcular los 15 productos mas caros. 

	select * from product;
    select * from product order by unitPrice desc
    limit 15;
    
-- Ejercicio 40
-- Calcular los 5 productos mas baratos.

	select * from product;
    select * from product order by unitPrice asc
    limit 5;
    
-- Ejercicio 41
-- Obtener el nombre de todas las categorias y los nombres de sus productos, precio y stock.

	select * from product, category;
    
    select 
		c.CategoryName,
        p.ProductName,
        p.unitPrice,
        p.unitsInStock
	from product as p
    inner join category as c on c.CategoryId = p.CategoryId;
    
-- Ejercicio 42
-- Obtener el nombre de todas las categorias y los nombres de sus productos, solo los productos que su nombre no comience con la letra Q.

	select * from product, category;
    
    select 
		c.CategoryName,
        p.ProductName
	from product as p
    inner join category as c on c.CategoryId = p.CategoryId
    where p.ProductName not like 'Product_Q%';
    
-- Ejercicio 43
-- Calcular el stock de productos por cada categoria. Mostrar el nombre de la categoria y el stock por categoria.
	
    select * from product, categoryy;
    
    select 
		c.CategoryName,
        sum(p.unitsInStock) as 'Stock Productos'
	from product as p
    inner join category as c on c.CategoryId = p.CategoryId
    group by p.CategoryId;
    
-- Ejercicio 44
-- Obtener el Nombre del cliente, Nombre del Proveedor, Nombre del empleado y el nombre de los productos que estan en la orden 10248.

	select * from salesorder;
    select * from orderdetail;
    select * from product;
    select * from customer;
    select * from employee;
    
    select 
		c.contactName as 'Nombre del Cliente',
        r.contactName as 'Nombre del Proveedor',
        concat(e.LastName, ', ',e.FirstName) as 'Nombre del Empleado',
        p.ProductName as 'Nombre del Producto'
	from orderdetail as od
    inner join salesorder as o on o.OrderId = od.OrderId
    inner join product as p on p.ProductId = od.ProductId
    inner join customer as c on c.custId = o.custId
    inner join supplier as r on r.SupplierId = p.SupplierId
    inner join employee as e on e.EmployeeId = o.EmployeeId
    where od.OrderId = 10248;
    
-- Ejercicio 45
-- Mostrar el numero de ordenes de cada uno de los clientes por año, luego ordenar codigo del cliente y el año.
	
    select * from salesorder;
    select * from customer;
    
    select 
		count(o.custId) as 'Total Ordenes',
        o.custId,
        c.contactName,
        Year(o.OrderDate) as 'Año'
	from salesorder as o
    inner join customer as c on c.custId = o.custId
    group by o.custId, Year(o.OrderDate)
    order by Year(o.OrderDate), o.custId;
    
-- Ejercicio 46
-- Contar el numero de ordenes que se han realizado por años y meses, luego debe ser ordenado por año y por mes.
	
    select * from salesorder;
    select 
		count(OrderId) as 'Ordenes',
		Year(OrderDate) as 'Año',
        Month(OrderDate) as 'Mes'
	from salesorder
    group by Month(OrderDate), Year(OrderDate)
    order by Year(OrderDate), Month(OrderDate);
    
-- Ejercicio 47
-- Seleccionar el nombre de la compañía del cliente, él código de la orden de compra, la fecha de la orden de compra, 
-- código del producto, cantidad pedida del producto, nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor, usar Join.

	select * from customer;
    select * from salesorder; 
    select * from product;
    select * from orderdetail;
    select * from supplier;
    
	select 
		c.CompanyName as 'Compañía del Cliente',
        od.OrderId as 'Código Orden Compra',
        o.OrderDate as 'Fecha Orden Compra',
        od.ProductId as 'Código Producto',
        od.Quantity as 'Cantidad Pedida Producto',
        p.ProductName as 'Nombre Producto',
        s.CompanyName as 'Nombre Compañía Proveedora',
        s.City as 'Ciudad Proveedora'
	from orderdetail as od
    inner join salesorder as o on o.OrderId = od.OrderId
    inner join customer as c on c.custId = o.custId
    inner join product as p on p.ProductId = od.ProductId
    inner join supplier as s on s.SupplierId = p.SupplierId;

-- Ejercicio 48
-- Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,
-- cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usar JOIN. Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,
-- además la cantidad pedida del producto debe estar entre 23 y 187. 

	select * from customer;
    select * from salesorder; 
    select * from product;
    select * from orderdetail;
    select * from supplier;

	select 
		c.CompanyName as 'Compañía del Cliente',
        c.ContactName as 'Nombre Contacto Cliente',
        od.OrderId as 'Código Orden Compra',
        o.OrderDate as 'Fecha Orden Compra',
        od.ProductId as 'Código Producto',
        od.Quantity as 'Cantidad Pedida Producto',
        p.ProductName as 'Nombre Producto',
        s.CompanyName as 'Nombre Compañía Proveedora'
	from orderdetail as od
    inner join salesorder as o on o.OrderId = od.OrderId
    inner join customer as c on c.custId = o.custId
    inner join product as p on p.ProductId = od.ProductId
    inner join supplier as s on s.SupplierId = p.SupplierId
    where s.CompanyName regexp '^Supplier [A-Ga-g]' and (od.Quantity between 23 and 187);