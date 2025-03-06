function sumOfCubes(...numeros) {
    return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
}
const resultado = sumOfCubes(1, 5, 9);
console.log(resultado);