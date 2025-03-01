function squaresSum(n) {
    return Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((suma, num) => suma + num, 0);
}

const resultado = squaresSum(3);
console.log(resultado); 