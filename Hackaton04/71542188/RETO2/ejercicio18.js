function filterList(array) {
    return array.filter(item => typeof item === 'number');
}

const resultado = filterList([1, 2, 3, "x", "y", 10]);
console.log(resultado); 