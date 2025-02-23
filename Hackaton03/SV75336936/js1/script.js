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
    let numStr = prompt('Ingrese un número: '); // Guardamos la entrada como string
    let num = parseInt(numStr);

    if (isNaN(num)) {
        alert('Por favor, ingrese un número válido.');
        console.log('Por favor, ingrese un número válido.');
    } else if (numStr.endsWith('4')) { // Comprobamos el último carácter de la cadena
        alert('El número termina en 4.');
        console.log('El número termina en 4.');
    } else {
        alert('El número no termina en 4.');
        console.log('El número no termina en 4.');
    }
}

function ejercicio04() {
    
    let num1, num2, num3, menor, medio, mayor;
  
    num1 = parseInt(prompt("ingrese un numero"));
    num2 = parseInt(prompt("ingrese un numero"));
    num3 = parseInt(prompt("ingrese un numero"));
  
    if (num1 <= num2 && num1 <= num3) {
      menor = num1;
      if (num2 <= num3) {
        medio = num2;
        mayor = num3;
      } else {
        medio = num3;
        mayor = num2;
      }
    } else {
      if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
          medio = num1;
          mayor = num3;
        } else {
          medio = num3;
          mayor = num1;
        }
      } else {
        menor = num3;
        if (num1 < num2) {
          medio = num1;
          mayor = num2;
        } else {
          medio = num2;
          mayor = num1;
        }
      }
    }
    console.log("Numero 1: ", num1)
    console.log("Numero 2: ", num2)
    console.log("Numero 3: ", num3)
    alert( `Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}` );
    console.log(`Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`);
  }

function ejercicio05() {
  
    let cantidadZapatos = parseInt(prompt('Ingrese cantidad de zapatos comprados: '))
    console.log('Ingrese cantidad de zapatos comprados: ', cantidadZapatos)
    const precio = 80;
    let descuento = 0;

    if (isNaN(cantidadZapatos) || cantidadZapatos < 0) {
        alert("Por favor, ingrese un número válido.");
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    //operacion
    let totalOriginal = cantidadZapatos * precio;
    let totalPagar = cantidadZapatos * precio;
  
    if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
      descuento = totalOriginal * 0.1;
      totalPagar = totalOriginal - descuento;
    } else {
      if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
        descuento = totalOriginal * 0.2;
        totalPagar = totalOriginal - descuento;
      } else {
        if (cantidadZapatos >= 30) {
          descuento = totalOriginal * 0.4;
          totalPagar = totalOriginal - descuento;
        }
      }
    }
    alert(`Cantidad comprada: ${cantidadZapatos}`);
    alert(`Total Original: S/. ${totalOriginal}`);
    alert(`Descuento: S/. ${descuento}`);
    alert(`Total a pagar: S/. ${totalPagar}`);
    console.log(`Cantidad comprada: ${cantidadZapatos}`);
    console.log(`Total Original: S/. ${totalOriginal}`);
    console.log(`Descuento: S/. ${descuento}`);
    console.log(`Total a pagar: S/. ${totalPagar}`);
}
 
function ejercicio06() {
  
    let nota1 = parseInt(prompt('Ingrese horas Trabajadas: '))
    console.log('Ingrese horas trabajadas: ', nota1)
    const hNormales = 40;
    let hExtras;
    const pago = 20;
    const pagoExtra = 25
    let montoDescuento

    if (isNaN(nota1) || nota1 < 0) {
        alert("Por favor, ingrese un número válido.");
        console.log("Por favor, ingrese un número válido.");
        return;
    }
    
  
    if (nota1 <= hNormales) {
      montoDescuento = nota1 * pago;
    } else {
       hExtras = nota1 - hNormales
       montoDescuento = (hNormales * pago) + (hExtras * pagoExtra)
      }
    
    alert(`Monto de Descuuento: S/.  ${montoDescuento}`);
    console.log(`Monto de Descuuento: S/.  ${montoDescuento}`);
}

function ejercicio07() {
  
    let precio = parseInt(prompt('Ingrese el precio de la compra: '));
    let tipoMembresia = prompt('Ingrersar tipo de Membresia (A, B o C):').toUpperCase();
    console.log('Ingrese el precio de la compra: ', precio)
    console.log('Ingrersar tipo de Membresia (A, o C):', tipoMembresia)
    let descuento = 0 
    let precioFinal , montoDescuento

    if (isNaN(precio) || precio < 0) {
        alert("Por favor, ingrese un número válido.");
        console.log("Por favor, ingrese un número válido.");
        return;
    }
    
  
   switch (tipoMembresia){
        case "A":
            descuento = 0.10;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresía no válido. Ingrese A, B o C.");
            console.log("Tipo de membresía no válido.");
            return;
}

    montoDescuento = precio * descuento
    precioFinal = precio - montoDescuento

    
    alert(`Monto de Descuuento: S/.  ${montoDescuento}`);
    console.log(`Monto de Descuuento: S/.  ${montoDescuento}`);
    alert(`Precio a pagar: S/.  ${precioFinal}`);
    console.log(`Precio a pagar: S/.  ${precioFinal}`);
}

function ejercicio08() {
  
    let nota1 = parseInt(prompt('Ingresar Nota 1: '))
    let nota2 = parseInt(prompt('Ingresar Nota 2: '))
    let nota3 = parseInt(prompt('Ingresar Nota 3: '))
    console.log('Ingrese nota 1: ', nota1)
    console.log('Ingrese nota 2: ', nota2)
    console.log('Ingrese nota 3: ', nota3)

    if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 >20 ||
        nota2 < 0 || nota2 >20 ||
        nota3 < 0 || nota3 >20    
    ) {
        alert("Por favor, ingrese un número válido.");
        console.log("Por favor, ingrese un número válido.");
        return;
    }
    
    let promedio = ((nota1 + nota2 + nota3) / 3);
  
    if (promedio >= 10.5 ) {
        alert( `Aprobado, tu promedio es: ${promedio}`);
        console.log("Aprobado");
        console.log("Promedio: ", promedio);
    } else if(promedio < 10.5) {
        alert( `Desaprobado, tu promedio es: ${promedio}`);
        console.log("Desaprobado");
        console.log("Promedio: ", promedio);
      }

}

function ejercicio09() {
  
    let sueldoActual = parseInt(prompt('Ingresar sueldo Actual: '))
    console.log('Ingrese suledo Actual ', sueldoActual)
    let aumento, nSueldo
    
    if (isNaN(sueldoActual) || sueldoActual < 0) {
        alert('Por favor, ingrese un número válido.')
        console.log('Por favor, ingrese un número válido.')
        return;
    }
  
    if (sueldoActual > 2000 ) {
        aumento = sueldoActual * 0.05
    } else {
        aumento = sueldoActual * 0.10
      }

    nSueldo = sueldoActual + aumento

    alert(`El aumento es: S/.  ${aumento}`);
    alert(`El nuevo sueldo es: S/.  ${nSueldo}`);
    console.log(`El aumento es: S/.  ${aumento}`);
    console.log(`El nuevo sueldo es: S/.  ${nSueldo}`);

}

function ejercicio10() {
  
    let numero = parseInt(prompt("Ingrese un número entero:"));

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        console.log("Entrada inválida. Asegúrese de ingresar un número entero.");
        return;
    }

    if (numero % 2 === 0) {
        alert(`El número ${numero} es PAR`);
        console.log(`El número ${numero} es PAR`);
    } else {
        alert(`El número ${numero} es IMPAR`);
        console.log(`El número ${numero} es IMPAR`);
    }
}
