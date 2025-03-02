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

function ejercicio02() {
    // 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

    let numero= parseInt(prompt("Ingrese un número entero:"));
    if(numero < 0){
        alert("El número es negativo.");
    }else{
        alert("El número no es negativo.");
    }
}

function ejercicio03() {

    // 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

    let numero= parseInt(prompt("Ingrese un número entero: "));
    if(numero % 10 === 4){
        alert("El número termina en 4.");
    }else{
        alert("El número no termina en 4.");
    }
}

function ejercicio04() {
    // 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

    let num1= parseInt(prompt("Ingrese el primer número:"));
    let num2= parseInt(prompt("Ingrese el segundo número:"));
    let num3= parseInt(prompt("Ingrese el tercer número:"));

    let numeros=[num1, num2, num3];

    numeros.sort((a,b) => a - b); // Ordena de menor a mayor
    alert("Números ordenados: " + numeros[0] +' '+ numeros[1] +' '+ numeros[2]);
}

function ejercicio05() {
    // 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
   
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos:"));
    let precioUnitario = 80;
    let total = cantidadZapatos * precioUnitario;
    let descuento = 0;

    if(cantidadZapatos > 30){
        descuento = total * 0.4;
    }else if(cantidadZapatos > 20){
        descuento = total * 0.2;
    }else if(cantidadZapatos > 10){
        descuento = total * 0.1;
    }

    let totalPagar = total - descuento;
    alert("Total a pagar: " + totalPagar);
}

function ejercicio06() {
    // 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
   
    let horasTrabajadas= parseInt(prompt("Ingrese las horas trabajadas:"));
    let sueldo= 0;

    if(horasTrabajadas <= 40){
        sueldo = horasTrabajadas * 20;
    }else{
        sueldo = 40 * 20 +(horasTrabajadas - 40)* 25;
    }

    alert("El sueldo semanal es: " + sueldo);
}

function ejercicio07() {
    // 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    //    Tipo A 10% de descuento
    //    Tipo B 15% de descuento
    //    Tipo C 20% de descuento
   
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase(); //Para pasar a mayuscula
    let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
    let descuento = 0;

    if(tipoMembresia === "A"){
        descuento = totalCompra * 0.1;
    }else if(tipoMembresia === "B"){
        descuento = totalCompra * 0.15;
    }else if(tipoMembresia === "C"){
        descuento = totalCompra * 0.2;
    }

    let totalPagar = totalCompra - descuento;
    alert("Total a pagar: " + totalPagar);
}

function ejercicio08() {
    // 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    alert("El promedio es: " + promedio);

    if(promedio >= 11){
        alert("El estudiante aprobó.");
    }else{
        alert("El estudiante no aprobó.");
    }
}

function ejercicio09() {
    // 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
   
    let sueldoActual = parseFloat(prompt("Ingrese el sueldo actual:"));
    let aumento = 0;

    if(sueldoActual > 2000){
        aumento = sueldoActual * 0.05;
    }else{
        aumento = sueldoActual * 0.1;
    }

    let nuevoSueldo = sueldoActual + aumento;
    alert("El nuevo sueldo es: " + nuevoSueldo);
}

function ejercicio10() {
    // 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

    let numero = parseInt(prompt("Ingrese un número:"));
    if(numero % 2 === 0){
        alert("El número es par.");
    }else{
        alert("El número es impar.");
    }
}

function ejercicio11() {
    // 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));

    let mayor = num1;
    if(num2 > mayor)mayor = num2;
    if(num3 > mayor)mayor = num3;

    alert("El número mayor es: " + mayor);

}

function ejercicio12() {
    // 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let mayor = num1;
    if(num2 > mayor)mayor = num2;

    alert("El número mayor es: " + mayor);

}

function ejercicio13() {
    // 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

    let letra = prompt("Ingrese una letra:").toLowerCase(); //minuscula

    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        alert("Es una vocal.");
    }else {
        alert("No es una vocal.");
    }

}

function ejercicio14() {
    // 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

    let numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
    let esPrimo = true;

    if(numero < 2)esPrimo = false;
    else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    alert(esPrimo ? "Es un número primo." : "No es un número primo.");

}

function ejercicio15() {
    // 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

    let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));
    let pulgadas = centimetros / 2.54;
    alert(centimetros + " cm = " + pulgadas + " pulgadas.");

    let libras = parseFloat(prompt("Ingrese el peso en libras:"));
    let kilogramos = libras * 0.453592;
    alert(libras + " lb = " + kilogramos + " kg.");

}

function ejercicio16() {
    // 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let dia;

    switch(numero){
        case 1: dia = "Lunes"; break;
        case 2: dia = "Martes"; break;
        case 3: dia = "Miércoles"; break;
        case 4: dia = "Jueves"; break;
        case 5: dia = "Viernes"; break;
        case 6: dia = "Sábado"; break;
        case 7: dia = "Domingo"; break;
        default: dia = "Número fuera de rango.";
    }

    alert("El día correspondiente es: " + dia);

}

