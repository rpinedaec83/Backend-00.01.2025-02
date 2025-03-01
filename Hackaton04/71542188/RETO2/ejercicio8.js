function findLargestNums(matrices) {
    return matrices.map(array => Math.max(...array));
}

const resultado = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
console.log(resultado);