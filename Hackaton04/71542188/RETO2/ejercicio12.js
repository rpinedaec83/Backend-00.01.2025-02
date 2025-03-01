function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

const resultado = getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
]);

console.log(resultado); 