function ejercicio17() {
    // 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    let hora = parseInt(prompt("Ingrese la hora (0-23):"));
    let minutos = parseInt(prompt("Ingrese los minutos (0-59):"));
    let segundos = parseInt(prompt("Ingrese los segundos (0-59):"));

    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            hora++;
            if (hora === 24) {
                hora = 0;
            }
        }
    }

    alert("La hora dentro de un segundo es: " + hora + ":" + minutos + ":" + segundos);

}

function ejercicio18() {
    // 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    //    $10. Si se compran unidades separadas hasta 9.
    //    $8. Si se compran entre 10 unidades hasta 99.
    //    $7. Entre 100 y 499 unidades.
    //    $6. Para mas de 500 unidades.
    //    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let precio = 0;

    if(cantidad < 10){
        precio = cantidad * 10;
    }else if(cantidad < 100){
        precio = cantidad * 8;
    }else if(cantidad < 500){
        precio = cantidad * 7;
    }else{
        precio = cantidad * 6;
    }

    let ganancia = precio * 0.0825;
    alert("Precio total: $" + precio + "\n Ganancia: $" + ganancia);
}

function ejercicio19() {
    // 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
    //    Cajero (56$/día).
    //    Servidor (64$/día).
    //    Preparador de mezclas (80$/día).
    //    Mantenimiento (48$/día).
    //    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó.
    
    let idEmpleado = parseInt(prompt("Ingrese el ID del empleado (56, 64, 80, 48):"));
    let diasTrabajados = parseInt(prompt("Ingrese los días trabajados (1-6):"));

    let salarioDiario = 0;
    if(idEmpleado === 56)salarioDiario = 56;
    else if(idEmpleado === 64)salarioDiario = 64;
    else if(idEmpleado === 80)salarioDiario = 80;
    else if(idEmpleado === 48)salarioDiario = 48;
    else {
        alert("ID no válido.");
        return;
    }

    let salarioTotal = salarioDiario * diasTrabajados;
    alert("El salario total es: " + salarioTotal);
}

function ejercicio20() {
    // 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    //    ¿Cuántos números son Pares?
    //    ¿Cuál es el mayor de todos?
    //    Si el tercero es par, calcular el cuadrado del segundo.
    //    Si el primero es menor que el cuarto, calcular la media de los 4 números.
    //    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número:"));

    // Contar numeros pares
    let pares = 0;
    if(num1 % 2 === 0)pares++;
    if(num2 % 2 === 0)pares++;
    if(num3 % 2 === 0)pares++;
    if(num4 % 2 === 0)pares++;
    alert("Números pares: " + pares);

    // Encontrar el mayor
    let mayor = num1;
    if(num2 > mayor)mayor = num2;
    if(num3 > mayor)mayor = num3;
    if(num4 > mayor)mayor = num4;
    alert("El mayor es: " + mayor);

    // Si el tercero es par, calcular el cuadrado del segundo
    if(num3 % 2 === 0){
        alert("Cuadrado del segundo número: " + (num2 * num2));
    }

    // Si el primero es menor que el cuarto, calcular la media
    if(num1 < num4){
        let media = (num1 + num2 + num3 + num4) / 4;
        alert("Media de los 4 números: " + media);
    }

    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, sumar los 4 números
    if(num2 > num3 && num3 >= 50 && num3 <= 700){
        let suma = num1 + num2 + num3 + num4;
        alert("Suma de los 4 números: " +  suma);
    }
}

function ejercicio21() {
    // 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

    let numero = parseInt(prompt("Ingrese un número:"));
    let factorial = 1;
    for(let i = 2; i <= numero; i++){
        factorial *= i;
    }
    alert("El factorial de " + numero + " es: " + factorial);
}

function ejercicio22() {
    // 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

    let n = parseInt(prompt("Ingrese un número:"));
    let suma = 0;
    for(let i = 1;i <= n;i++){
        suma += i;
    }
    alert("La suma de los primeros " + n + " números es: " + suma);
}

function ejercicio23() {
    // 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

    let n = parseInt(prompt("Ingrese un número:"));
    let suma = 0;
    for(let i = 1;i <= n;i += 2){
        suma += i;
    }
    alert("La suma de los números impares hasta " + n + " es: " + suma);
}

function ejercicio24() {
    // 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

    let suma = 0;
    for(let i = 2;i <= 1000;i += 2){
        suma += i;
    }
    alert("La suma de los números pares hasta 1000 es: " + suma);
}

function ejercicio25() {
    // 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

    let numero = parseInt(prompt("Ingrese un número:"));
    let factorial = 1;
    while(numero > 1){
        factorial *= numero;
        numero--;
    }
    alert("El factorial es: " + factorial);
}

