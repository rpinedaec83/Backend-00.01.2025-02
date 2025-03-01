//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function squaresSum(n) {
    return Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((suma, num) => suma + num, 0);
}

const resultado = squaresSum(3);
console.log(resultado); 