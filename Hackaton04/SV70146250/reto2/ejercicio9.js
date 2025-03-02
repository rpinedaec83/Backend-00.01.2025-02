//fncion flecha
const charIndex = (palabra = "", caracter) => {
    //Valida que tenga datos
    if (palabra == "") {
        return "Ingrese un dato"
    }
                    //.indexOf asgina la primera ubicacion de caracter
    let primerCaracterIndexado = palabra.indexOf(caracter);
                    //.lastindexOf asgina la ultima ubicacion de caracter
    let ultimoCaracterIndexado = palabra.lastIndexOf(caracter);
    return [primerCaracterIndexado, ultimoCaracterIndexado]
}

//llamando1
const result1 =  charIndex("hello", "l");
//Mostrar1
console.log(result1);

//llamando2
const result2 = charIndex("circumlocution", "c");
//Mostrar2
console.log(result2);