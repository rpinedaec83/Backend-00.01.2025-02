call crud_sexo(2,'No especificado',null, null, 8);
call crud_sexo(3,'Hembra',null, 2, 7); 
call crud_sexo(3,'Macho',null, 1, 1); 
call crud_sexo(4, null, null, 4, 1);
call crud_sexo(4, null, null, 5, 8);

select * from tbl_sexo_audit;
delete from tbl_sexo where id=4;
select * from tbl_sexo;