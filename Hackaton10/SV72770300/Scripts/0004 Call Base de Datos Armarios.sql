-- Call crud_usuario

call crud_usuario(1, null, null, null, null, null, null);

call crud_usuario(2, 'emersonjerzy72', 'leonduemer19', 'jerzypa.19@gmail.com', null, null, 1);
call crud_usuario(2, 'lizparedes133', 'paredes1487&e', 'liz1945@outlook.es', null, null, 2);
call crud_usuario(2, 'benitojoseloayza', 'loayza148benit', 'benito14@gmail.com', null, null, 1);
call crud_usuario(2, 'danixalopez75892', 'lopezdani145', 'danixa145@gmail.com', null, null, 2);

call crud_usuario(3, null, null, null, 1, 1, 1);
call crud_usuario(3, null, null, null, 1, 2, 2);
call crud_usuario(3, 'benitojoseloy76', null, 'beniloayza@gmail.com', 1, 3, 2);
call crud_usuario(3, null, 'dani14loayza/&', null, 1, 4, 1);

call crud_usuario(4, null, null, null, null, 2, 1);


-- Call crud_proveedores

call crud_proveedores(1, null, null, null, null, null, null);

call crud_proveedores(2, 'Garciherrajes, S.A.', '20606422793', '999123456', null, null, 1);
call crud_proveedores(2, 'Gimatec, S.A', '20604915351', '945678901', null, null, 1);
call crud_proveedores(2, 'Maquinorte de Puebla, S.A.', '20605100016', '987654321', null, null, 2);
call crud_proveedores(2, 'Mademaq S.A.', '20525994741', '991650326', null, null, 2);

call crud_proveedores(3, 'Garciherrajes S.A.', null, null, null, 1, 3);
call crud_proveedores(3, 'Gimatec S.A.', '20777888999', null, null, 2, 2);
call crud_proveedores(3, 'Sodimac S.A.', null, null, null, 3, 1);
call crud_proveedores(3, null, null, '978456875', null, 4, 4);

call crud_proveedores(4, null, null, null, null, 3, 2);


-- Call crud_empleados

call crud_empleados(1, null, null, null, null, null, null, null, null);

call crud_empleados(2, '78129345', 'Camila', 'Vargas Quispe', 'Gerente de Producción', 2500.54, null, null, 1);
call crud_empleados(2, '23678901', 'Sebastián', 'Rojas Torres', 'Supervisor de Producción', 2200.19, null, null, 2);
call crud_empleados(2, '12789043', 'Valentina', 'Silva	Ruiz', 'Operario de Corte', 2000.65, null, null, 2);
call crud_empleados(2, '89234506', 'Gabriel', 'Castro Fernández', 'Operario de Ensamblaje', 1800.79, null, null, 3);
call crud_empleados(2, '67501283', 'Antonella', 'Gutiérrez Ramos', 'Operario de Control de Calidad', 1750.68, null, null, 4);

call crud_empleados(3, '01456792', null, null, null, 2800.52, 1, 1, 3);
call crud_empleados(3, null, 'Sofía', null, 'Planificador de la Producción', 2100.69, 1, 3, 2);
call crud_empleados(3, null, null, 'Chávez Díaz', null, null, 1, 4, 1);

call crud_empleados(4, null, null, null, null, null, null, 4, 2);


-- Call crud_materia_insumo

call crud_materia_insumo(1, null, null, null, null, null, null, null);

call crud_materia_insumo(2, 'Madera contrachapada', 'Pliego', '20', 'Materia prima', null, null, 1);
call crud_materia_insumo(2, 'Madera de fibra de densidad media', 'Pliego', '30', 'Materia prima', null, null, 1);
call crud_materia_insumo(2, 'Tornillos autoperforantes', 'Bolsa', '5', 'Insumo', null, null, 2);
call crud_materia_insumo(2, 'Bisagras', 'Unidad  ', '6', 'Insumo', null, null, 2);
call crud_materia_insumo(2, 'Manijas / Tiradores', 'Unidad', '8', 'Insumo', null, null, 2);
call crud_materia_insumo(2, 'Pintura o barniz', 'Litros', '7', 'Insumo', null, null, 3);
call crud_materia_insumo(2, 'Pegamento para madera', 'Litros', '4', 'Insumo', null, null, 3);
call crud_materia_insumo(2, 'Rieles para cajones', 'Par', '15', 'Insumo', null, null, 4);
call crud_materia_insumo(2, 'Clavos', 'Bolsa', '6', 'Insumo', null, null, 4);
call crud_materia_insumo(2, 'Lija', 'Hoja', '10', 'Insumo', null, null, 4);

