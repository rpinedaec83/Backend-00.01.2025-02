function multiplyByLength(matriz) {
    const longitud = matriz.length; // Obtiene la longitud de la matriz
    return matriz.map(valor => valor * longitud); // Multiplica cada valor por la longitud
}

// Ejemplo de uso:
const resultado = multiplyByLength([2, 3, 1, 0]);
console.log(resultado); // [8, 12, 4, 0]