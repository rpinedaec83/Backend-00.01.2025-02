function ejercicio01(){
    let numero  = parseInt(prompt("Escribe un numero"))
    if(numero>99 && numero<1000){
        alert("Tiene 3 digitos")
    }
    else{
        alert("No tiene 3 digitos")
    }
}

function ejercicio02(){
    let numero =parseInt(prompt("Escriba cualquier numero entero"))
    if(numero>0){
        alert("Es un numero positivo")
    }
    else{
        alert("Es un numero negativo")
    }
}

function ejercicio03(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 10 === 4) {
        alert("El número termina en 4");
    } else {
        alert("El número no termina en 4");
    }
}

function ejercicio04(){
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt("Ingrese un número:")));
    }
    numeros.sort((a, b) => a - b);
    alert("Los números de menor a mayor son: " + numeros.join(", "));
}

function ejercicio05(){
    const precioZapato = 80;
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar:"));
    let totalCompra = cantidadZapatos * precioZapato;
    let descuento = 0;

    if (cantidadZapatos > 30) {
        descuento = 0.40;
    } else if (cantidadZapatos > 20) {
        descuento = 0.20;
    } else if (cantidadZapatos > 10) {
        descuento = 0.10;
    }

    let totalDescuento = totalCompra * descuento;
    let totalPagar = totalCompra - totalDescuento;

    alert("El total de la compra es: $" + totalCompra.toFixed(2));
    alert("El descuento aplicado es: $" + totalDescuento.toFixed(2));
    alert("El total a pagar es: $" + totalPagar.toFixed(2)); 
}

function ejercicio06(){
    const pagoPorHora = 20;
    const pagoPorHoraExtra = 25;
    const horasNormales = 40;

    let horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas en la semana:"));
    let sueldoSemanal;

    if (horasTrabajadas <= horasNormales) {
        sueldoSemanal = horasTrabajadas * pagoPorHora;
    } else {
        let horasExtras = horasTrabajadas - horasNormales;
        sueldoSemanal = (horasNormales * pagoPorHora) + (horasExtras * pagoPorHoraExtra);
    }

    alert("El sueldo semanal es: $" + sueldoSemanal.toFixed(2));
}

function ejercicio07(){
    const precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    let descuento = 0;

    switch (tipoMembresia) {
        case 'A':
            descuento = 0.10;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresía no válida");
            return;
    }

    let totalDescuento = precioHelado * descuento;
    let totalPagar = precioHelado - totalDescuento;

    alert("El precio del helado es: $" + precioHelado.toFixed(2));
    alert("El descuento aplicado es: $" + totalDescuento.toFixed(2));
    alert("El total a pagar es: $" + totalPagar.toFixed(2));
}

function ejercicio08(){
    let n1 = parseInt(prompt("Ingrese la primera nota:")); 
    let n2 = parseInt(prompt("Ingrese la segunda nota:"));
    let n3 = parseInt(prompt("Ingrese la tercera nota:"));
    let promedio = (n1 + n2 + n3) / 3;
    if(promedio >= 13)
        alert("Aprobado");
    else
        alert("Desaprobado");{
        }
    alert("El promedio de las notas es: " + promedio.toFixed(2));
    alert("El estudiante se encuentra " + (promedio >= 13 ? "Aprobado" : "Desaprobado"));
    }

function ejercicio09(){
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    let aumento = 0;

    if (salarioActual > 2000) {
        aumento = 0.05;
    } else {
        aumento = 0.10;
    }

    let montoAumento = salarioActual * aumento;
    let nuevoSalario = salarioActual + montoAumento;

    alert("El aumento es de: $" + montoAumento.toFixed(2));
    alert("El nuevo salario es de: $" + nuevoSalario.toFixed(2));
}

function ejercicio10(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

function ejercicio11(){
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    alert("El número mayor es: " + mayor); 
}

function ejercicio12(){
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        alert("El número mayor es: " + num1);
    } else 
        alert("El número mayor es: " + num2);
}
