function diffMaxMin(matriz) {
    const max = Math.max(...matriz); // Encuentra el número más grande
    const min = Math.min(...matriz); // Encuentra el número más pequeño
    return max - min; // Devuelve la diferencia
}

// Ejemplo de uso:
const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado); // 82