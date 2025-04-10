call crud_color(2,'Chocolate',null, null,1);
call crud_color(3,'Chocolate Blanco',0, 7, 1); 

select * from tbl_color_audit;
delete from tbl_color where id=7;
select * from tbl_color;

select * from vw_info_mascota;