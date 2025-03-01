function tipoDeValor(valor) {
    return typeof valor;
}

console.log(tipoDeValor(42)); 
console.log(tipoDeValor("Hola")); 
console.log(tipoDeValor(true)); 
console.log(tipoDeValor({})); 
console.log(tipoDeValor([])); 
console.log(tipoDeValor(null)); 
console.log(tipoDeValor(undefined)); 
console.log(tipoDeValor(function() {})); 