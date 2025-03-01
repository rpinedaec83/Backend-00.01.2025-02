function charIndex(palabra, char) {
    return [palabra.indexOf(char), palabra.lastIndexOf(char)];
}

const resultado1 = charIndex("hello", "l");
console.log(resultado1); 

const resultado2 = charIndex("circumlocution", "c");
console.log(resultado2); 