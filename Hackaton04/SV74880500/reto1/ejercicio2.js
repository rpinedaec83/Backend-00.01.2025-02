
function potenciaNumber(base, exponente) {

    const result = Math.pow(base, exponente)


    return result;
}

const potenciaNumberfuncionFlecha = (base, exponente) => Math.pow(base, exponente)

let data = potenciaNumber(4, 2);

console.log(data)

data = potenciaNumberfuncionFlecha(4, 2)

console.log(data)