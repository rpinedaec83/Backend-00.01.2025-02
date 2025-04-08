-- CRUD
-- Create
-- Read
-- Update
-- Delete

use Northwind;

select * from Customers;

select CustomerName, Address from Customers;

select 
	CustomerName as 'Nombre del Cliente',
    address as Direccion
from Customers;


Select * from Customers
where Country  = 'Mexico';

Select * from Customers
where Country  <> 'Mexico';

SELECT * FROM Customers
WHERE CustomerID=1;

SELECT * FROM Customers
WHERE CustomerID >= 80;


Select * from Orders
where OrderDate > '1996-06-30' and OrderDate < '1996-08-01';

Select * from Orders
where OrderDate between '1996-07-01' and '1996-07-31'
and EmployeeId in (3,4);

Select * from Orders
where OrderDate between '1996-07-01' and '1996-07-31'
and EmployeeId in (3,4)
order by CustomerId desc, EmployeeId;


select 
	CustomerName as 'Nombre del Cliente',
    address as Direccion
from Customers
order by Address desc;


select * from Products
order by Price desc
limit 5;


Select * from Products, Categories;


Select 
	P.ProductId,
    p.ProductName,
    p.Price,
    C.categoryName
 from Products P 
inner join Categories C on P.CategoryID = C.CategoryID
where ProductName like '%ed%';


SELECT * FROM Customers
WHERE City LIKE 'L___on';


Select count(*) from Products;
Select Max(Price) from Products;
Select min(Price) from Products;
Select sum(Price) from Products;
Select avg(Price) from Products;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) < 5;

