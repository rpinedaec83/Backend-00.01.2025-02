

create database if not exists Veterinaria;
use Veterinaria;


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