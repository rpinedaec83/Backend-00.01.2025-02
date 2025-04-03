-- DDL Data Definition Language;

-- create database MiPrimerabase;
-- drop database MiPrimerabase;

create database MiPrimeraBase;
use MiPrimeraBase;

create table MiPrimeraTabla(
	id int primary key
);

drop table MiPrimeraTabla;

alter table MiPrimeraTabla add column descr varchar(50) not null;

alter table MiPrimeraTabla drop column descr;