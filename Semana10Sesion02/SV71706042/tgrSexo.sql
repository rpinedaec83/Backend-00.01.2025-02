create table tbl_sexo_audit (
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

drop trigger if exists tgrInsertSexo;
create trigger tgrInsertSexo after insert on tbl_sexo
for each row
begin
	insert into tbl_sexo_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(new.id, new.descripcion, new.is_activo, new.usuario_creacion, new.fecha_creacion,
	 new.usuario_modificacion, new.fecha_modificacion, 'i', current_user());
end
$$

drop trigger if exists tgrUpdateSexo;
create trigger tgrUpdateSexo after update on tbl_sexo
for each row
begin
	insert into tbl_sexo_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(old.id, old.descripcion, old.is_activo, old.usuario_creacion, old.fecha_creacion,
	 old.usuario_modificacion, old.fecha_modificacion, 'u', current_user());
end
$$

drop trigger if exists tgrDeleteSexo;
create trigger tgrDeleteSexo after delete on tbl_sexo
for each row
begin
	insert into tbl_sexo_audit
	(id, descripcion, is_activo, usuario_creacion, fecha_creacion,
	 usuario_modificacion, fecha_modificacion, accion, user)
	values
	(old.id, old.descripcion, old.is_activo, old.usuario_creacion, old.fecha_creacion,
	 old.usuario_modificacion, old.fecha_modificacion, 'd', current_user());
end
$$

delimiter ;


insert into tbl_sexo(descripcion, usuario_creacion) values('No Binario', 1);
select * from tbl_sexo;
update tbl_sexo set descripcion = 'No Binario Actualizado' where id=3;
delete from tbl_sexo where id = 3;

select * from tbl_sexo_audit;
