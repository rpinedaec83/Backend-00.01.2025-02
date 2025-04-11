DELIMITER $$
drop trigger if exists tgrInsertPropietario;
create trigger tgrInsertPropietario after insert on tbl_propietario
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
	new.id,
    new.nombre,
    new.apellido,
    new.documento,
    new.direccion,
    new.telefono,
    new.id_nacionalidad,
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
