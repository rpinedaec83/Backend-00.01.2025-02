CREATE TABLE `tbl_mascota_audit` (
  `id` int,
  `nombre` varchar(50),
  `fecha_nacimiento` date,
  `peso` decimal(8,2),
  `id_especie` int,
  `id_raza` int,
  `id_color` int,
  `id_sexo` int,
  `id_propietario` int,
  `is_activo` bit(1),
  `usuario_creacion` int,
  `fecha_creacion` datetime,
  `usuario_modificacion` int,
  `fecha_modificacion` datetime,
  accion char(1),
	user varchar(100)
);