function filtrarStrings(array) {
    return array.filter(elemento => typeof elemento === 'string');
}

// Ejemplo de uso:
const valores = [1, 'hola', true, 'mundo', 42, 'JavaScript', false];
const stringsFiltrados = filtrarStrings(valores);

console.log(stringsFiltrados);