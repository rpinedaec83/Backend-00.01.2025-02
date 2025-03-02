//funcion flecha
const getBudgets = (matriz) => {
    let sumaTotal = 0; //inicia en 0
    for (let person of matriz) {
        sumaTotal = sumaTotal + person.budget; //acumula budget en sumaTotal
    }
    return sumaTotal; 
}
//alama
 let data = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }]);
//Muestra
console.log(data);
