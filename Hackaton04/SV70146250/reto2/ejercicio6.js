//Funcion flecha
const minMax =(matriz)=>{
    const max = Math.max(...matriz); //Busca el maximo de los datos y asigna
    const min = Math.min(...matriz); //Busca el minimo de los datos y asigna
    return [min,max]
}
//Llama 
const data = minMax([1, 2, 3, 4, 5]) 
//Muestra
console.log(data)
