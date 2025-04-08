DELIMITER //

CREATE FUNCTION saludar(nombre varchar(100), apellido varchar(100), email varchar (100)) returns varchar(150) deterministic
BEGIN
	DECLARE nombre_completo varchar(200);
    SET nombre_completo = concat(nombre, ' ', apellido);
    if email is not null then
     return concat('Bienvenido ', nombre_completo);
	else
		return 'Aun no tiene email';
    end if; 
END//