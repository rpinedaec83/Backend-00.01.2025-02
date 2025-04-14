-- Creación de la base de datos y tablas.

drop database if exists SV72770300;
Create database if not exists SV72770300;
use SV72770300;

drop table if exists tbl_empleados;
drop table if exists tbl_usuario;
drop table if exists tbl_produccion;
drop table if exists tbl_proveedores;
drop table if exists tbl_materia_insumo;
drop table if exists tbl_compra;
drop table if exists tbl_detalle_compra;
drop table if exists tbl_detalle_produccion;

create table tbl_usuario(
		
	id int primary key auto_increment,
    username varchar(50) not null unique,
    contrasena varchar(512) not null,
    email varchar(100) not null unique,
    is_activo bit not null default 0,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
    
);

create table tbl_empleados(
		
	id int primary key auto_increment,
    dni varchar(13) not null,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    cargo varchar(100) not null,
    salario decimal(8,2),
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
    
);

create table tbl_proveedores(
		
	id int primary key auto_increment,
    nombre varchar(100) not null,
    ruc varchar(100) not null,
    telefono varchar(50),
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
    
);

create table tbl_produccion(
		
	id int primary key auto_increment,
    tipo varchar(50) not null,
    nombre varchar(100) not null,
    cantidad_total int,
    id_empleado int not null,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_empleado) references tbl_empleados(id)
    
);

create table tbl_materia_insumo(
		
	id int primary key auto_increment,
    nombre varchar(100) not null,
    unidad_medicion varchar(20),
    cantidad int,
    tipo varchar(50),
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id)
    
);

create table tbl_compra(
		
	id int primary key auto_increment,
    id_proveedor int not null,
    monto_total decimal(8,2),
    fecha datetime default now(),
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_proveedor) references tbl_proveedores(id)
    
);


create table tbl_detalle_compra(
		
	id int primary key auto_increment,
    id_compra int not null,
    id_materia_insumo int not null,
    unidad_medicion varchar(20),
    cantidad int,
    monto decimal(8,2),
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_compra) references tbl_compra(id),
    foreign key(id_materia_insumo) references tbl_materia_insumo(id)
    
);

create table tbl_detalle_produccion(
		
	id int primary key auto_increment,
    id_produccion int not null,
    id_materia_insumo int not null,
    unidad_medicion varchar(20),
    cantidad int,
    is_activo bit not null default 1,
    usuario_creacion int not null,
    fecha_creacion datetime not null default current_timestamp,
	usuario_modificacion int,
    fecha_modificacion datetime,
    foreign key(usuario_creacion) references tbl_usuario(id),
    foreign key(usuario_modificacion) references tbl_usuario(id),
    foreign key(id_produccion) references tbl_produccion(id),
    foreign key(id_materia_insumo) references tbl_materia_insumo(id)
    
);


-- Consultas SQL

Select * from tbl_usuario;

select * from tbl_proveedores;

select * from tbl_materia_insumo;

select * from tbl_empleados;

select * from tbl_compra as c
inner join tbl_proveedores as p on p.id = c.id_proveedor;

select p.id, p.tipo, p.nombre, p.cantidad_total, p.id_empleado as 'Responsable', e.* from tbl_produccion as p
inner join tbl_empleados as e on e.id = p.id_empleado;

select * from tbl_detalle_compra as dc
inner join tbl_compra as c on c.id = dc.id_compra
inner join tbl_materia_insumo as mi on mi.id = dc.id_materia_insumo;

select * from tbl_detalle_produccion as dp
inner join tbl_produccion as p on p.id = dp.id_produccion
inner join tbl_materia_insumo as mi on mi.id = dp.id_materia_insumo;










