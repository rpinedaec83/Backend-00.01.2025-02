function ejercicio01(){
    /*
    Ejemplo profesor
    1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

    let numero  = parseInt(prompt("Escribe un numero"))
    if(numero>99 && numero<1000){
        alert("Tiene 3 digitos")
    }
    else{
        alert("No tiene 3 digitos")
    }
*/
let num = prompt("Ingrese un numero:"); // Pedir numero al usuario
num = parseFloat(num); // Convertir a numero decimal
if (!num) { //Evalua que el dato ingresado sea Float, igual que el num.
    alert("Error: Debe ser un numero");
}else{
    // Evaluar si no es entero, Math.trunc elimina el decimal
    if (Math.trunc(num) !== num) { //!== Diferencia estricta
        alert("OJO: Solo se evalua la parte entera");
    }
    // Extraer parte entera y hacer positivo
    num = Math.trunc(Math.abs(num)); //Math.abs saca el valor absoluto

    // Evaluar si tiene 3 digitos
    if (num >= 100 && num <= 999) {
        alert("[Tiene 3 Digitos]");
    } else {
        alert("[No tiene 3 Digitos]");
    }
}
}

function ejercicio02(){
let num = parseFloat(prompt("Ingrese un numero entero:")); // Pedir numero, admite decimal
if (!num) { //Evalua que el dato ingresado sea Float, igual que el num.
        alert("Error: Debe ser un numero entero");
    }else{  
    //Evaluar si no es entero para advertir
         if (Math.trunc(num) !== num){
         alert("*ADVERTENCIA*NO*ES*ENTERO*")
        }else{ 		//Evalua si es negativo
         if ( num < 0 ){
             alert("[El numero es Negativo]")
         }else{
             alert("[El numero es NO Negativo]")
         }
     }
}
}

function ejercicio03(){
    let num = prompt("Ingrese un numero:"); // Pedir numero al usuario
    if (!isNaN(num)===false){ //Validacion que sea un numero
        alert("Error: Debe ser un numero ") 
        }else{
        // Subcadena extrae de la cadena num, la ultima cifra.
        // Longitud determina el tamaño de la cadena, por tanto la ultima cifra.
        // digito almacena el numero resultado de convertir con Number
     
        let digito = Number(num.substring(num.length - 1));

        // Evalua el ultimo digito
        if (digito == 4) {
            alert("Termina en 4");
        } else {
            alert("No termina en 4");
        }
}
}

function ejercicio04(){
    let num1 = parseInt(prompt("Ingrese 1er numero:"));
    let num2 = parseInt(prompt("Ingrese 2do numero:"));
    let num3 = parseInt(prompt("Ingrese 3er numero:"));


    if (!num1 || !num2 || !num3){ //Validacion que sea un numero
            alert("ADVERTENCIA: *SOLO ENTEROS*") 
        }else{
        if(num1>num2){
            let temporal=num2
            num2=num1
            num1=temporal
        }
        if(num1>num3){
            let temporal=num3
            num3=num1
            num1=temporal
        }
        if(num2>num3){
            let temporal=num3
            num3=num2 
            num2=temporal
        }
        alert(`Orden ascendente: ${num1} - ${num2} - ${num3}`)
    }
}