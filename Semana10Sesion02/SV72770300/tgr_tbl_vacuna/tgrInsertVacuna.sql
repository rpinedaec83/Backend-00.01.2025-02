DELIMITER $$
drop trigger if exists tgrInsertVacuna;
create trigger tgrInsertVacuna after insert on tbl_vacuna
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
	new.id,
    new.descripcion,
    new.lote,
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