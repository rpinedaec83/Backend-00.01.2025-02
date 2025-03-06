// 8.	Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno

const maxi=(numero)=>{
numero.sort((a,b)=>a.b)
return numero[numero.length-1]

}
console.log(maxi([10,5,12,100]))
