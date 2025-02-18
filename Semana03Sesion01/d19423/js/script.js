/*alert("Hola")
console.log("Hola desde el script.js")
document.getElementById("titulo").innerHTML = "Hola desde el titulo"

let nombre = prompt("Ingrese su nombre");

document.getElementById("titulo").innerHTML = "Hola " + nombre
document.getElementById("btnOtro").addEventListener("click", function(){

 let apellido =   document.getElementById("apellido").value;
    document.getElementById("titulo").innerHTML = "Hola " + nombre + " " + apellido
});*/

/*

*/

//
//
// var nombre = "Roberto";
// console.log(nombre);
// nombre  = "David";
// console.log(nombre);
// var nombre = "Juan";

// let apellido = "Perez";
// const PI = 3.14159;
// //PI = 3.14;
// apellido= 99;

document.getElementById("btnSumar").addEventListener("click", function(){

    let num1 = parseInt(document.getElementById("primerNumero").value);
    let num2 = parseInt(document.getElementById("segundoNumero").value);
    let suma = num1 + num2;
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;

});
