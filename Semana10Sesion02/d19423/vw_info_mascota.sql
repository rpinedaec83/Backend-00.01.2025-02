drop view if exists vw_info_mascota;

Create VIEW vw_info_mascota as

Select 
m.id,
m.nombre,
m.fecha_nacimiento,
m.peso,
e.descripcion as Especie,
r.descripcion as Raza,
s.descripcion as Sexo,
c.descripcion as Color

from tbl_mascota m
inner join tbl_especie e on m.id_especie = e.id
inner join tbl_raza r on m.id_raza = r.id
inner join tbl_sexo s on m.id_sexo = s.id
inner join tbl_color c on m.id_color = c.id
;