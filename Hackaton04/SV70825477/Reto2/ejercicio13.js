// 13.	Escriba una función que convierta un objeto en una matriz de claves y valores

const objetoarr=(data)=>Object.entries(data)

const resultado=objetoarr({
likes:2,
dislikes:3,
followers:10,


})

console.log(resultado)