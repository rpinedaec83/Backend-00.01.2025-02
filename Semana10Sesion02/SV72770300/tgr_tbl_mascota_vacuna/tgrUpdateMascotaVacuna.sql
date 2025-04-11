DELIMITER $$
 drop trigger if exists tgrUpdateMascotaVacuna;
create trigger tgrUpdateMascotaVacuna after update on tbl_mascota_vacuna
for each row
begin
	INSERT INTO tbl_mascota_vacuna_audit
(`id`,
`id_mascota`,
`id_vacuna`,
`fecha_aplicacion`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.id_mascota,
    old.id_vacuna,
    old.fecha_aplicacion,
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