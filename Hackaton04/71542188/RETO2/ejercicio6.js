//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(array) {
    return [Math.min(...array), Math.max(...array)];
}

const resultado = minMax([1, 2, 3, 4, 5]);
console.log(resultado);