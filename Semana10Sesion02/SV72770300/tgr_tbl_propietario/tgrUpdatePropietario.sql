DELIMITER $$
 drop trigger if exists tgrUpdatePropietario;
create trigger tgrUpdatePropietario after update on tbl_propietario
for each row
begin
	INSERT INTO tbl_propietario_audit
(`id`,
`nombre`,
`apellido`,
`documento`,
`direccion`,
`telefono`,
`id_nacionalidad`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.nombre,
    old.apellido,
    old.documento,
    old.direccion,
    old.telefono,
    old.id_nacionalidad,
    old.is_activo,
    old.usuario_creacion,
    old.fecha_creacion,
    old.usuario_modificacion,
    old.fecha_modificacion,
    'U',
    current_user()
);

end

$$

delimiter ;