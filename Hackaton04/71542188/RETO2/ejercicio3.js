function tipoDeValor(valor) {
    return typeof valor;
}

// Invocando la función para los distintos tipos de JavaScript
console.log(tipoDeValor(42)); // number
console.log(tipoDeValor("Hola")); // string
console.log(tipoDeValor(true)); // boolean
console.log(tipoDeValor({})); // object
console.log(tipoDeValor([])); // object
console.log(tipoDeValor(null)); // object
console.log(tipoDeValor(undefined)); // undefined
console.log(tipoDeValor(function() {})); // function