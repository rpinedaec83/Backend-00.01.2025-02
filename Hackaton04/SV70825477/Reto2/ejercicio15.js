// 15.	Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

const multipli=(data=[])=> data.map((value)=>value*data.length)

const result = multipli([2,3,1,0])
console.log(result)


