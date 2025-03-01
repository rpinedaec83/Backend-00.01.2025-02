//Crear una función que reciba un array de valores y filtre los valores que no son string
function filtrarStrings(array) {
    return array.filter(item => typeof item === 'string');
}

const resultado = filtrarStrings([1, "a", true, "b", 3, "c"]);
console.log(resultado);