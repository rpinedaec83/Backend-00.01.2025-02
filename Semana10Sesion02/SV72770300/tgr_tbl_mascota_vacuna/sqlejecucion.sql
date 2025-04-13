call crud_mascota_vacuna(2, 4, 6, null, null, null, 7);
call crud_mascota_vacuna(2, 8, 3, null, null, null, 8);
call crud_mascota_vacuna(3, null, 4, null, null, 7, 1);
call crud_mascota_vacuna(3, 2, 1, null, null, 9, 7);
call crud_mascota_vacuna(4, null, null, null, null, 9, 1);
call crud_mascota_vacuna(4, null, null, null, null, 8, 7);

select * from tbl_mascota_vacuna_audit;
delete from tbl_mascota_vacuna where id=8;
select * from tbl_mascota_vacuna;