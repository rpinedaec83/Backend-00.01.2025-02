
console.log("Hola desde script.js");
document.getElementById("Titulo").innerHTML = "Hola desde el titulo"

let nombre= prompt("Ingerese su nombre");

document.getElementById("titulo").innerHTML = "Hola" + nombre
document.getElementById("btnOtro").addEventListener("click", function()){
    let apellido = document.getElementById("apellido").value;
    document

}

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


let primerNumero = 10;
let segundoNumero = 20;

let suma = primerNumero + segundoNumero;
let resta = primerNumero - segundoNumero;
let multiplicacion = primerNumero * segundoNumero;
let division = primerNumero / segundoNumero;
let residuo = primerNumero % segundoNumero;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);
console.log("El residuo es: " + residuo);

let num1 = 10;
let num2 = 20;
let num3 = 30;

let promedio = (num1 + num2 + num3) / 3;

console.log("El promedio es: " + promedio);

let base = 10;
let altura = 20;

let area = base * altura / 2;

console.log("El area es: " + area);

let radio = 10;
const PI = Math.PI;
let areaCirculo = PI * Math.pow(radio, 2);

console.log("El area del circulo es: " + areaCirculo);

let gradosCelsius = 100;

let gradosFahrenheit = gradosCelsius * 9 / 5 + 32;

console.log("Los grados Fahrenheit son: " + gradosFahrenheit);

let gradosFahrenheit2 = 212;

let gradosCelsius2 = (gradosFahrenheit2 - 32) * 5 / 9;

console.log("Los grados Celsius son: " + gradosCelsius2);

let gradosKelvin = 100;

let gradosCelsius3 = gradosKelvin - 273.15;

console.log("Los grados Celsius son: " + gradosCelsius3);

let gradosCelsius4 = 100;

let gradosKelvin2 = gradosCelsius4 + 273.15;

console.log("Los grados Kelvin son: " + gradosKelvin2);

let gradosFahrenheit3 = 100;

let gradosKelvin3 = (gradosFahrenheit3 + 459.67) * 5 / 9;

console.log("Los grados Kelvin son: " + gradosKelvin3);

let gradosKelvin4 = 100;

let gradosFahrenheit4 = gradosKelvin4 * 9 / 5 - 459.67;

console.log("Los grados Fahrenheit son: " + gradosFahrenheit4);

let gradosCelsius5 = 100


if(num1>num2){
    console.log("Es verdadero")
}
else{
    console.log("Es Falso")
}


if(num1<num2){
    console.log("Es verdadero")
}
else{
    console.log("Es Falso")
}

// el igual (=) es un Assignment Operator
let variable1 = 5;
let variable2 = "5";

// el doble igual (==) y el triple igual (===) som Comparison Operators
// la diferenvia entre los dos es que el primero solo compara el valor y el segundo compara el valor y el tipo de dato
if(variable1 === variable2){
    console.log("Dice que es verdadero")
}else{
    console.log("Dice que es false")
}

let edad = 41;
let nacionalidad = "Residente"

if(edad >= 18){
    console.log("Si Puede votar")
}
else{
    console.log("No puede votar")
}

//ccuando ponemos este formato: (var == x ? "valor por el true" : "valor por el false" Conditional (Ternary) Operator
console.log(edad>=18 ? "Si puede votar": "No puede votar");


// el operador && y el operador ||  son operadores logicos 
if(edad >= 18 && edad <= 65){
    console.log("Si Puede votar")
}
else{
    console.log("No puede votar")
}

if((edad >= 18 && edad <= 65) || !(nacionalidad == 'Extranjero')){
    console.log("Si Puede votar")
}
else if(true){

}
else{
    console.log("No puede votar")
}

/**
  
 Primera Proposicion	Operador	Segunda Proposicion	Resultado
VERDADERO	&&	VERDADERO	VERDADERO
VERDADERO	&&	FALSO	FALSO
FALSO	&&	VERDADERO	FALSO
FALSO	&&	FALSO	FALSO
			
VERDADERO	||	VERDADERO	VERDADERO
VERDADERO	||	FALSO	VERDADERO
FALSO	||	VERDADERO	VERDADERO
FALSO	||	FALSO	FALSO 
 
 */



switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);

  let bandera = true;
  let dato = 0
  while(bandera){
    console.log(dato);
    //dato = dato+1;
    dato++;
    if(dato > 10){
        bandera= false;
    }
  }

  let arrHoobies=["Musica", "Pintura", "Gundam"];
arrHoobies.push("papercraft");
console.log(arrHoobies)

for (let index = 0; index < arrHoobies.length; index++) {
    const element = arrHoobies[index];
    console.log(element)
}

console.log(arrHoobies[0])
console.log(arrHoobies[1])

let arrDatos= [3.14, true, "Palabras", ["otras palabras", "y otros datos"]];

console.log(arrDatos[3][1]);

let objPersona={
    nombre: "Roberto",
    segundoNombre: "David",
    apellido: "Pineda",
    edad: 41,
    documento: '001575291',
    hobbies: ["Gundam", "Musica", "Pintura"],
    padre: {
        nombre: "Rene",
        apellido: "Pineda"
    },
    madre:{
        nombre: "Miriam",
        apellido: "Lopez"
    }
};

let objPersona2={
    nombre: "David",
    imagen:"https://plamoscale.com/images/fog1labs1/thumbs/70.jpg",
    
    segundoNombre: "David",
    apellido: "Lopez",
    edad: 25,
    documento: '0015752',
    hobbies: ["Futbol", "Teatro", "Destruir"],
    padre: {
        nombre: "Rene",
        apellido: "Pineda"
    },
    madre:{
        nombre: "Miriam",
        apellido: "Lopez"
    }
};

let arrPersonas = [objPersona,objPersona2];

console.log(objPersona.nombre)

console.log(objPersona.padre.nombre)

console.log(arrPersonas)

