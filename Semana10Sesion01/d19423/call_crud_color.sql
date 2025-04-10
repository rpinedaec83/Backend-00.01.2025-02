call crud_color(1,null,null,null,null);
call crud_color(2,'Chocolate',null, null,1);
call crud_color(3,'Cafe',null, 5, 1); 
call crud_color(3,null,0, 5, 1); 
call crud_color(4,null,null, 4,1);


select now();
select saludar('Roberto','Pineda',null);
select saludar('Roberto','Pineda','rpineda@x-codec.net');


select * from tbl_mascota;
select * from tbl_color;

insert into tbl_mascota(nombre,fecha_nacimiento,peso,id_especie, id_raza, id_color,id_sexo,id_propietario,usuario_creacion)
values('Selina Kyle','2022-05-20', 5.55, 1,1,5,1,1,1);

select * from tbl_mascota m 
inner join tbl_color c on m.id_color = c.id;

delete from tbl_color where id = 5;

>>>>>>>>> Temporary merge branch 2
