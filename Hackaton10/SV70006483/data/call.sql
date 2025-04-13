CALL crud_usuarios(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_usuarios(2, 'dhayrokong', 'secreto123', 'dhayrokong@example.com', 'empleado', 1, NULL);
CALL crud_usuarios(3, 'dhayroactualizado', NULL, NULL, 'gerente', 1, 1);
CALL crud_usuarios(4, NULL, NULL, NULL, NULL, NULL, 1);

CALL crud_empleados(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_empleados(2, 1, 'Desarrollador', 3500.00, 'Juan', 'Pérez', '12345678', 1, NULL, 1, NULL);
CALL crud_empleados(3, 2, 'Analista', 4000.00, 'Carlos', 'Gómez', NULL, NULL, 2, 1, 1);
CALL crud_empleados(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1);

CALL crud_asistencia(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_asistencia(2, 1, '2025-04-13', '08:00:00', '17:00:00', 'Asistencia completa', 1, NULL);
CALL crud_asistencia(3, 2, '2025-04-13', '09:00:00', '18:00:00', 'Entrada tarde', 1, 1);
CALL crud_asistencia(4, NULL, NULL, NULL, NULL, NULL, NULL, 1);

CALL crud_pagos(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_pagos(2, 1, '2025-04-15', 1500.00, 'Pago de salario mensual', 1, NULL);
CALL crud_pagos(3, 2, '2025-04-15', 1600.00, 'Pago de salario ajustado', 1, 1);
CALL crud_pagos(4, NULL, NULL, NULL, NULL, NULL, 1);

CALL crud_proveedores(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_proveedores(2, 'Proveedor A', '12345678901', '987654321', 1, 1, NULL);
CALL crud_proveedores(3, 'Proveedor Actualizado', '10987654321', '912345678', 2, 1, 1);
CALL crud_proveedores(4, NULL, NULL, NULL, 2, NULL, 1);

CALL crud_materia_insumo(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_materia_insumo(2, 'Harina de trigo', 'kg', 100.00, 'materia', 1, 1, NULL);
CALL crud_materia_insumo(3, 'Harina refinada', 'kg', 120.00, 'materia', 2, 1, 1);
CALL crud_materia_insumo(4, NULL, NULL, NULL, NULL, 2, NULL, 1);

CALL crud_compra(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_compra(2, '2025-04-13', 3, 1250.50, 1, 1, NULL);
CALL crud_compra(3, '2025-04-12', 2, 1350.00, 2, 1, 1);
CALL crud_compra(4, NULL, NULL, NULL, 2, NULL, 1);

CALL crud_detalle_compra(1, 5, NULL, NULL, NULL, NULL);
CALL crud_detalle_compra(2, 5, 3, 'kg', 10.5, 52.75);
CALL crud_detalle_compra(3, 5, 3, 'kg', 12.0, 60.00);
CALL crud_detalle_compra(4, 5, 3, NULL, NULL, NULL);

CALL crud_produccion(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL crud_produccion(2, 'Producto Final', 'Producción de Mermelada', 150.00, 1, 1, NULL);
CALL crud_produccion(3, 'Producto Final', 'Mermelada de Fresa', 180.00, 2, 1, 1);
CALL crud_produccion(4, NULL, NULL, NULL, 2, NULL, 1);


CALL crud_detalle_produccion(1, 7, NULL, NULL, NULL);
CALL crud_detalle_produccion(2, 7, 4, 'kg', 30.00);
CALL crud_detalle_produccion(3, 7, 4, 'kg', 32.50);
CALL crud_detalle_produccion(4, 7, 4, NULL, NULL);




