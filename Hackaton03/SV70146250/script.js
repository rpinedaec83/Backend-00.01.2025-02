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
num = parseFloat(num); // Convertir a número decimal
if (!num) { //Evalua que el dato ingresado sea Float, igual que el num.
    alert("Error: Debe ser un numero");
}else{
    // Evaluar si no es entero, Math.trunc elimina el decimal
    if (Math.trunc(num) !== num) { //!== Diferencia estricta
        alert("OJO: Solo se evalua la parte entera");
    }
    // Extraer parte entera y hacer positivo
    num = Math.trunc(Math.abs(num)); 

    // Evaluar si tiene 3 digitos
    if (num >= 100 && num <= 999) {
        alert("[Tiene 3 Digitos]");
    } else {
        alert("[No tiene 3 Digitos]");
    }
}
}