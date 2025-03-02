


function getBudgets(arreglo) {

    let respuesta = 0;
    for (let i = 0; i < arreglo.length; i++) {

        respuesta+= arreglo[i].budget;

    }
    
    return respuesta;
}

// Prueba
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
])); 