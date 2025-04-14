CREATE TABLE `tbl_propietario_audit` (
  `id` int,
  `nombre` varchar(50),
  `apellido` varchar(100),
  `documento` varchar(13),
  `direccion` varchar(500),
  `telefono` varchar(20),
  `id_nacionalidad` int,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
	user varchar(100)
);

