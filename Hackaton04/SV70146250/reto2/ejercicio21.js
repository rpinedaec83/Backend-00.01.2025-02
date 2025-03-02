// funcion
const findNemo = (value ="")=>{
    let palabra = value.split(" "); //separa palabras por los espacios " "
    let indicador = palabra.indexOf("Nemo"); //indica el lugar de Nemo

    if(indicador!=-1){ //Indica donde encontro a "Nemo"
        return `I found Nemo at ${indicador+1}!`;
    }
    return `Nemo not found`
}
//llama
const data = findNemo("I am finding Nemo !");
//muestra
console.log(data);