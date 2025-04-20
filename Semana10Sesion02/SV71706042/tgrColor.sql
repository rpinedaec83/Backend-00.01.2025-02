use Veterinaria;

CREATE TABLE `tbl_color_audit` (
  `id` int ,
  `descripcion` varchar(50) ,
  `is_activo` bit(1) ,
  `usuario_creacion` int ,
  `fecha_creacion` datetime ,
  `usuario_modificacion` int ,
  `fecha_modificacion` datetime,
  accion char(1),
  user varchar(100)
  );


DELIMITER $$
 drop trigger if exists tgrDeleteColor;
create trigger tgrDeleteColor after delete on tbl_color
for each row
begin
	INSERT INTO tbl_color_audit
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
	old.id,
    old.descripcion,
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
DELIMITER $$
drop trigger if exists tgrInsertColor;
create trigger tgrInsertColor after insert on tbl_color
for each row
begin
	INSERT INTO tbl_color_audit
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


DELIMITER $$
 drop trigger if exists tgrUpdateColor;
create trigger tgrUpdateColor after update on tbl_color
for each row
begin
	INSERT INTO tbl_color_audit
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
	old.id,
    old.descripcion,
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


call crud_color(2,'Chocolate',null, null,1);
call crud_color(3,'Chocolate Blanco',0, 7, 1); 
delete from tbl_color where id=6;

select * from tbl_color_audit;
select * from tbl_color;
select * from tbl_color_audit;
