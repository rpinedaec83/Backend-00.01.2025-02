DELIMITER $$
 drop trigger if exists tgrUpdateMascota;
create trigger tgrUpdateMascota after update on tbl_mascota
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
	old.id,
    old.nombre,
    old.fecha_nacimiento,
    old.peso,
    old.id_especie,
    old.id_raza,
    old.id_color,
    old.id_sexo,
    old.id_propietario,
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