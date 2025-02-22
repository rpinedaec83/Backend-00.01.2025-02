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
    let num = parseInt(prompt("Escribe un numero"))
    
    if (num > 0) {
        alert('El número es positivo.')
        console.log('El número es positivo.')
    } else  {
        lert('El número es negativo.')
        console.log('El número no es negativo.')
    }
}
