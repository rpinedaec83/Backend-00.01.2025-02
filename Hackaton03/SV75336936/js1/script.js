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
    
    if (isNaN(num)) {
        alert('Por favor, ingrese un número válido.')
        console.log('Por favor, ingrese un número válido.')
    } else if (num < 0) {
        alert('El número es negativo.')
        console.log('El número es negativo.')
    } else if (num > 0){
        alert('El número no es negativo.')
        console.log('El número no es negativo.')
    }
}

function ejercicio03(){

    
        let num = parseInt(prompt('Ingrese un numero: ', numero));
        
        if (isNaN(num)) {
            alert('Por favor, ingrese un número válido.')
            console.log('Por favor, ingrese un número válido.')
        } else if (numero.endsWith('4')) {
            alert('El número termina en 4.')
            console.log('El número termina en 4.')
        } else if (num) {
            console.log('El número no termina en 4.');
            console.log('El número no termina en 4.')
        }
        

}