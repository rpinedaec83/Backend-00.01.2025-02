//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function sumarArgumentos(...args) {
    return args.reduce((suma, num) => suma + num, 0);
}

const resultado = sumarArgumentos(1, 2, 3, 4, 5);
console.log(resultado);