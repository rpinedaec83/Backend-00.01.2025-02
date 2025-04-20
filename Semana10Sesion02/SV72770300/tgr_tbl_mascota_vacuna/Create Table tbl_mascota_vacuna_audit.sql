CREATE TABLE `tbl_mascota_vacuna_audit` (
  `id` int,
  `id_mascota` int,
  `id_vacuna` int,
  `fecha_aplicacion` datetime,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
	user varchar(100)
);