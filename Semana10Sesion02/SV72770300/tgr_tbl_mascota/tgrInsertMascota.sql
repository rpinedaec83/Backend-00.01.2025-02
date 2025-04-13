DELIMITER $$
drop trigger if exists tgrInsertMascota;
create trigger tgrInsertMascota after insert on tbl_mascota
for each row
begin
	INSERT INTO tbl_mascota_audit
(`id`,
`nombre`,
`fecha_nacimiento`,
`peso`,
`id_especie`,
`id_raza`,
`id_color`,
`id_sexo`,
`id_propietario`,
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
    new.fecha_nacimiento,
    new.peso,
    new.id_especie,
    new.id_raza,
    new.id_color,
    new.id_sexo,
    new.id_propietario,
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