DELIMITER $$
 drop trigger if exists tgrDeleteVacuna;
create trigger tgrDeleteVacuna after delete on tbl_vacuna
for each row
begin
	INSERT INTO tbl_vacuna_audit
(`id`,
`descripcion`,
`lote`,
`is_activo`,
`usuario_creacion`,
`fecha_creacion`,
`usuario_modificacion`,
`fecha_modificacion`,
accion, user)
VALUES
(
	old.id,
    old.descripcion,
    old.lote,
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