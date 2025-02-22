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

function ejercicio13(){
    let letra = prompt("Ingrese una letra:").toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra es una vocal");
    } else {
        alert("La letra no es una vocal");
    }
}

function ejercicio14(){
    let numero = parseInt(prompt("Ingrese un número del 1 al 9:"));
    if (numero < 1 || numero > 9) {
        alert("El número debe estar entre 1 y 9");
        return;
    }
    let esPrimo = true;
    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        alert("El número " + numero + " es primo");
    } else {
        alert("El número " + numero + " no es primo");
    }
}

function ejercicio15(){
    let opcion = prompt("Seleccione la conversión que desea realizar:\n1. Centímetros a pulgadas\n2. Libras a kilogramos");
    if (opcion === '1') {
        let centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
        let pulgadas = centimetros / 2.54;
        alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas");
    } else if (opcion === '2') {
        let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
        let kilogramos = libras / 2.20462;
        alert(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos");
    } else {
        alert("Opción no válida");
    }
}

function ejercicio16(){
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let dia;
    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número no válido. Por favor ingrese un número del 1 al 7.";
    }
    alert(dia);
}

function ejercicio17(){
    let hora = parseInt(prompt("Ingrese la hora (0-23):"));
    let minutos = parseInt(prompt("Ingrese los minutos (0-59):"));
    let segundos = parseInt(prompt("Ingrese los segundos (0-59):"));

    if (hora < 0 || hora > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
        alert("Hora no válida. Por favor ingrese valores correctos.");
        return;
    }
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        hora++;
    }
    if (hora === 24) {
        hora = 0;
    }
    alert("La hora un segundo después es: " + hora.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0'));
}