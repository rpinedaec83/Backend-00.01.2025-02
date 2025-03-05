function filterList(matriz) {
    return matriz.filter(elemento => typeof elemento === 'number' && Number.isInteger(elemento));
}

// Ejemplo de uso:
const resultado = filterList([1, 2, 3, "x", "y", 10]);
console.log(resultado); // [1, 2, 3, 10]