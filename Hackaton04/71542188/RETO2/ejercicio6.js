function minMax(array) {
    return [Math.min(...array), Math.max(...array)];
}

const resultado = minMax([1, 2, 3, 4, 5]);
console.log(resultado);