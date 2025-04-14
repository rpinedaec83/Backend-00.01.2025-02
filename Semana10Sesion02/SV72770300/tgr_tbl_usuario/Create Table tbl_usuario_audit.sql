CREATE TABLE `tbl_usuario_audit` (
  `id` int,
  `username` varchar(50),
  `password` varchar(512),
  `email` varchar(100),
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
	user varchar(100)
);