//funcion flecha
                //"..." operador rest, agrupa todos los valores ingresados
const sumDatos = (...datos) => {
    //llama a otra funcion fechla
    const suma = (acumula, valorActual) => acumula + valorActual
    const result = datos.reduce(suma, 0);

    return result;
}
//Llama
let data=sumDatos(1,2,3,4);
//Muestra
console.log(data);