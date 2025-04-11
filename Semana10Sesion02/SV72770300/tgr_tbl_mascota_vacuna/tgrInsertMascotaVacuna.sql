DELIMITER $$
drop trigger if exists tgrInsertMascotaVacuna;
create trigger tgrInsertMascotaVacuna after insert on tbl_mascota_vacuna
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
	new.id,
    new.id_mascota,
    new.id_vacuna,
    new.fecha_aplicacion,
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