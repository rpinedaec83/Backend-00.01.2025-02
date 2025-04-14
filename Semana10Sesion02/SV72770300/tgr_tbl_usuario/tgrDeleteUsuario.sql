DELIMITER $$
 drop trigger if exists tgrDeleteUsuario;
create trigger tgrDeleteUsuario after delete on tbl_usuario
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
	old.id,
    old.username,
    old.password,
    old.email,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'D',
    current_user()
);

end

$$

delimiter ;