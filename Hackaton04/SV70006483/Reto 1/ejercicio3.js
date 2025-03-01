function sumOfCubes(...numeros) {
    return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
}

let resultado2 = sumOfCubes(2, 3, 4); // 2^3 + 3^3 + 4^3
console.log(resultado2); // Salida: 99 (8 + 27 + 64)