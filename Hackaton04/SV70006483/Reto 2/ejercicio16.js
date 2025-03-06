function countdown(n) {
    const resultado = [];
    for (let i = n; i >= 0; i--) {
        resultado.push(i); // Agrega cada número al array
    }
    return resultado;
}

// Ejemplo de uso:
const resultado = countdown(5);
console.log(resultado); // [5, 4, 3, 2, 1, 0]