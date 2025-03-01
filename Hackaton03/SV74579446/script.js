function ejercicio01(){
    //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
const numero=parseInt(prompt("Inserte un numero"))

if(numero>99 && numero<1000){
    alert("El numero tiene 3 digitos ")
}else{
    alert("El numero no tiene 3 digitos")
}
}   

function ejercicio02(){
    //2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    const numero=parseInt(prompt("Inserte un numero"))

    if(numero<0){
        alert("El numero es negativo")
    }else{
        alert("El numero es positivo")
    }
}

function ejercicio03(){
    //3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    const numero=parseInt(prompt("Ingresa un numero"))

    if(numero % 10 === 4 || numero % 10 === -4){
        alert("El numero si termina en 4")
    }else{
        alert("El numero no termina en 4")
    }
}

function ejercicio04(){
    //4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    let num1, num2, num3, menor, medio, mayor;
    num1=parseInt(prompt("Ingrese el primer numero"));
    num2=parseInt(prompt("Ingrese el segundo numero"));
    num3=parseInt(prompt("Ingrese el tercer numero"));

    if(num1<=num2 && num1<=num3){
        menor=num1;
        if(num2<=num3){
            medio=num2;
            mayor=num3;
        }else{
            medio=num3;
            mayor=num2;
        }
    }else{
        if(num2<=num1 && num2<=num3){
            menor=num2;
            if(num1<=num3){
                medio=num1;
                mayor=num3;
            }else{
                medio=num3;
                mayor=num1;
            }
        }else{
            menor=num3;
            if(num1<=num2){
                medio=num1;
                mayor=num2;
            }else{
                medio=num2;
                mayor=num1;
            }
        }
    }
    alert(`Los números ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`);
}

function ejercicio05(){
    // Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número 
    // de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor
    //  de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    let precio = 80;
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));
    let totalOriginal, totalPagar, descuento = 0;
    
    totalOriginal = cantidadZapatos * precio;
    totalPagar = totalOriginal;
    
    if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
        descuento = totalOriginal * 0.10;
        totalPagar -= descuento;
    } else if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
        descuento = totalOriginal * 0.20;
        totalPagar -= descuento;
    } else if (cantidadZapatos >= 30) {
        descuento = totalOriginal * 0.40;
        totalPagar -= descuento;
        }

    alert(`Cantidad comprada: ${cantidadZapatos} zapatos\n` +
            `Total original: $${totalOriginal.toFixed(2)}\n` +
            `Descuento: $${descuento.toFixed(2)}\n` +
            `Total a pagar: $${totalPagar.toFixed(2)}`);
}

function ejercicio06(){
   // Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
   // se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
   
   let horasTrabajadas = parseInt(prompt("Ingrese las horas semanales que ha trabajado:"));
   let horasExtra = 0;
   let sueldo = 0;

   if (horasTrabajadas <= 40) {
       sueldo = horasTrabajadas * 20;
   } else {
       horasExtra = horasTrabajadas - 40;
       sueldo = (40 * 20) + (horasExtra * 25);
   }

   alert(`Horas extras realizadas: ${horasExtra}\n` +
         `Sueldo semanal: $${sueldo}`);
}

function ejercicio07(){
    //Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
    //sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // Tipo C 20% de descuento

    let precio = parseFloat(prompt("Ingrese el precio del helado:"));
    let membresia = "";
    let descuento = 0;
    let precioFinal = 0;

    do {
        membresia = prompt("Escoja el tipo de membresía (A, B, C):").toUpperCase();
    } while (membresia !== "A" && membresia !== "B" && membresia !== "C");

    switch (membresia) {
        case "A":
            descuento = 0.10;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.20;
            break;
    }

    precioFinal = precio - (precio * descuento);

    alert(`Tipo de membresía: ${membresia}\n` +
          `Descuento aplicado: ${descuento * 100}%\n` +
          `Precio final: $${precioFinal.toFixed(2)}`);

}

function ejercicio08(){
    //Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 10.5) {
        alert(`El estudiante aprobó con: ${promedio.toFixed(2)}`);
    } else {
        alert(`El estudiante desaprobó con: ${promedio.toFixed(2)}`);
    }
}

function ejercicio09(){
    //Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si
    //ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

    let sueldo = parseFloat(prompt("Ingrese su sueldo:"));
    let aumento, sueldoTotal;

    if (sueldo > 2000) {
        aumento = sueldo * 0.05;
    } else {
        aumento = sueldo * 0.10;
    }

    sueldoTotal = sueldo + aumento;

    alert(`Sueldo es de: $${sueldo.toFixed(2)}`);
    alert(`El aumento será de: $${aumento.toFixed(2)}`);
    alert(`El total que recibirá es: $${sueldoTotal.toFixed(2)}`);
}

function ejercicio10(){
    //Hacer un algoritmo en JavaScript que diga si un número es par o impar.

    let num = parseInt(prompt("Ingrese un número:"));

    if (num % 2 === 0) {
        alert(`El número ${num} es par`);
    } else {
        alert(`El número ${num} es impar`);
    }
}

