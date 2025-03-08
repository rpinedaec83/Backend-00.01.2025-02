function sumOfCubes(...numeros) {
    let suma = 0;
    for (let num of numeros) {
        suma += Math.pow(num, 3); // Eleva cada número al cubo y lo suma
    }
    return suma;
}

console.log(sumOfCubes(1, 5, 9)); // Output: 855

const sumOfCubesflecha = (...numeros) => {
    return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
};

console.log(sumOfCubesflecha(1, 5, 9)); // Output: 855