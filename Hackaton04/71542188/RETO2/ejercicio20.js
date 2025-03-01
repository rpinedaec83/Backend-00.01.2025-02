String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
}

const resultado = "apples and bananas".vreplace("u");
console.log(resultado); 