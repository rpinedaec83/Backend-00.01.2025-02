// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01() {
    let numero;
    
    while (true) {
        let input = prompt("Escribe un número:");
        numero = parseInt(input);                 

        if (!isNaN(numero) && input.trim() === input && input !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número válido sin letras ni espacios.");
        }
    }

    if ((numero >= 100 && numero <= 999) || (numero <= -100 && numero >= -999)) {
        alert("El número tiene 3 dígitos.");
    } else {
        alert("El número no tiene 3 dígitos.");
    }
}

// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
    let numero;
    
    while (true) {
        let input = prompt("Escribe un número entero:");
        numero = parseInt(input);

        if (!isNaN(numero) && input.trim() === input && input !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero válido sin letras ni espacios.");
        }
    }

    if (numero < 0) {
        alert("El número es negativo.");
    } else if (numero > 0) {
        alert("El número es positivo.");
    } else {
        alert("El número es cero.");
    }
}

// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {
    let numero;
    
    while (true) {
        let input = prompt("Escribe un número:");
        numero = parseInt(input);

        if (!isNaN(numero) && input.trim() === input && input !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número válido sin letras ni espacios.");
        }
    }

    if (numero % 10 === 4) {
        alert("El número termina en 4.");
    } else {
        alert("El número no termina en 4.");
    }
}

// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {
    let numero1, numero2, numero3;
    
    while (true) {
        let input1 = prompt("Escribe el primer número:");
        let input2 = prompt("Escribe el segundo número:");
        let input3 = prompt("Escribe el tercer número:");

        numero1 = parseInt(input1);
        numero2 = parseInt(input2);
        numero3 = parseInt(input3);

        if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) &&
            input1.trim() === input1 && input2.trim() === input2 && input3.trim() === input3 &&
            input1 !== "" && input2 !== "" && input3 !== "") {
            break;
        } else {
            alert("Por favor, ingresa tres números válidos sin letras ni espacios.");
        }
    }

    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);

    alert("Los números de menor a mayor son: " + numeros.join(", "));
}

// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05() {
    let cantidadZapatos;
    const precioPorZapato = 80;

    while (true) {
        let input = prompt("¿Cuántos zapatos deseas comprar?");
        cantidadZapatos = parseInt(input);

        if (!isNaN(cantidadZapatos) && cantidadZapatos > 0 && input.trim() === input && input !== "") {
            break; 
        } else {
            alert("Por favor, ingresa una cantidad válida de zapatos.");
        }
    }

    let totalCompra = cantidadZapatos * precioPorZapato;

    let descuento = 0;
    if (cantidadZapatos > 30) {
        descuento = 0.40;
    } else if (cantidadZapatos >= 20) {
        descuento = 0.20;
    } else if (cantidadZapatos >= 10) {
        descuento = 0.10;
    }

    let totalConDescuento = totalCompra * (1 - descuento);

    alert("Total de la compra sin descuento: $" + totalCompra.toFixed(2));
    alert("Descuento aplicado: " + (descuento * 100) + "%");
    alert("Total con descuento: $" + totalConDescuento.toFixed(2));
}

// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
function ejercicio06() {
    let horasTrabajadas;
    const tarifaPorHoraRegular = 20;
    const tarifaPorHoraExtra = 25;

    while (true) {
        let input = prompt("¿Cuántas horas trabajaste esta semana?");
        horasTrabajadas = parseInt(input);

        if (!isNaN(horasTrabajadas) && horasTrabajadas >= 0 && input.trim() === input && input !== "") {
            break;
        } else {
            alert("Por favor, ingresa una cantidad válida de horas trabajadas.");
        }
    }

    let sueldo;
    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * tarifaPorHoraRegular;
    } else {
        let horasExtras = horasTrabajadas - 40;
        sueldo = (40 * tarifaPorHoraRegular) + (horasExtras * tarifaPorHoraExtra);
    }

    alert("Tu sueldo semanal es: $" + sueldo.toFixed(2));
}

// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
function ejercicio07() {
    let tipoMembresia;
    let precioHelado;
    
    while (true) {
        tipoMembresia = prompt("Ingresa tu tipo de membresía (A, B, C):").toUpperCase();
        
        if (tipoMembresia === "A" || tipoMembresia === "B" || tipoMembresia === "C") {
            break;
        } else {
            alert("Por favor, ingresa un tipo de membresía válido: A, B o C.");
        }
    }

    while (true) {
        let inputPrecio = prompt("¿Cuál es el precio del helado?");
        precioHelado = parseFloat(inputPrecio);
        
        if (!isNaN(precioHelado) && precioHelado > 0 && inputPrecio.trim() === inputPrecio && inputPrecio !== "") {
            break;
        } else {
            alert("Por favor, ingresa un precio válido para el helado.");
        }
    }

    let descuento = 0;
    if (tipoMembresia === "A") {
        descuento = 0.10;
    } else if (tipoMembresia === "B") {
        descuento = 0.15;
    } else if (tipoMembresia === "C") {
        descuento = 0.20;
    }

    let precioConDescuento = precioHelado * (1 - descuento);

    alert("El precio original del helado es: $" + precioHelado.toFixed(2));
    alert("Descuento aplicado: " + (descuento * 100) + "%");
    alert("El precio final con descuento es: $" + precioConDescuento.toFixed(2));
}

// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio08() {
    let nota1, nota2, nota3;

    while (true) {
        let inputNota1 = prompt("Ingresa la primera nota:");
        let inputNota2 = prompt("Ingresa la segunda nota:");
        let inputNota3 = prompt("Ingresa la tercera nota:");
        
        nota1 = parseFloat(inputNota1);
        nota2 = parseFloat(inputNota2);
        nota3 = parseFloat(inputNota3);

        if (
            !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) &&
            nota1 >= 0 && nota1 <= 20 &&
            nota2 >= 0 && nota2 <= 20 &&
            nota3 >= 0 && nota3 <= 20
        ) {
            break;
        } else {
            alert("Por favor, ingresa notas válidas entre 0 y 10.");
        }
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    let estado = promedio >= 11 ? "Aprobado" : "No Aprobado";

    alert("El promedio de las notas es: " + promedio.toFixed(2));
    alert("Estado: " + estado);
}

// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio09() {
    let salario;

    while (true) {
        let inputSalario = prompt("Ingresa el salario actual del trabajador:");
        salario = parseFloat(inputSalario);

        if (!isNaN(salario) && salario >= 0 && inputSalario.trim() === inputSalario && inputSalario !== "") {
            break;
        } else {
            alert("Por favor, ingresa un salario válido (número positivo) sin letras ni espacios.");
        }
    }

    let aumento = 0;
    if (salario > 2000) {
        aumento = salario * 0.05;
    } else {
        aumento = salario * 0.10;
    }

    let salarioFinal = salario + aumento;

    alert("Salario actual: $" + salario.toFixed(2));
    alert("Aumento: $" + aumento.toFixed(2));
    alert("Salario final con aumento: $" + salarioFinal.toFixed(2));
}

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número:");
        numero = parseInt(inputNumero);

        if (!isNaN(numero) && Number.isInteger(numero) && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número válido sin letras ni espacios.");
        }
    }

    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}

// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11() {
    let numero1, numero2, numero3;

    while (true) {
        let input1 = prompt("Ingresa el primer número:");
        let input2 = prompt("Ingresa el segundo número:");
        let input3 = prompt("Ingresa el tercer número:");

        numero1 = parseFloat(input1);
        numero2 = parseFloat(input2);
        numero3 = parseFloat(input3);

        if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) &&
        input1.trim() === input1 && input2.trim() === input2 && input3.trim() === input3 &&
        input1 !== "" && input2 !== "" && input3 !== "") {
            break;
        } else {
            alert("Por favor, ingresa tres números válidos sin letras ni espacios.");
        }
    }

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    alert("El número mayor es: " + mayor);
}

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12() {
    let numero1, numero2;

    while (true) {
        let input1 = prompt("Ingresa el primer número:");
        let input2 = prompt("Ingresa el segundo número:");

        numero1 = parseFloat(input1);
        numero2 = parseFloat(input2);

        if (!isNaN(numero1) && !isNaN(numero2) &&
        input1.trim() === input1 && input2.trim() === input2 &&
        input1 !== "" && input2 !== "") {
            break;
        } else {
            alert("Por favor, ingresa dos números válidos sin letras ni espacios.");
        }
    }

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    alert("El número mayor es: " + mayor);
}

// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {
    let letra;

    while (true) {
        let inputLetra = prompt("Ingresa una letra:");
        letra = inputLetra.trim().toLowerCase();

        if (letra.length === 1 && /^[a-z]$/.test(letra)) {
            break;
        } else {
            alert("Por favor, ingresa una sola letra válida.");
        }
    }

    if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
        alert("La letra '" + letra + "' es una vocal.");
    } else {
        alert("La letra '" + letra + "' no es una vocal.");
    }
}

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al 9 y determine si es un número primo.
function ejercicio14() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero entre 1 y 9:");
        numero = parseInt(inputNumero);

        // Verificar que el número esté entre 1 y 9 y sea un número entero válido
        if (!isNaN(numero) && numero >= 1 && numero <= 9 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero entre 1 y 9, sin letras ni espacios");
        }
    }

    let esPrimo = true;

    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        alert("El número " + numero + " es un número primo.");
    } else {
        alert("El número " + numero + " no es un número primo.");
    }
}

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    let centimetros, libras;

    while (true) {
        let inputCentimetros = prompt("Ingresa la longitud en centímetros:");
        let inputLibras = prompt("Ingresa el peso en libras:");

        centimetros = parseFloat(inputCentimetros);
        libras = parseFloat(inputLibras);

        if (!isNaN(centimetros) && !isNaN(libras) &&
            inputCentimetros.trim() === inputCentimetros && inputLibras.trim() === inputLibras &&
            inputCentimetros !== "" && inputLibras !== "") {
            break;
        } else {
            alert("Por favor, ingresa valores numéricos válidos para ambos campos.");
        }
    }

    let pulgadas = centimetros / 2.54;
    let kilogramos = libras / 2.20462;

    alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
    alert(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");
}

// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número del 1 al 7 para saber el día de la semana:");
        numero = parseInt(inputNumero);

        if (!isNaN(numero) && numero >= 1 && numero <= 7 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número del 1 al 7, sin letras ni espacios");
        }
    }

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
            dia = "Número inválido";
    }

    alert("El día correspondiente al número " + numero + " es: " + dia);
}

// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {
    let hora, minuto, segundo;

    while (true) {
        let inputHora = prompt("Ingresa la hora en formato de 24 horas (HH:mm:ss):");

        let tiempo = inputHora.split(":");

        // Verificar que el formato sea correcto y que cada parte sea un número válido
        if (tiempo.length === 3 && !isNaN(tiempo[0]) && !isNaN(tiempo[1]) && !isNaN(tiempo[2]) &&
            tiempo[0].trim() === tiempo[0] && tiempo[1].trim() === tiempo[1] && tiempo[2].trim() === tiempo[2] &&
            tiempo[0] !== "" && tiempo[1] !== "" && tiempo[2] !== "" &&
            tiempo[0] >= 0 && tiempo[0] < 24 && tiempo[1] >= 0 && tiempo[1] < 60 && tiempo[2] >= 0 && tiempo[2] < 60) {
            
            hora = parseInt(tiempo[0]);
            minuto = parseInt(tiempo[1]);
            segundo = parseInt(tiempo[2]);
            break;
        } else {
            alert("Por favor, ingresa una hora válida en formato HH:mm:ss.");
        }
    }

    segundo++;

    if (segundo === 60) {
        segundo = 0;
        minuto++;
    }

    if (minuto === 60) {
        minuto = 0;
        hora++;
    }

    if (hora === 24) {
        hora = 0;
    }

    let nuevaHora = hora.toString().padStart(2, "0");
    let nuevoMinuto = minuto.toString().padStart(2, "0");
    let nuevoSegundo = segundo.toString().padStart(2, "0");

    alert("La hora dentro de un segundo será: " + nuevaHora + ":" + nuevoMinuto + ":" + nuevoSegundo);
}

