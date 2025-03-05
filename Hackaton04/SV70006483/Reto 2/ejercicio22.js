function capLast(cadena) {
    // Divide la cadena en un array de palabras
    const palabras = cadena.split(" ");
    
    // Recorre cada palabra y capitaliza la última letra
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length > 0) {
            // Convierte la última letra a mayúscula y concatena el resto de la palabra
            return palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
        }
        return palabra; // Si la palabra está vacía, la devuelve sin cambios
    });
    
    // Une las palabras capitalizadas en una sola cadena
    return palabrasCapitalizadas.join(" ");
}

// Ejemplo de uso:
const resultado = capLast("hello");
console.log(resultado); // "hellO"