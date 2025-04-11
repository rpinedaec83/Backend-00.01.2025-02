call crud_especie(2,'Marinos',null, null,1);
call crud_especie(3,'Reptil',null, 4, 1); 
call crud_especie(4, null, null, 3, 1);

select * from tbl_especie_audit;
delete from tbl_especie where id=6;
select * from tbl_especie;