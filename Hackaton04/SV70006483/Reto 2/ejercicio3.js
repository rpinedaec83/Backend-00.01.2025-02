// Función para retornar el tipo de valor
const obtenerTipo = (valor) => {
    return typeof valor;
};

// Invocaciones para distintos tipos de datos en JavaScript
console.log(obtenerTipo(42)); // number
console.log(obtenerTipo("Hola")); // string
console.log(obtenerTipo(true)); // boolean
console.log(obtenerTipo({ nombre: "Juan", edad: 25 })); // object
console.log(obtenerTipo([1, 2, 3])); // object (los arrays son de tipo object en JS)
console.log(obtenerTipo(null)); // object (null es considerado un objeto en JS)
console.log(obtenerTipo(undefined)); // undefined
console.log(obtenerTipo(function() {})); // function
console.log(obtenerTipo(Symbol("id"))); // symbol
console.log(obtenerTipo(new Date())); // object