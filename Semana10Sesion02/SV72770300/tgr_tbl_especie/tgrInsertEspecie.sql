DELIMITER $$
drop trigger if exists tgrInsertEspecie;
create trigger tgrInsertEspecie after insert on tbl_especie
for each row
begin
	INSERT INTO tbl_especie_audit
(`id`,
`descripcion`,
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