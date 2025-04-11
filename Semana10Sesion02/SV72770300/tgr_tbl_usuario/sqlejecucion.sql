call crud_usuario(2, 'jusetlopez', 'lopez478&con', 'jusetlo@gmail.com', null, null, 8);
call crud_usuario(2, 'lizethparedes', 'paredliz478/%', 'lizp74@outlook.es', null, null, 1);
call crud_usuario(3, null, null, null, 1, 7, 1);
call crud_usuario(3, null, null, null, 1, 8, 1);
call crud_usuario(3, null, 'pardeslizlove', null, 1, 10, 10);
call crud_usuario(3, 'lopezjuset14', null, 'juslopez@gmail.com', 1, 9, 1);
call crud_usuario(4, null, null, null, null, 9, 1);
call crud_usuario(4, null, null, null, null, 7, 10);

select * from tbl_usuario_audit;
delete from tbl_usuario where id=11;
select * from tbl_usuario;