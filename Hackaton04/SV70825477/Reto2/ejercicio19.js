//  19.	Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz
const elementiempo=(a,b)=>{
const perros=[a,b]
//const perrosclonados4=JSON.parse(JSON.stringify(perros))



const mascota=perros.slice()
mascota[0][1]=13
mascota.pop()
console.log(perros)
const si=a
perros.push(si)
alert(perros)
//elementiempo.push(a)

}

elementiempo([13,5])