//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//{ name: "Steve" },
//{ name: "Mike" },
// { name: "John" }
 // ]) ➞ ["Becky", "John", "Steve"]
//  
function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

const resultado = getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
]);

console.log(resultado); 