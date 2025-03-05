
// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

const charIndex = (palabra = "", caracter) => {

    if (palabra == "") {
        return "ingrese un dato"
    }

    let firstCaracterIndex = palabra.indexOf(caracter);

    let finalCaracterIndex = palabra.lastIndexOf(caracter);
    return [firstCaracterIndex, finalCaracterIndex]

}


const result =  charIndex("hello", "l");

console.log(result);

const result1 = charIndex("circumlocution", "c");

console.log(result1);