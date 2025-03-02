//funcion
const capLast = (cadena ="")=>{//separando cadenas
    //forma una cadena sin la ultima letra
    const inicioCadena = cadena.slice(0,cadena.length-1);
    //forma una cadena con la ultima letra                      //y la hace mayuscula
    const finalCadena = cadena.slice(cadena.length-1,cadena.length).toLocaleUpperCase();

    return inicioCadena + finalCadena //une las cadenas otra vez
}
//llama
const data = capLast("hello");
//muestra
console.log(data)