//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando 
//todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
}

const resultado = "apples and bananas".vreplace("u");
console.log(resultado); 