//Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

function capLast(frase) {
    return frase.split(" ").map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()).join(" ");
}

const resultado = capLast("hello world");
console.log(resultado); 