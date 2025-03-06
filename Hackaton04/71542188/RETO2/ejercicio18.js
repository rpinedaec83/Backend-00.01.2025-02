//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(array) {
    return array.filter(item => typeof item === 'number');
}

const resultado = filterList([1, 2, 3, "x", "y", 10]);
console.log(resultado); 