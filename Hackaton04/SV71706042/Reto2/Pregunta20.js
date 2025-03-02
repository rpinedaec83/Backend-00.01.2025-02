
String.prototype.vreplace = function(vowel) {

    let result = "";

    for (let i = 0; i < this.length; i++) {
        if ("aeiou".includes(this[i])) {
            result += vowel;
        } else {
            result += this[i];
        }
    }
    
    return result;
};

// Prueba
console.log("apples and bananas".vreplace("u")); 