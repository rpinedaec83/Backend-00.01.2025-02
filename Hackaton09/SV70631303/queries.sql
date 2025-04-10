-- 1.  Seleccionar los clientes que viven en el país de "usa"

select * from customer
where country = 'USA';

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"

select * from customer
where city = 'Berlin';

-- 3.  Seleccionar los empleados con código 3,5 y 8

select * from customer
where custId = 3 or custId = 5 or custId = 8;

-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5

select * from product
where unitsInStock >=0 and (supplierId in (1,3,5));

-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90

select * from product
where unitPrice >= 20 and unitPrice <= 90;

-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997

select * from salesorder
where orderDate between  '1997-01-01'and '1997-07-01';

-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8

select * from northwind.salesorder
where year(orderDate) = 1997 and (employeeId in (1, 3, 4, 8));

-- 8.  Mostrar las ordenes hechas en el año 1996

select * from salesorder 
where year(orderDate)= 1996;

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril

select * from salesorder
where year(orderDate) = 2006 and month(orderDate) = 4;

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998

select * from salesorder
where day(orderDate) = 1 and year(orderDate) = 1998;

-- 11. Mostrar todos los clientes que no tienen fax

select * from customer
where fax is null;

-- 12. Mostrar todos los clientes que tienen fax

select * from customer
where fax is not null;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.

SELECT unitPrice, unitsInStock, categoryName from product
inner join category
on category.categoryId = product.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

select p.productName, s.supplierId, s.companyName, p.unitPrice
from product p
right join supplier s
on s.supplierId = p.supplierId;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.

select orderId,productId,unitPrice,quantity,(unitPrice * quantity-discount) as totalPrice from orderdetail;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

select so.orderId,so.orderDate,
od.productId,od.unitPrice,
e.employeeId, e.firstname
from salesOrder so
inner join orderdetail od
on  so.orderId = od.orderId
inner join employee e
on so.employeeId = e.employeeId;

-- 17. Mostrar los 10 productos con menor stock

select * from product
order by unitsInStock asc
limit 10;

-- 18. Mostrar los 10 productos con mayor stock

select * from product
order by unitsInStock desc
limit 10;

-- 19. Mostrar los 10 productos con menor precio

select * from product
order by unitPrice asc
limit 10;

-- 20. Mostrar los 10 productos con mayor precio

select * from product
order by unitPrice desc
limit 10;

-- 21. Mostrar los 10 productos más baratos

select * from product
order by unitPrice asc
limit 10;

-- 22. Mostrar los 10 productos más caros

select * from product
order by unitPrice desc
limit 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania

select * from customer
order by companyName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania

select * from customer 
where companyName like 'B%' and country ='UK';

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria

select * from product
where categoryId in(1,3,5)
order by categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200

select * from product
where unitPrice between 50 and 200;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden

SELECT 
    cu.custId AS ID_Compania,
    cu.contactName AS Nombre_Cliente,
    o.orderDate AS Fecha_Orden,
    od.unitPrice AS Precio_Unitario,
    p.productName AS Producto
FROM 
    Customer cu
JOIN 
    SalesOrder o ON cu.custId = o.custId
JOIN 
    OrderDetail od ON o.orderId = od.orderId
JOIN 
    Product p ON od.productId = p.productId;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

SELECT 
    c.categoryName AS Nombre_Categoria,
    COUNT(p.productId) AS Numero_Productos
FROM 
    Category c
LEFT JOIN 
    Product p ON c.categoryId = p.categoryId
GROUP BY 
    c.categoryId, c.categoryName;

-- 29. Seleccionar los 5 productos mas vendidos

select  o.productId,p.productName, sum(o.quantity) as totalSold from  orderdetail o
inner join product p
on o.productId = p.productId
group by o.productId, p.productName
order by totalSold desc
limit 5;

-- 30. Seleccionar los jefes de los empleados

select e.employeeId,concat(e.firstname,' ',e.lastname) employeeName,
e.mgrId ,
concat(m.firstname,' ',m.lastname) manangerName
from employee e
left join employee m 
on e.mgrId = m.employeeId
;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129

