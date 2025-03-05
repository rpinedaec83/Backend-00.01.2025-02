// 12.	Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes



const getstudent=(data)=>{
    const names = data.map((value)=>value.name)
    return names
}

const resultado=getstudent([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" },
  
])
console.log(resultado);

