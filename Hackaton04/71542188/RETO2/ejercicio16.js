function countdown(n) {
    return Array.from({ length: n + 1 }, (_, i) => n - i);
}

const resultado = countdown(5);
console.log(resultado); 