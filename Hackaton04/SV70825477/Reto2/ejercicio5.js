// 5.	Crear una función que reciba un array de valores y filtre los valores que no son string


const nostring=(arrayvalue=[])=>arrayvalue.filter((value)=>typeof value == "number")



const resultado=nostring([1, 2, 3, "x", "y", 10])

console.log(resultado)

