function repeat(elemento, veces) {
    return Array(veces).fill(elemento);
}

// Ejemplo de uso:
const resultado = repeat(13, 5);
console.log(resultado); // [13, 13, 13, 13, 13]