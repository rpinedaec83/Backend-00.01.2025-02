function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

// Ejemplo de uso:
const nombres = getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]);

console.log(nombres);