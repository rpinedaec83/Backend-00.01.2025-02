//funcion                //Array() crea array del tamño argumento
const repeat=(elemento,tiempos)=> Array(tiempos).fill(elemento);
                                            //.fill Llena el array repitiendo
//llama
let data = repeat(13,5);
//muestra
console.log(data);
