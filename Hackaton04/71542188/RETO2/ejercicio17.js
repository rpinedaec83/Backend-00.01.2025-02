///Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado); 