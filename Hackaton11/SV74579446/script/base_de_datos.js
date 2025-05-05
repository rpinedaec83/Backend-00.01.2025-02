// Crear Base de Datos, antes de ejecutar eliminar el comentario siguiente
// use sv74579446;

// Crear y llenar la colección compra_materia_prima
db.compra_materia_prima.insertMany([
  {
    nombre: "Madera",
    cantidad: 100,
    unidad: "m³",
    proveedor: "Proveedor A",
    costo: 5000,
    fechaCompra: new Date("2025-04-01")
  },
  {
    nombre: "Madera",
    cantidad: 10,
    unidad: "m³",
    proveedor: "Proveedor C",
    costo: 500,
    fechaCompra: new Date("2025-04-01")
  },
  {
    nombre: "Melamina",
    cantidad: 80,
    unidad: "m²",
    proveedor: "Proveedor B",
    costo: 4000,
    fechaCompra: new Date("2025-04-05")
  }
]);

// Crear y llenar la colección compra_insumos
db.compra_insumos.insertMany([
  {
    nombre: "Tornillos",
    cantidad: 500,
    unidad: "unidades",
    proveedor: "Proveedor B",
    costo: 100,
    fechaCompra: new Date("2025-04-10")
  },
  {
    nombre: "Tuercas",
    cantidad: 5000,
    unidad: "unidades",
    proveedor: "Proveedor B",
    costo: 100,
    fechaCompra: new Date("2025-04-10")
  },
  {
    nombre: "Pegamento",
    cantidad: 20,
    unidad: "litros",
    proveedor: "Proveedor D",
    costo: 200,
    fechaCompra: new Date("2025-04-11")
  }
]);

// Crear y llenar la colección personal
db.personal.insertMany([
  {
    nombre: "Cesar Marcelo",
    dni: "12345678",
    cargo: "Carpintero",
    salario: 2000,
    fechaIngreso: new Date("2024-06-01"),
    turno: "mañana"
  },
  {
    nombre: "María López",
    dni: "87654321",
    cargo: "Supervisor",
    salario: 3000,
    fechaIngreso: new Date("2023-01-15"),
    turno: "tarde"
  }
]);

// Crear y llenar la colección produccion
db.produccion.insertMany([
  {
    producto: "Armario ropero",
    cantidad: 20,
    fechaInicio: new Date("2025-04-15"),
    fechaFin: new Date("2025-04-18"),
    empleadosInvolucrados: [
      { nombre: "Cesar Marcelo", dni: "12345678" },
      { nombre: "María López", dni: "87654321" }
    ],
    materiaPrimaUsada: [
      { nombre: "Madera", cantidad: 50, unidad: "m³" }
    ],
    insumosUsados: [
      { nombre: "Tornillos", cantidad: 200, unidad: "unidades" }
    ]
  }

]);
