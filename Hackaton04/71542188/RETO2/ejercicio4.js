function sumarArgumentos(...args) {
    return args.reduce((suma, num) => suma + num, 0);
}

const resultado = sumarArgumentos(1, 2, 3, 4, 5);
console.log(resultado);