function tipoDeValor(valor) {
    return typeof valor;
}

console.log(tipoDeValor(42)); // ➞ "number"
console.log(tipoDeValor("hello")); // ➞ "string"
console.log(tipoDeValor(true)); // ➞ "boolean"
console.log(tipoDeValor([])); // ➞ "object"
console.log(tipoDeValor({})); // ➞ "object"
