const getStudentNames = (estudiantes = []) => {
    let resultado = [];

    for (let i = 0; i < estudiantes.length; i++) {
        resultado.push(estudiantes[i].name);
    }

    return resultado;
};

console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); 
