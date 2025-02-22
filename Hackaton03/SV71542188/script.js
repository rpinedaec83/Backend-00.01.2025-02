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

function ejercicio18(){
    let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs que desea comprar:"));
    let precioPorCD;
    if (cantidadCDs <= 9) {
        precioPorCD = 10;
    } else if (cantidadCDs <= 99) {
        precioPorCD = 8;
    } else if (cantidadCDs <= 499) {
        precioPorCD = 7;
    } else {
        precioPorCD = 6;
    }
    let precioTotal = cantidadCDs * precioPorCD;
    let gananciaVendedor = precioTotal * 0.0825;
    alert("El precio total para el cliente es: $" + precioTotal.toFixed(2));
    alert("La ganancia para el vendedor es: $" + gananciaVendedor.toFixed(2));
}

function ejercicio19() {
    let identificador = parseInt(prompt("Ingrese el identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6):"));

    if (diasTrabajados < 0 || diasTrabajados > 6) {
        alert("Cantidad de días trabajados no válida. Por favor ingrese un valor entre 0 y 6.");
        return;
    }

    let salarioDiario;

    switch (identificador) {
        case 1:
            salarioDiario = 56;
            break;
        case 2:
            salarioDiario = 64;
            break;
        case 3:
            salarioDiario = 80;
            break;
        case 4:
            salarioDiario = 48;
            break;
        default:
            alert("Identificador de empleado no válido.");
            return;
    }

    let salarioTotal = salarioDiario * diasTrabajados;
    alert("El salario total a pagar al empleado es: $" + salarioTotal.toFixed(2));
}

function ejercicio20() {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
        numeros.push(parseInt(prompt(`Ingrese el número ${i + 1}:`)));
    }
    let pares = numeros.filter(num => num % 2 === 0).length;
    alert(`Cantidad de números pares: ${pares}`);
    let mayor = Math.max(...numeros);
    alert(`El número mayor es: ${mayor}`);
    if (numeros[2] % 2 === 0) {
        let cuadradoSegundo = Math.pow(numeros[1], 2);
        alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
    }
    if (numeros[0] < numeros[3]) {
        let media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
        alert(`La media de los 4 números es: ${media}`);
    }
    if (numeros[1] > numeros[2]) {
        if (numeros[2] >= 50 && numeros[2] <= 700) {
            let suma = numeros.reduce((a, b) => a + b, 0);
            alert(`La suma de los 4 números es: ${suma}`);
        }
    }
}

function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (numero < 0) {
        alert("El factorial no está definido para números negativos.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    alert("El factorial de " + numero + " es: " + factorial);
}

function ejercicio22() {
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
    if (n < 0) {
        alert("Por favor ingrese un número positivo.");
        return;
    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    alert("La suma de los primeros " + n + " números es: " + suma);
}

function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));
    if (n < 0) {
        alert("Por favor ingrese un número positivo.");
        return;
    }
    let sumaImpares = 0;
    for (let i = 1; i <= n; i += 2) {
        sumaImpares += i;
    }
    alert("La suma de los números impares menores o iguales a " + n + " es: " + sumaImpares);
}

function ejercicio24() {
    let sumaPares = 0;
    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }
    alert("La suma de todos los números pares hasta el 1000 es: " + sumaPares);
}

function ejercicio25() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (numero < 0) {
        alert("El factorial no está definido para números negativos.");
        return;
    }
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
        factorial *= i;
        i++;
    }
    alert("El factorial de " + numero + " es: " + factorial);
}