function ejercicio11(){
    //Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (num1 > num2 && num1 > num3) {
        alert(`El número mayor es: ${num1}`);
    } else if (num2 > num1 && num2 > num3) {
        alert(`El número mayor es: ${num2}`);
    } else {
        alert(`El número mayor es: ${num3}`);
    }
}

function ejercicio12(){
    //Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        alert(`El número mayor es: ${num1}`);
    } else if (num2 > num1) {
        alert(`El número mayor es: ${num2}`);
    } else {
        alert("Ambos números son iguales.");
    }
    
}

function ejercicio13(){
    //Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

    let letra = prompt("Ingrese una letra").toLowerCase();

    switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("La letra es una vocal");
            break;
        default:
            alert("No es una vocal");
    }
}

function ejercicio14(){
    //Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

    let num = parseInt(prompt("Ingrese un número entero entre 1 y 10"));
    let esPrimo = false;

    if (num < 1 || num > 10) {
        alert("Error: El número debe estar entre 1 y 10");
    } else {
        if (num === 2 || num === 3 || num === 5 || num === 7) {
            esPrimo = true;
        }

        if (esPrimo) {
            alert(`El número ${num} es un número primo`);
        } else {
            alert(`El número ${num} no es un número primo`);
        }
    }
    
}

function ejercicio15(){
    //Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

    let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    let pulgadas = cm / 2.54;

    let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
    let kg = libras * 0.453592;

    alert(`${cm} cm equivale a ${pulgadas.toFixed(2)} pulgadas.`);
    alert(`${libras} libras equivale a ${kg.toFixed(2)} kilogramos.`);
}

function ejercicio16(){
    //16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

    let num = parseInt(prompt("Ingrese un número del 1 al 7:"));

    switch (num) {
        case 1:
            alert("El día es Lunes");
            break;
        case 2:
            alert("El día es Martes");
            break;
        case 3:
            alert("El día es Miércoles");
            break;
        case 4:
            alert("El día es Jueves");
            break;
        case 5:
            alert("El día es Viernes");
            break;
        case 6:
            alert("El día es Sábado");
            break;
        case 7:
            alert("El día es Domingo");
            break;
        default:
            alert("Número inválido. Debe ser entre 1 y 7");
    }
    
}

function ejercicio17(){
    //17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    let horas = parseInt(prompt("Ingrese las horas (0-24):"));
    let min = parseInt(prompt("Ingrese los minutos (0-59):"));
    let seg = parseInt(prompt("Ingrese los segundos (0-59):"));

    seg += 1;

    if (seg === 60) {
        seg = 0;
        min += 1;
    }

    if (min === 60) {
        min = 0;
        horas += 1;
    }

    if (horas === 24) {
        horas = 0;
    }

    alert(`La hora dentro de un segundo será: ${horas} : ${min} : ${seg}`);
}

function ejercicio18(){
    //Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes 
    //pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    //$10. Si se compran unidades separadas hasta 9.
    // $8. Si se compran entre 10 unidades hasta 99.
    // $7. Entre 100 y 499 unidades.
    // $6. Para mas de 500 unidades.

    // La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs 
    // a vender calcule el precio total para el cliente y la ganancia para el vendedor.


    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));
    let precioUnitario, totalVenta, ganancia;

    if (cantidad <= 9) {
        precioUnitario = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioUnitario = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }

    totalVenta = cantidad * precioUnitario;
    ganancia = totalVenta * 0.0825;

    alert(`El precio unitario es: $${precioUnitario}`);
    alert(`El total a pagar por el cliente es: $${totalVenta}`);
    alert(`La ganancia del vendedor es: $${ganancia.toFixed(2)}`);
}

function ejercicio19(){
    //Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
   
    // Cajero (56$/día).
    // Servidor (64$/día).
    // Preparador de mezclas (80$/día).
    // Mantenimiento (48$/día).
    
    // El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la 
    // semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado:\n1 - Cajero\n2 - Servidor\n3 - Preparador de mezclas\n4 - Mantenimiento"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));
    let salarioDiario, salarioTotal;

    if (diasTrabajados < 1 || diasTrabajados > 6) {
        alert("Error: Los días trabajados deben estar entre 1 y 6.");
        return;
    }

    switch (idEmpleado) {
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
            alert("Error: Número identificador no válido.");
            return;
    }

    salarioTotal = salarioDiario * diasTrabajados;

    alert(`El empleado con identificador ${idEmpleado} trabajó ${diasTrabajados} días.`);
    alert(`El pago total es: $${salarioTotal}`);
}

function ejercicio20(){
    //Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    
    // ¿Cuántos números son Pares?
    // ¿Cuál es el mayor de todos?
    // Si el tercero es par, calcular el cuadrado del segundo.
    // Si el primero es menor que el cuarto, calcular la media de los 4 números.
    // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    
}

