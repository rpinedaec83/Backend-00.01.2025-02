const toArray = (obj = {}) => {
    let resultado = [];
    for (let clave in obj) {
        resultado.push([clave, obj[clave]]);
    }
    return resultado;
};

console.log(toArray({ a: 1, b: 2 })); 
console.log(toArray({ nombre: "sandro", edad: 25 })); 
console.log(toArray({})); 
