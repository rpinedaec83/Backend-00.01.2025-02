function findLargestNums(matrices) {
    return matrices.map(submatriz => Math.max(...submatriz));
}

// Ejemplo de uso:
const resultado = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
console.log(resultado); // [7, 90, 2]