//funcion
const  squaresSum =(num)=>{

    let acumula =0;

    for(let i=1;i<=num;i++){ //acumula los cuadrados
        acumula = acumula+Math.pow(i,2);
    }
    return acumula;
}
//llama
const data = squaresSum(3);
//muestra
console.log(data);