select * from product
where productName like "Product M%" and unitPrice between 28 and 129;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK

select * from customer
where country in ('USA','France','UK');

-- 33. Obtener todos los productos descontinuados o con stock cero.

select * from product
where discontinued = 1 or unitsInStock = 0;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert

select * from employee;
select * from salesOrder so
inner join employee e
on so.employeeId = e.employeeId
where e.firstname='Robert' and e.lastname ='King';

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"

select so.* from salesorder so
inner join customer c on c.custId = so.custId
where c.companyName like "Que delicia";

-- 36. Obtener todas las ordenes hechas por el empleado King
--     Robert,Davolio Nancy y Fuller Andrew

select * from employee;
select so.*
from salesorder so
right join employee e
	on so.employeeId = e.employeeId
where (e.firstname like "Robert" and e.lastname like "King") or
	  (e.firstname like "Nancy" and e.lastname like "Davolio") or
      (e.firstname like "Andrew" and e.lastname like "Fuller");

-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden
--     10257

select p.productId, p.productName, p.unitPrice, p.unitsInStock
from orderdetail od
right join product p on p.productId = od.productId
where od.orderId = 10257;

-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.

select p.productId, p.productName,p.unitPrice, p.unitsInStock
from product p
inner join orderDetail od
on p.productId = od.productId
inner join salesOrder so
on od.orderId = so.orderId
where so.orderDate between '1997-01-01' and now();

-- 39. Calcular los 15 productos mas caros

select * from product
order by unitPrice desc
limit 15;

-- 40. Calcular los 5 productos mas baratos

select * from product
order by unitPrice asc
limit 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.

select c.categoryName, p.productName, p.unitPrice, p.unitsInStock from category c
right join product p on p.categoryId = c.categoryId;

-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra
--     P

select c.categoryName, p.productName from category c
right join product p on p.categoryId = c.categoryId
where p.productName not like "Product P%";

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.

select c.categoryName, sum(p.unitsInStock) as TotalStock from category c
right join product p on p.categoryId = c.categoryId
group by c.categoryId;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794

select c.companyName as customerName,
s.companyName as supplierName,
concat(e.firstname, ' ', e.lastName) as employeeName,
p.productName
from salesorder so
inner join customer c on so.custId= c.custId
inner join employee e on e.employeeId = so.employeeId
inner join orderdetail od on so.orderId = od.orderId
inner join product p on od.productId = od.productId
inner join supplier s on p.supplierId = s.supplierId
where so.orderId=10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.

SELECT 
    o.custId AS Codigo_Cliente,
    YEAR(o.orderDate) AS Anio,
    COUNT(o.orderId) AS Numero_Ordenes
FROM 
    salesorder o
GROUP BY 
    o.custId, YEAR(o.orderDate)
ORDER BY 
    o.custId, YEAR(o.orderDate);

-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.

select count(orderId) as count, year(orderDate) as year, month(orderDate) as month from salesorder
group by year(orderdate), month(orderDate)
order by year(orderdate), month(orderDate);

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

select c.companyName as customer_company, so.orderId,
so.orderDate, od.productId, od.quantity, p.productName,
s.companyName as supplier_company, s.city as supplier_city
from salesorder so
right join customer c
	on c.custId = so.custId
right join orderdetail od
	on od.orderId = so.orderId
right join product p
	on od.productId = p.productId
right join supplier s
	on s.supplierId = p.supplierId;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

select c.companyName as customerCompany,
c.contactName,
so.orderId,
so.orderDate,
p.productId,
od.quantity,
p.productName,
s.companyName  as supplierCompany
from salesorder so
inner join customer c on so.custId= c.custId
inner join orderdetail od on so.orderId = od.orderId
inner join product p on od.productId = od.productId
inner join supplier s on p.supplierId = s.supplierId
where left(s.companyName,1)  between 'A' and 'G' 
and  od.quantity between 23 and 187