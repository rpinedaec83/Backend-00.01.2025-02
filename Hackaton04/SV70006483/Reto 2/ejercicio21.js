function findNemo(cadena) {
    // Divide la cadena en un array de palabras
    const palabras = cadena.split(" ");
    // Busca la posición de la palabra "Nemo"
    const posicion = palabras.indexOf("Nemo");
    
    // Verifica si se encontró la palabra
    if (posicion !== -1) {
        return `I found Nemo at ${posicion + 1}!`;
    } else {
        return "Nemo not found!";
    }
}

// Ejemplo de uso:
const resultado = findNemo("I am finding Nemo !");
console.log(resultado); // "I found Nemo at 4!"