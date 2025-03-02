/*  Forma sin funciones flecha
function sumaDosNumeros(num1,num2){
    const suma=num1+num2;
    return suma;
} */ 

//  Con funcion flecha
const sumaDosNumeros=(num1,num2)=>(num1+num2);

//Llama funcion
let data=sumaDosNumeros(3,7);

//Muestra datos en consola
console.log(data);