/* 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

$10. Si se compran unidades separadas hasta 9.

$8. Si se compran entre 10 unidades hasta 99.

$7. Entre 100 y 499 unidades.

$6. Para mas de 500 unidades.

La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
*/
function ejercicio18() {
    let cantidadCDs;

    while (true) {
        let inputCantidad = prompt("Ingresa la cantidad de CDs a vender:");
        cantidadCDs = parseInt(inputCantidad);

        if (!isNaN(cantidadCDs) && cantidadCDs > 0 && inputCantidad.trim() === inputCantidad && inputCantidad !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número válido y positivo para la cantidad de CDs, sin letras ni espacios.");
        }
    }

    let precioPorCD;
    if (cantidadCDs >= 1 && cantidadCDs <= 9) {
        precioPorCD = 10;
    } else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
        precioPorCD = 8;
    } else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
        precioPorCD = 7;
    } else {
        precioPorCD = 6;
    }

    let totalCliente = cantidadCDs * precioPorCD;

    let gananciaVendedor = totalCliente * 0.0825;

    alert("La cantidad de CDs es: " + cantidadCDs);
    alert("El precio por CD es: $" + precioPorCD);
    alert("El precio total para el cliente es: $" + totalCliente.toFixed(2));
    alert("La ganancia para el vendedor es: $" + gananciaVendedor.toFixed(2));
}

/* 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

Cajero (56$/día).

Servidor (64$/día).

Preparador de mezclas (80$/día).

Mantenimiento (48$/día).

El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
*/
function ejercicio19() {
    let idEmpleado, diasTrabajados;

    while (true) {
        idEmpleado = parseInt(prompt("Ingresa el número identificador del empleado (1-4):"));
        diasTrabajados = parseInt(prompt("Ingresa la cantidad de días trabajados (1-6):"));

        if (!isNaN(idEmpleado) && !isNaN(diasTrabajados) && diasTrabajados >= 1 && diasTrabajados <= 6) {
            if (idEmpleado >= 1 && idEmpleado <= 4) {
                break;
            } else {
                alert("El identificador del empleado debe ser entre 1 y 4.");
            }
        } else {
            alert("Por favor, ingresa valores válidos.");
        }
    }

    let salarioDiario;

    switch (idEmpleado) {
        case 1:
            salarioDiario = 56;  // Cajero
            break;
        case 2:
            salarioDiario = 64;  // Servidor
            break;
        case 3:
            salarioDiario = 80;  // Preparador de mezclas
            break;
        case 4:
            salarioDiario = 48;  // Mantenimiento
            break;
        default:
            salarioDiario = 0;
    }

    let salarioTotal = salarioDiario * diasTrabajados;

    alert("El salario total que se le debe pagar al empleado es: $" + salarioTotal);
}

