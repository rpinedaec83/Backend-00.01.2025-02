create table tbl_raza_audit (
  id int,
  descripcion varchar(50),
  is_activo bit(1),
  usuario_creacion int,
  fecha_creacion datetime,
  usuario_modificacion int,
  fecha_modificacion datetime,
  accion char(1),
  user varchar(100)
);

delimiter $$

drop trigger if exists tgrInsertRaza;
create trigger tgrInsertRaza after insert on tbl_raza
for each row
begin
	insert into tbl_raza_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(new.id, new.descripcion, new.is_activo, new.usuario_creacion, new.fecha_creacion,
	 new.usuario_modificacion, new.fecha_modificacion, 'I', current_user());
end
$$

drop trigger if exists tgrUpdateRaza;
create trigger tgrUpdateRaza after update on tbl_raza
for each row
begin
	insert into tbl_raza_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(old.id, old.descripcion, old.is_activo, old.usuario_creacion, old.fecha_creacion,
	 old.usuario_modificacion, old.fecha_modificacion, 'U', current_user());
end
$$

drop trigger if exists tgrDeleteRaza;
create trigger tgrDeleteRaza after delete on tbl_raza
for each row
begin
	insert into tbl_raza_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(old.id, old.descripcion, old.is_activo, old.usuario_creacion, old.fecha_creacion,
	 old.usuario_modificacion, old.fecha_modificacion, 'd', current_user());
end
$$

delimiter ;

insert into tbl_raza(descripcion, usuario_creacion) values('Criolla', 1);
select * from tbl_raza;
update tbl_raza set descripcion = 'Criolla Actualizada' where descripcion = 'Criolla';
delete from tbl_raza where id = 3;
select * from tbl_raza_audit;

