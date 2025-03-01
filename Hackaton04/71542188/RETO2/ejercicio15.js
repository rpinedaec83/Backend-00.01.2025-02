function multiplyByLength(array) {
    const length = array.length;
    return array.map(num => num * length);
}

const resultado = multiplyByLength([2, 3, 1, 0]);
console.log(resultado); 