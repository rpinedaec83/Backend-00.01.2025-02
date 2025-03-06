//funcion flecha
const toArray = (objetoEvaluado = {})=>{
            //Object.entries() convierte objeto en matrices
    return Object.entries(objetoEvaluado);
}
//llama
const data =  toArray({ a: 1, b: 2 });
//mostra
console.log(data);