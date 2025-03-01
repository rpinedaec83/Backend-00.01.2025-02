function diffMaxMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado); 