call crud_nacionalidad(2,'Árabe', null, null, 7);
call crud_nacionalidad(2,'Argentino', null, null, 8);
call crud_nacionalidad(3,'Norte Americano', null, 4, 1); 
call crud_nacionalidad(4, null, null, 5, 8);
call crud_nacionalidad(4, null, null, 4, 7);

select * from tbl_nacionalidad_audit;
delete from tbl_nacionalidad where id=5;
select * from tbl_nacionalidad;