CREATE TABLE `tbl_sexo_audit` (
  `id` int,
  `descripcion` varchar(50),
  `is_activo` bit,
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
	user varchar(100)
);