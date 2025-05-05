// Conéctate a la base de datos
// use sv74579446;

// Consultar todas las compras de materia prima
db.compra_materia_prima.find().pretty();

// Consultar todos los insumos comprados
db.compra_insumos.find().pretty();

// Consultar todo el personal registrado
db.personal.find().pretty();

// Consultar toda la producción realizada
db.produccion.find().pretty();

// Consultas extra: Buscar solo empleados del turno mañana
db.personal.find({ turno: "mañana" }).pretty();

// Consultas extra: Mostrar materias primas compradas de "Proveedor A"
db.compra_materia_prima.find({ proveedor: "Proveedor A" }).pretty();
