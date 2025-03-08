String.prototype.vreplace = function(vocal) {
    // Expresión regular para encontrar todas las vocales (mayúsculas y minúsculas)
    return this.replace(/[aeiouAEIOU]/g, vocal);
};

// Ejemplo de uso:
const resultado = "apples and bananas".vreplace("u");
console.log(resultado); // "upplus und bununus"