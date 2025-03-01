//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
//"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(frase) {
    const palabras = frase.split(" ");
    const index = palabras.indexOf("Nemo");
    return index !== -1 ? `¡Encontré a Nemo en ${index + 1}!` : "Nemo no encontrado";
}

const resultado = findNemo("I am finding Nemo !");
console.log(resultado); 