function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i; // Suma el cuadrado de cada número
    }
    return suma;
}

// Ejemplo de uso:
const resultado = squaresSum(3);
console.log(resultado); // 14