//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function charIndex(palabra, char) {
    return [palabra.indexOf(char), palabra.lastIndexOf(char)];
}

const resultado1 = charIndex("hello", "l");
console.log(resultado1); 

const resultado2 = charIndex("circumlocution", "c");
console.log(resultado2); 