const diffMaxMin =(matriz)=>{

    const max = Math.max(...matriz); //extrae maximo al recorrer
    const min = Math.min(...matriz); //extrae minimo al recorrer
    //resta
    const diferencia = max-min
    return diferencia
}
//llama
const data = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])
//muestra
console.log(data)