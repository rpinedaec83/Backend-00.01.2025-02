

function getStudentNames(students) {
    
    let respuesta = [];
    
    for (let i = 0; i < students.length; i++) {
        
        respuesta.push(students[i].name);
    }
    return respuesta;


}

// Prueba
console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); 