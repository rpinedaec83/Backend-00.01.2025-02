

create database if not exists Veterinaria;
use Veterinaria;


drop table if exists tbl_mascota_vacuna;
drop table if exists tbl_mascota;
drop table if exists tbl_propietario;
drop table if exists tbl_vacuna;
drop table if exists tbl_color;
drop table if exists tbl_especie;
drop table if exists tbl_sexo;
drop table if exists tbl_raza;
drop table if exists tbl_nacionalidad;
drop table if exists tbl_usuario;



create table tbl_usuario(
	id int AUTO_INCREMENT primary key,
    username varchar(50) not null unique,
    password varchar(512) not null,
    email varchar(100) not null unique,
    is_activo bit not null default 0,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_usuario(username, password,email,usuario_creacion)
values('dlopez','123456','dlopez@x-codec.net',1);

select * from tbl_usuario;

create table tbl_nacionalidad(
	id int auto_increment primary key,
    descripcion varchar(50) not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_nacionalidad(descripcion, usuario_creacion)
values('Peruana',1),
('Ecuatoriana',1);

select * from tbl_nacionalidad;

create table tbl_raza(
	id int auto_increment primary key,
    descripcion varchar(50) not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_raza(descripcion, usuario_creacion)
values('Mestizo',1),
('Europea Pelo Corto',1);

select * from tbl_raza;

create table tbl_sexo(
	id int auto_increment primary key,
    descripcion varchar(50) not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_sexo(descripcion, usuario_creacion)
values('Macho',1),
('Hembra',1);

select * from tbl_sexo;

create table tbl_especie(
	id int auto_increment primary key,
    descripcion varchar(50) not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_especie(descripcion, usuario_creacion)
values('Gatos',1),
('Perros',1),
('Aves',1);

select * from tbl_especie;

create table tbl_color(
	id int auto_increment primary key,
    descripcion varchar(50) not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
);

insert into tbl_color(descripcion, usuario_creacion)
values('Blanco',1),
('Negro',1),
('Gris',1);

select * from tbl_color;

CREATE TABLE `tbl_vacuna` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `lote` varchar(45),
  `is_activo` bit(1) NOT NULL DEFAULT b'1',
  `usuario_creacion` int NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` int DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
   FOREIGN KEY (`usuario_creacion`) REFERENCES `tbl_usuario` (`id`),
  FOREIGN KEY (`usuario_modificacion`) REFERENCES `tbl_usuario` (`id`)
) ;


insert into tbl_vacuna(descripcion, usuario_creacion)
values('Anti Rabia',1),
('Triple Felina',1),
('VIH Felino',1);

select * from tbl_vacuna;

create table tbl_propietario(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    apellido varchar(100) not null,
    documento varchar(13) not null,
    direccion varchar(500),
    telefono varchar(20),
    id_nacionalidad int not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_nacionalidad) references tbl_nacionalidad(id)
);

insert into tbl_propietario(nombre,apellido,documento,id_nacionalidad,usuario_creacion)
values('Roberto', 'Pineda', '001575291', 2, 1);

select * from tbl_propietario;

create table tbl_mascota(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    fecha_nacimiento date null,
    peso decimal(18,2) not null,
    id_especie int not null,
    id_raza int not null,
    id_color int not null,
    id_sexo int not null,
    id_propietario int not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_especie) references tbl_especie(id),
    foreign key(id_raza) references tbl_raza(id),
    foreign key(id_color) references tbl_color(id),
    foreign key(id_sexo) references tbl_sexo(id),
    foreign key(id_propietario) references tbl_propietario(id)
    
);

insert into tbl_mascota(nombre,fecha_nacimiento,peso,id_especie, id_raza, id_color,id_sexo,id_propietario,usuario_creacion)
values('Pancho',null, 4.65, 1,1,1,1,1,1),
('Felipa', '2021-06-11', 4.45, 1,2,2,2,1,1);


select * from tbl_mascota;

create table tbl_mascota_vacuna(
	id int auto_increment primary key,
    id_mascota int not null,
    id_vacuna int not null,
    fecha_aplicacion datetime not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
    usuario_modificacion int ,
    fecha_modificacion datetime,
    FOREIGN KEY(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_mascota) references tbl_mascota(id),
    foreign key(id_vacuna) references tbl_vacuna(id)
);

insert into tbl_mascota_vacuna(id_mascota, id_vacuna, fecha_aplicacion, usuario_creacion )
values(1,1,now(),1),
(1,2,now(),1),
(2,1,now(),1),
(2,2,now(),1);

select * from tbl_mascota_vacuna;