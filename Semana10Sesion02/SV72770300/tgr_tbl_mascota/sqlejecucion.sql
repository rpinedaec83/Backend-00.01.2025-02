call crud_mascota(2,'Laika', null, 1.56, 2, 1, 2, 2, 5, null, null, 1);
call crud_mascota(2,'Chita', '2024-06-23', 3.74, 2, 4, 2, 1, 2, null, null, 7);
call crud_mascota(3, null, '2022-11-14', null, null, null, null, null, null, null, 6, 8);
call crud_mascota(3, null, null, 3.40, null, null, 1, null, null, null, 8, 1);
call crud_mascota(4, null, null, null, null, null, null, null, null, null, 3, 8);
call crud_mascota(4, null, null, null, null, null, null, null, null, null, 6, 1);

select * from tbl_mascota_audit;
delete from tbl_mascota where id=6;
select * from tbl_mascota;