function ejercicio26() {
    // 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    let cociente = 0;
    let resto = dividendo;

    while(resto >= divisor){
        resto -= divisor;
        cociente++;
    }

    alert("Cociente: " + cociente + "\n Resto: " + resto);
}

function ejercicio27() {
    // 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

    let suma = 0;
    let contador = 0;
    let numero;

    while(true){
        numero = parseFloat(prompt("Ingrese un número positivo (negativo para terminar):"));
        if(numero < 0)break;
        suma += numero;
        contador++;
    }

    if(contador > 0){
        alert("La media es: " + (suma / contador));
    }else{
        alert("No se ingresaron números válidos.");
    }
}

function ejercicio28() {
    // 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

    let suma = 0;
    let i = 1;
    do{
        suma += i;
        i++;
    }while(i <= 100);
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio29() {
    // 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

    let suma = 0;
    let i = 1;
    while(i <= 100){
        suma += i;
        i++;
    }
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio30() {
    // 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

    let suma = 0;
    for(let i = 1;i <= 100;i++){
        suma += i;
    }
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio31() {
    // 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

    let sumaPares = 0, sumaImpares = 0;
    let contadorPares = 0, contadorImpares = 0;

    for(let i = 1;i <= 10;i++){
        let numero = parseFloat(prompt("Ingrese el número " + i + ":"));
        if(numero % 2 === 0){
            sumaPares += numero;
            contadorPares++;
        }else{
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    let mediaPares = contadorPares > 0? sumaPares / contadorPares : 0;
    let mediaImpares = contadorImpares > 0? sumaImpares / contadorImpares : 0;

    alert("Media de números pares: " + mediaPares + "\nMedia de números impares: " + mediaImpares);
}

function ejercicio32() {
    // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.

    let ciudadMayor = "";
    let poblacionMayor = 0;

    for(let provincia = 1;provincia <= 3;provincia++){
        for(let ciudad = 1;ciudad <= 11;ciudad++){
            let poblacion = parseFloat(prompt("Ingrese la población de la ciudad " + ciudad + " de la provincia " + provincia + ":"));
            if(poblacion > poblacionMayor){
                poblacionMayor = poblacion;
                ciudadMayor = "Provincia " + provincia + ", Ciudad " + ciudad;
            }
        }
    }

    alert("La ciudad con más población es: " + ciudadMayor + " con " + poblacionMayor + " habitantes.");
}

function ejercicio33() {
    // 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

    let continuar;
    do{
        alert("El programa está en ejecución.");
        continuar = prompt("¿Desea continuar? (s/n):");
    }while(continuar==="s");
    alert("Programa terminado.");
}

function ejercicio34() {
    // 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.

    let resultado = "";
    for(let i = 1;i <= 9;i++){
        for(let j = 1;j <= 10;j++){
            resultado += i + " x " + j + " = " + (i * j) + "\n";
        }
        resultado += "\n";
    }
    alert(resultado);
}

function ejercicio35() {
    // 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

    let mayor = -Infinity;
    let menor = Infinity;

    for(let i = 1;i <= 20;i++){
        let numero = parseFloat(prompt("Ingrese el número " + i + ":"));
        if(numero > mayor) mayor = numero;
        if(numero < menor) menor = numero;
    }

    alert("El número mayor es: " + mayor + "\n El número menor es: " + menor);
}

function ejercicio36() {
    // 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

    let n = parseInt(prompt("Ingrese la cantidad de términos de la serie Fibonacci:"));
    let a = 0, b = 1;
    let resultado = "Serie Fibonacci: ";

    for(let i = 1;i <= n;i++) {
        resultado += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
    }

    alert(resultado);
}

function ejercicio37() {
    // 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    while(num2 !== 0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    alert("El MCD es: " + num1);
}

function ejercicio38() {
    // 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

    let numero = parseInt(prompt("Ingrese un número:"));
    let sumaDivisores = 0;

    for(let i = 1;i < numero;i++) {
        if(numero % i === 0){
            sumaDivisores += i;
        }
    }

    if (sumaDivisores===numero) {
        alert(numero + " es un número perfecto.");
    } else {
        alert(numero + " no es un número perfecto.");
    }
}

function ejercicio39() {
    // 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
    //    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));
    let pi = 0;
    let signo = 1;

    for(let i = 1;i <= n;i++){
        pi += signo * (4 / (2 * i - 1));
        signo *= -1;
    }

    alert("Aproximación de Pi: " + pi);

}

function ejercicio40() {
    // 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
    //    Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));
    let pi = 3;
    let signo = 1;

    for(let i = 2;i <= 2 * n;i += 2){
        pi += signo * (4 / (i * (i + 1) * (i + 2)));
        signo *= -1;
    }

    alert("Aproximación de Pi: " + pi);

}