call crud_materia_insumo(3, 'Madera de fibra de densidad media (MDF)', null, 14, null, 1, 2, 3);
call crud_materia_insumo(3, 'Manijas', null, null, null, null, 5, 2);
call crud_materia_insumo(3, 'Manijas', null, null, null, 1, 3, 3);
call crud_materia_insumo(3, null, null, null, null, 1, 4, 3);

call crud_materia_insumo(4, null, null, null, null, null, 4, 3);


-- Call crud_compra

call crud_compra(1, null, null, null, null, null, null);

call crud_compra(2, 1, 1400.00, null, null, null, 1);
call crud_compra(2, 3, 545.50, null, null, null, 3);
call crud_compra(2, 3, 785.20, null, null, null, 3);
call crud_compra(2, 4, 410.90, null, null, null, 2);
call crud_compra(2, 2, 152.40, null, null, null, 2);
call crud_compra(2, 2, 541.70, null, null, null, 4);
call crud_compra(2, 1, 785.10, null, null, null, 1);

call crud_compra(3, null, 1320.60, null, 1, 1, 3);
call crud_compra(3, 3, null, null, 1, 6, 2);
call crud_compra(3, 4, 800.80, '2025-03-20', 1, 2, 1);

call crud_compra(4, null, null, null, null, 3, 4);
call crud_compra(4, null, null, null, null, 5, 1);


-- Call crud_produccion

call crud_produccion(1, null, null, null, null, null, null, null);

call crud_produccion(2, 'Empotrado', 'Armario Empotrado Clásico', 10, 1, null, null, 1);
call crud_produccion(2, 'Modular', 'Armario Modular Personalizable', 8, 1, null, null, 2);
call crud_produccion(2, 'Ropero tradicional', 'Ropero de Puertas Batientes', 5, 3, null, null, 4);
call crud_produccion(2, 'Esquinero', 'Armario Esquinero Compacto', 4, 1, null, null, 3);
call crud_produccion(2, 'Infantil', 'Armario Infantil con Temática', 8, 2, null, null, 4);

call crud_produccion(3, null, null, 3, null, 1, 1, 3);
call crud_produccion(3, 'Multifuncional', 'Armario Multifunción con Escritorio', null, null, 1, 4, 1);

call crud_produccion(4, null, null, null, null, null, 2, 3);


-- Call crud_detalle_compra

call crud_detalle_compra(1, null, null, null, null, null, null, null, null);

call crud_detalle_compra(2, 1, 3, 'Bolsa', 7, 400.00, null, null, 2);
call crud_detalle_compra(2, 1, 4, 'Unidad', 5, 350.00, null, null, 1);
call crud_detalle_compra(2, 2, 4, 'Unidad', 5, 350.00, null, null, 1);
call crud_detalle_compra(2, 2, 5, 'Unidad', 15, 150.00, null, null, 2);
call crud_detalle_compra(2, 2, 6, 'Litros', 3, 200.00, null, null, 2);

call crud_detalle_compra(3, null, null, null, 10, 500, 1, 2, 2);
call crud_detalle_compra(3, null, null, null, 8, 500, 1, 5, 1);
call crud_detalle_compra(3, null, null, null, 6, 450, 1, 7, 4);
call crud_detalle_compra(3, null, null, null, null, null, 1, 6, 3);

call crud_detalle_compra(4, null, null, null, null, null, null, 5, 3);
call crud_detalle_compra(4, null, null, null, null, null, null, 2, 1);
call crud_detalle_compra(4, null, null, null, null, null, null, 6, 4);


-- Call crud_detalle_produccion

call crud_detalle_produccion(1, null, null, null, null, null, null, null);

call crud_detalle_produccion(2, 1, 2, 'Pliego', 12, null, null, 2);
call crud_detalle_produccion(2, 1, 4, 'Bolsa', 3, null, null, 2);
call crud_detalle_produccion(2, 1, 7, 'Litro', 2, null, null, 3);
call crud_detalle_produccion(2, 1, 5, 'Unidad', 6, null, null, 1);
call crud_detalle_produccion(2, 3, 2, 'Pliego', 10, null, null, 1);
call crud_detalle_produccion(2, 3, 10, 'Hoja', 9, null, null, 4);
call crud_detalle_produccion(2, 3, 5, 'Unidad', 6, null, null, 4);

call crud_detalle_produccion(3, null, null, null, 4, 1, 4, 2);
call crud_detalle_produccion(3, null, 6, null, 4, 1, 3, 1);

call crud_detalle_produccion(4, null, null, null, null, null, 2, 3);
call crud_detalle_produccion(4, null, null, null, null, null, 6, 4);





