function ejercicio01(){
    //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

    let numero  = parseInt(prompt("Escribe un numero"))
    if(numero>99 && numero<1000){
        alert("Tiene 3 digitos")
    }
    else{
        alert("No tiene 3 digitos")
    }
}

function ejercicio02(){


    let num = parseInt(numero);
    
    if (isNaN(num)) {
        console.log('Por favor, ingrese un número válido.');
    } else if (num < 0) {
        console.log('El número es negativo.');
    } else {
        console.log('El número no es negativo.');
    }
}