/* 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

¿Cuántos números son Pares?

¿Cuál es el mayor de todos?

Si el tercero es par, calcular el cuadrado del segundo.

Si el primero es menor que el cuarto, calcular la media de los 4 números.

Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
*/
function ejercicio20() {
    let num1, num2, num3, num4;

    while (true) {
        let inputNum1 = prompt("Ingresa el primer número entero positivo:");
        let inputNum2 = prompt("Ingresa el segundo número entero positivo:");
        let inputNum3 = prompt("Ingresa el tercer número entero positivo:");
        let inputNum4 = prompt("Ingresa el cuarto número entero positivo:");

        num1 = parseInt(inputNum1);
        num2 = parseInt(inputNum2);
        num3 = parseInt(inputNum3);
        num4 = parseInt(inputNum4);

        // Validar que los números sean enteros positivos
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) &&
            num1 > 0 && num2 > 0 && num3 > 0 && num4 > 0 &&
            inputNum1.trim() === inputNum1 && inputNum2.trim() === inputNum2 && inputNum3.trim() === inputNum3 &&
            inputNum1 !== "" && inputNum2 !== "" && inputNum3 !== "") {
            break;
        } else {
            alert("Por favor, ingresa cuatro números enteros positivos, sin letras ni espacios.");
        }
    }

    // Contar cuántos números son pares
    let pares = 0;
    if (num1 % 2 === 0) pares++;
    if (num2 % 2 === 0) pares++;
    if (num3 % 2 === 0) pares++;
    if (num4 % 2 === 0) pares++;

    // Encontrar el mayor número
    let mayor = Math.max(num1, num2, num3, num4);

    // Operación 1: Si el tercero es par, calcular el cuadrado del segundo
    let cuadradoSegundo = null;
    if (num3 % 2 === 0) {
        cuadradoSegundo = num2 * num2;
    }

    // Operación 2: Si el primero es menor que el cuarto, calcular la media de los 4 números
    let media = null;
    if (num1 < num4) {
        media = (num1 + num2 + num3 + num4) / 4;
    }

    // Operación 3: Si el segundo es mayor que el tercero, verificar si el tercero está entre 50 y 700 y si cumple, calcular la suma
    let suma = null;
    if (num2 > num3) {
        if (num3 >= 50 && num3 <= 700) {
            suma = num1 + num2 + num3 + num4;
        }
    }

    alert("Cantidad de números pares: " + pares);
    alert("El número mayor es: " + mayor);

    if (cuadradoSegundo !== null) {
        alert("El cuadrado del segundo número es: " + cuadradoSegundo);
    }

    if (media !== null) {
        alert("La media de los 4 números es: " + media);
    }

    if (suma !== null) {
        alert("La suma de los 4 números es: " + suma);
    }
}

// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo para calcular su factorial:");
        numero = parseInt(inputNumero);

        if (!isNaN(numero) && numero >= 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    alert("El factorial de " + numero + " es: " + factorial);
}

// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22() {
    let n;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo para calcular la suma de los primeros n números:");

        n = parseInt(inputNumero);

        if (!isNaN(n) && n > 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    let suma = (n * (n + 1)) / 2;

    alert("La suma de los primeros " + n + " números es: " + suma);
}

// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23() {
    let n;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo:");
        n = parseInt(inputNumero);

        if (!isNaN(n) && n > 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {  // Si el número es impar
            suma += i;
        }
    }

    alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
}

// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert("La suma de todos los números pares hasta 1000 es: " + suma);
}

// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo para calcular su factorial:");
        numero = parseInt(inputNumero);

        if (!isNaN(numero) && numero >= 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    // Función recursiva para calcular el factorial
    function calcularFactorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * calcularFactorial(n - 1);
        }
    }

    let resultado = calcularFactorial(numero);

    alert("El factorial de " + numero + " es: " + resultado);
}

// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
    let dividendo, divisor;

    while (true) {
        let inputDividendo = prompt("Ingresa el dividendo (número entero positivo):");
        let inputDivisor = prompt("Ingresa el divisor (número entero positivo):");

        dividendo = parseInt(inputDividendo);
        divisor = parseInt(inputDivisor);

        if (!isNaN(dividendo) && !isNaN(divisor) && dividendo >= 0 && divisor > 0) {
            break;
        } else {
            alert("Por favor, ingresa números enteros positivos, con el divisor mayor que 0.");
        }
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert("El cociente es: " + cociente);
    alert("El resto es: " + resto);
}

// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27() {
    let suma = 0;
    let cantidad = 0;
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número positivo (ingresa un número negativo para terminar):");
        numero = parseFloat(inputNumero);

        if (numero < 0) {
            break;
        }

        if (numero >= 0) {
            suma += numero;
            cantidad++;
        } else {
            alert("Por favor, ingresa un número positivo.");
        }
    }

    if (cantidad > 0) {
        let media = suma / cantidad;
        alert("La media de los números ingresados es: " + media.toFixed(2));
    } else {
        alert("No se han ingresado números positivos.");
    }
}

// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28() {
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++; 
    } while (contador <= 100);

    alert("La suma de los primeros 100 números es: " + suma);
}

// 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;  
        contador++;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}

// 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}

// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31() {
    let sumaPares = 0, sumaImpares = 0;
    let cantidadPares = 0, cantidadImpares = 0;

    for (let i = 0; i < 10; i++) {
        let inputNumero = prompt("Ingresa un número:");
        let numero = parseInt(inputNumero);

        if (!isNaN(numero)) {
            
            if (numero % 2 === 0) {
                sumaPares += numero;
                cantidadPares++;
            } else {  
                sumaImpares += numero;
                cantidadImpares++;
            }
        } else {
            alert("Por favor, ingresa un número válido.");
            i--;  // Volver a pedir el número en caso de error
        }
    }

    let mediaPares = (cantidadPares > 0) ? sumaPares / cantidadPares : 0;
    let mediaImpares = (cantidadImpares > 0) ? sumaImpares / cantidadImpares : 0;

    alert("La media de los números pares es: " + mediaPares.toFixed(2));
    alert("La media de los números impares es: " + mediaImpares.toFixed(2));
}

// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
function ejercicio32() {
    let maxPoblacion = 0;
    let ciudadMaxima = "";

    let provincias = [
        { nombre: "Provincia 1", ciudades: ["Ciudad 1", "Ciudad 2", "Ciudad 3", "Ciudad 4", "Ciudad 5"] },
        { nombre: "Provincia 2", ciudades: ["Ciudad 6", "Ciudad 7", "Ciudad 8", "Ciudad 9"] },
        { nombre: "Provincia 3", ciudades: ["Ciudad 10", "Ciudad 11"] }
    ];

    for (let i = 0; i < provincias.length; i++) {
        let provincia = provincias[i];

        for (let j = 0; j < provincia.ciudades.length; j++) {
            let ciudad = provincia.ciudades[j];
            let poblacion = parseInt(prompt("Ingresa la población de " + ciudad + ":"));

            // Validar que la población ingresada sea un número válido
            if (isNaN(poblacion) || poblacion <= 0) {
                alert("Por favor, ingresa una población válida.");
                j--; // Volver a pedir la población de la ciudad
                continue;
            }

            if (poblacion > maxPoblacion) {
                maxPoblacion = poblacion;
                ciudadMaxima = ciudad;
            }
        }
    }

    alert("La ciudad con la población más grande es: " + ciudadMaxima + " con una población de " + maxPoblacion);
}

// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
    let continuar = true;

    while (continuar) {
        alert("El programa está en ejecución. Puedes hacer cualquier acción aquí.");

        let respuesta = prompt("¿Deseas continuar con el programa? (Sí/No):").toLowerCase();

        if (respuesta === "no" || respuesta === "n") {
            continuar = false; 
            alert("Gracias por usar el programa. ¡Hasta luego!");
        } else if (respuesta !== "sí" && respuesta !== "s") {
            alert("Por favor, ingresa 'Sí' para continuar o 'No' para salir.");
        }
    }
}

// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
function ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        alert("Tabla de multiplicar del " + i + ":");
        
        for (let j = 1; j <= 9; j++) {
            let resultado = i * j;
            alert(i + " x " + j + " = " + resultado);
        }
    }
}

// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio35() {
    let mayor = -Infinity; // Inicializar el mayor como el valor más bajo posible
    let menor = Infinity;  // Inicializar el menor como el valor más alto posible

    for (let i = 0; i < 20; i++) {
        let inputNumero = prompt("Ingresa el número " + (i + 1) + " de 20:");
        let numero = parseFloat(inputNumero);

        if (!isNaN(numero)) {
            if (numero > mayor) {
                mayor = numero;
            }

            if (numero < menor) {
                menor = numero;
            }
        } else {
            alert("Por favor, ingresa un número válido.");
            i--;  // Volver a pedir el número en caso de error
        }
    }

    alert("El número mayor ingresado es: " + mayor);
    alert("El número menor ingresado es: " + menor);
}

// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {
    let n;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo para calcular la serie de Fibonacci:");
        n = parseInt(inputNumero);

        if (!isNaN(n) && n >= 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    function fibonacci(n) {
        let serie = [0, 1];

        for (let i = 2; i < n; i++) {
            serie.push(serie[i - 1] + serie[i - 2]);
        }

        return serie;
    }

    let resultado = fibonacci(n);

    alert("La serie de Fibonacci hasta el término " + n + " es: " + resultado.join(", "));
}

// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {
    let a, b;

    while (true) {
        let inputA = prompt("Ingresa el primer número entero positivo:");
        let inputB = prompt("Ingresa el segundo número entero positivo:");
        
        a = parseInt(inputA);
        b = parseInt(inputB);

        if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0 && inputA.trim() === inputA && inputB.trim() === inputB && inputA !== "" && inputB !== "") {
            break;
        } else {
            alert("Por favor, ingresa dos números enteros positivos válidos, sin letras ni espacios.");
        }
    }

    function calcularMCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a; 
    }

    let mcd = calcularMCD(a, b);

    alert("El MCD de " + a + " y " + b + " es: " + mcd);
}

// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {
    let numero;

    while (true) {
        let inputNumero = prompt("Ingresa un número entero positivo para saber si es perfecto:");
        numero = parseInt(inputNumero);

        if (!isNaN(numero) && numero > 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    function esNumeroPerfecto(num) {
        let sumaDivisores = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sumaDivisores += i;
            }
        }

        return sumaDivisores === num;
    }

    // Verificar si el número ingresado es perfecto
    if (esNumeroPerfecto(numero)) {
        alert(numero + " es un número perfecto.");
    } else {
        alert(numero + " no es un número perfecto.");
    }
}

/* 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
*/
function ejercicio39() {
    let n;

    while (true) {
        let inputNumero = prompt("Ingresa la cantidad de términos para aproximar pi:");
        n = parseInt(inputNumero);

        if (!isNaN(n) && n > 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    let pi = 0;
    let signo = 1;  // Variable para alternar el signo (+ o -)

    for (let i = 1; i <= n; i++) {
        pi += signo * (4 / (2 * i - 1));  // Fórmula de la serie de Gregory-Leibniz
        signo *= -1;  // Cambiar el signo (+/-) en cada iteración
    }

    alert("La aproximación de Pi con " + n + " términos es: " + pi);
}

/* 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
*/
function ejercicio40() {
    let n;

    while (true) {
        let inputNumero = prompt("Ingresa la cantidad de términos para aproximar pi con la serie de Nilakantha:");
        n = parseInt(inputNumero);

        if (!isNaN(n) && n > 0 && inputNumero.trim() === inputNumero && inputNumero !== "") {
            break;
        } else {
            alert("Por favor, ingresa un número entero positivo, sin letras ni espacios.");
        }
    }

    let pi = 3; // Inicia con el valor base de 3 (de la serie de Nilakantha)
    let signo = 1; // Variable para alternar el signo (+ o -)
    let i = 2; // Empezamos con el primer conjunto de números en el denominador (2, 3, 4)

    // Aproximación de Pi usando la serie de Nilakantha
    for (let j = 1; j <= n; j++) {
        // Fórmula de la serie de Nilakantha
        let fraccion = 4 / (i * (i + 1) * (i + 2)); // Calculamos la fracción de la serie
        pi += signo * fraccion; // Sumamos o restamos la fracción a pi
        signo *= -1; // Cambiar el signo para la siguiente iteración
        i += 2; // Aumentar el valor de i en 2 para el siguiente término
    }

    alert("La aproximación de Pi con " + n + " términos es: " + pi);
}