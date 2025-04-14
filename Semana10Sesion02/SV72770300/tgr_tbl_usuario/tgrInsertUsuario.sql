DELIMITER $$
drop trigger if exists tgrInsertUsuario;
create trigger tgrInsertUsuario after insert on tbl_usuario
for each row
begin
	INSERT INTO tbl_usuario_audit
(`id`,
`username`,
`password`,
`email`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	new.id,
    new.username,
    new.password,
    new.email,
    new.is_activo,
    new.usuario_creacion,
    new.fecha_creacion,
    new.usuario_modificacion,
    new.fecha_modificacion,
    'I',
    current_user()
);

end

$$

delimiter ;