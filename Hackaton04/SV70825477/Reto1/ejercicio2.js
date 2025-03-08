//2.	Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencianumero(base,exponente){
    const resultado=Math.pow(base,exponente)
    return resultado;

}
const data=potencianumero(4,2);
console.log(data)