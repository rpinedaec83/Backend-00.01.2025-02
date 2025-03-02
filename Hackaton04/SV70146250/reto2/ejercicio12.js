//funcion
const getStudentNames = (estudiantes)=>{
    //.map recorre la matris A    //extrae name
    const names = estudiantes.map((valor)=>valor.name)
    return names
}
//llama
const data = getStudentNames(
    [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]
) 
//muestra
  console.log(data);