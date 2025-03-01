function repeat(elemento, tiempos) {
    return Array(tiempos).fill(elemento);
}

const resultado = repeat(13, 5);
console.log(resultado);