function ejercicio21(){
    //Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

    let num = parseInt(prompt("Ingrese un número entero positivo:"));
    
    if (isNaN(num) || num < 0) {
        alert("Error: El número debe ser positivo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        alert(`El factorial de ${num} es: ${factorial}`);
    }
}

function ejercicio22(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

    let n = parseInt(prompt("Ingrese un número entero positivo (n):"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert(`La suma de los primeros ${n} números es: ${suma}`);
    
}

function ejercicio23(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

    let n = parseInt(prompt("Ingrese un número entero:"));
    let suma = 0;

    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }

    alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
    
}

function ejercicio24(){
    //Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert(`La suma de todos los números pares hasta 1000 es: ${suma}`);
}

function ejercicio25(){
    // Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

    let n = parseInt(prompt("Ingrese un número entero positivo para calcular el factorial:"));
    let factorial = 1;
    let contador = 1;

    while (contador <= n) {
        factorial *= contador;
        contador++;
    }

    alert(`El factorial del número ${n} es: ${factorial}`);
    
}

function ejercicio26(){
    //Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    
    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert(`El cociente es: ${cociente}`);
    alert(`El resto es: ${resto}`);
}

function ejercicio27(){
    //Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

    let suma = 0;
    let contador = 0;
    let num;

    do {
        num = parseFloat(prompt("Ingrese un número positivo (ingrese un número negativo para finalizar):"));

        if (num >= 0) {
            suma += num;
            contador++;
        }
    } while (num >= 0);

    if (contador > 0) {
        let media = suma / contador;
        alert(`La media es: ${media}`);
    } else {
        alert("No se ingresaron números positivos.");
    }
    
}

function ejercicio28(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
    let suma = 0;
    let i = 1;

    do {
        suma += i;
        i++;
    } while (i <= 100);

    alert(`La suma de los primeros 100 números es: ${suma}`);
    
}

function ejercicio29(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert(`La suma de los primeros 100 números es: ${suma}`);
    
}

function ejercicio30(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert(`La suma de los primeros 100 números es: ${suma}`);
    
}

function ejercicio31(){
    //Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i}:`));

        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    if (contadorPares > 0) {
        let mediaPares = sumaPares / contadorPares;
        alert(`La media de los números pares es: ${mediaPares}`);
    } else {
        alert("No se ingresaron números pares.");
    }

    if (contadorImpares > 0) {
        let mediaImpares = sumaImpares / contadorImpares;
        alert(`La media de los números impares es: ${mediaImpares}`);
    } else {
        alert("No se ingresaron números impares.");
    }
}

function ejercicio32(){
    //Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
    
}

function ejercicio33(){
    //Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

    let opc;

    do {
        opc = prompt("¿Desea continuar con el programa? (S/N):").toUpperCase();
    } while (opc !== "N");

    alert("El programa ha finalizado.");
}

function ejercicio34(){
    //Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.

    for (let i = 1; i <= 9; i++) {
        let resultado = `Tabla de multiplicar del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} * ${j} = ${i * j}\n`;
        }
        alert(resultado);
    }
    
}

function ejercicio35(){
    // Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    let may = -Infinity; // Inicializa con el menor número posible
    let men = Infinity;  // Inicializa con el mayor número posible

    for (let i = 1; i <= 20; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i}:`));

        if (num > may) {
            may = num;
        }

        if (num < men) {
            men = num;
        }
    }

    alert(`El número mayor es: ${may}`);
    alert(`El número menor es: ${men}`);
    
}

function ejercicio36(){
    //Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

    let n = parseInt(prompt("Ingrese la cantidad de términos para la serie de Fibonacci:"));

    let a = 0, b = 1;
    let serie = "Serie de Fibonacci:\n";

    if (n >= 1) serie += `${a}\n`; // Primer término
    if (n >= 2) serie += `${b}\n`; // Segundo término

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        serie += `${c}\n`;
        a = b;
        b = c;
    }

    alert(serie);
    
}

function ejercicio37(){
    //Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));

    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    alert(`El M.C.D. es: ${a}`);
    
}

function ejercicio38(){
    //Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

    let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
    let sumaDivisores = 0;

    // Suma los divisores propios del número
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    // Verifica si el número es perfecto
    if (sumaDivisores === numero) {
        alert(`El número ${numero} es perfecto.`);
    } else {
        alert(`El número ${numero} no es perfecto.`);
    }
    
}

function ejercicio39(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

   // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
   
   let iteraciones = parseInt(prompt("Ingrese el número de iteraciones:"));
    let pi = 0;
    let signo = 1;
    let n = 1;

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / n;
        pi += signo * termino;
        signo *= -1; // Alternar entre suma y resta
        n += 2;      // Avanzar al siguiente número impar
    }

    alert(`La aproximación de π después de ${iteraciones} iteraciones es: ${pi}`);

}

function ejercicio40(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

    let iteraciones = parseInt(prompt("Ingrese el número de iteraciones:"));
    let pi = 3;  // Valor inicial según la fórmula
    let signo = 1;
    let n = 2;

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / (n * (n + 1) * (n + 2));
        pi += signo * termino;
        signo *= -1; // Alternar entre suma y resta
        n += 2;      // Avanzar al siguiente conjunto de números
    }

    alert(`La aproximación de π después de ${iteraciones} iteraciones es: ${pi}`);
    
}
