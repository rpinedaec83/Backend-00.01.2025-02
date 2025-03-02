//  18.	Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

const filter=(arrayvalue=[])=>arrayvalue.filter((value)=>typeof value == "number")



const resultado=filter([1, 2, 3, "x", "y", 10])

console.log(resultado)
