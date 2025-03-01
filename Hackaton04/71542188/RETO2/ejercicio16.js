///Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
///countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(n) {
    return Array.from({ length: n + 1 }, (_, i) => n - i);
}

const resultado = countdown(5);
console.log(resultado); 