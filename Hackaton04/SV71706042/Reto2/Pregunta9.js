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