call crud_propietario(2,'Enrique Erick', 'Lezama Gómez', '45896258', 'Av. San Nicolas Cdra. 15', '978456231', 6, null, null, 7);
call crud_propietario(2,'Juana Miriam', 'Beltrán Rodríguez', '78945862', 'Jr. Francisco Pizarro N° 874', '941236874', 1, null, null, 8);
call crud_propietario(3,'Juana Casandra', null, null, null, '941587426', null, null, 6, 7);
call crud_propietario(3, null, 'Montalbán Gómez', null, null, null, 3, null, 5, 1);
call crud_propietario(4, null, null, null, null, null, null, null, 4, 8);
call crud_propietario(4, null, null, null, null, null, null, null, 2, 7);

select * from tbl_propietario_audit;
delete from tbl_propietario where id=3;
select * from tbl_propietario;