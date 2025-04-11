call crud_raza(2,'Collie',null, null,7);
call crud_raza(3,'Rottweiler',null, 3, 7); 
call crud_raza(4, null, null, 4, 1);

select * from tbl_raza_audit;
delete from tbl_raza where id=6;
select * from tbl_raza;