function findNemo(frase) {
    const palabras = frase.split(" ");
    const index = palabras.indexOf("Nemo");
    return index !== -1 ? `¡Encontré a Nemo en ${index + 1}!` : "Nemo no encontrado";
}

const resultado = findNemo("I am finding Nemo !");
console.log(resultado); 