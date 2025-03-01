function toArray(obj) {
    return Object.entries(obj);
}

const resultado = toArray({ a: 1, b: 2 });
console.log(resultado); 