call crud_vacuna(2,'leishmaniosis', '78456', null, null, 7);
call crud_vacuna(2,'Panleucopenia felina', '74850', null, null, 1);
call crud_vacuna(3,null, '78096', null, 6, 8);
call crud_vacuna(3, 'Distemper', null, null, 4, 7);
call crud_vacuna(3, 'Leishmaniosis', '74850', null, 5, 1);
call crud_vacuna(4, null, null, null, 4, 8);
call crud_vacuna(4, null, null, null, 6, 1);

select * from tbl_vacuna_audit;
delete from tbl_vacuna where id=5;
select * from tbl_vacuna;