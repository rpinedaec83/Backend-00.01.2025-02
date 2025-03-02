// 10.	Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

const toarray = (objectvalue={})=>{
    return Object.entries(objectvalue)
}

const resultado =toarray({a:1,b:2});

console.log(resultado)

