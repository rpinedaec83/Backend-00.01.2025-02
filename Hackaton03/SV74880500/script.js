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
    //2.Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

    let numero  = parseInt(prompt("Escribe un numero"))
    if(numero>0){
        alert("El numero es positivo")
    }
    else{
        alert("El numero ingresado es negativo")
    }
}

function ejercicio03(){
    //3.Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4..

    let numero = parseInt(prompt("Escribe un número"));

    let residuo = numero % 10;  
    
    if (residuo === 4) {
        alert("El número ingresado termina en 4");
    } else {
        alert("El número ingresado no termina en 4");
    }
}

function ejercicio04() {
    let numero1 = parseInt(prompt("Escribe el primer número"));
    let numero2 = parseInt(prompt("Escribe el segundo número"));
    let numero3 = parseInt(prompt("Escribe el tercer número"));

    let temp;

    if (numero1 > numero2) { 
        temp = numero1;
        numero1 = numero2;
        numero2 = temp;
    }

    if (numero2 > numero3) { 
        temp = numero2;
        numero2 = numero3;
        numero3 = temp;
    }

    if (numero1 > numero2) { 
        temp = numero1;
        numero1 = numero2;
        numero2 = temp;
    }

    alert("Los números ordenados de menor a mayor son: " + numero1 + ", " + numero2 + ", " + numero3);
}

function ejercicio05() {
    // 5.Hacer un algoritmo en javascript para una tienda de zapatos que tiene una promoción de descuento 
    // dependiendo de la cantidad de zapatos comprados.

    let numero = parseInt(prompt("Escribe la cantidad de zapatos que comprarás"));

    let precio = 80;  
    let costoneto = numero * precio; 
    let descuento = 0;  

    
    if (numero > 30) {
        descuento = costoneto * 0.40;  
    } else if (numero > 20) {
        descuento = costoneto * 0.20;  
    } else if (numero > 10) {
        descuento = costoneto * 0.10; 
    }

    let costoFinal = costoneto - descuento;

    alert("El costo total después del descuento es: $" + costoFinal);
}

function ejercicio06() {
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas esta semana"));
    let tarifaPorHora = 20;
    let horasExtras = 0;
    let sueldo;

    if (horasTrabajadas > 40) {
        horasExtras = horasTrabajadas - 40;
        sueldo = (40 * tarifaPorHora) + (horasExtras * 25); 
    } else {
        sueldo = horasTrabajadas * tarifaPorHora; 
    }
    
    alert("El sueldo semanal es: $" + sueldo);
}

function ejercicio07() {
    let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B, C)").toUpperCase();
    let precioTotal = parseFloat(prompt("Ingrese el precio total de su compra"));

    let descuento = 0;
    
    if (tipoMembresia === "A") {
        descuento = 0.10;  
    } else if (tipoMembresia === "B") {
        descuento = 0.15;  
    } else if (tipoMembresia === "C") {
        descuento = 0.20;  
    }

    let totalConDescuento = precioTotal - (precioTotal * descuento);
    alert("El total después del descuento es: $" + totalConDescuento);
}

function ejercicio08() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = (promedio >= 6) ? "Aprobado" : "Reprobado";

    alert("El promedio es: " + promedio + " y el estado del estudiante es: " + estado);
}

function ejercicio09() {
    let salarioAnterior = parseFloat(prompt("Ingrese el salario anterior"));

    let aumento = 0;
    if (salarioAnterior > 2000) {
        aumento = salarioAnterior * 0.05;
    } else {
        aumento = salarioAnterior * 0.10;
    }

    let salarioFinal = salarioAnterior + aumento;
    alert("El nuevo salario es: $" + salarioFinal);
}

function ejercicio10() {
    let numero = parseInt(prompt("Ingrese un número"));

    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}

function ejercicio11() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    let numero3 = parseInt(prompt("Ingrese el tercer número"));

    let mayor = Math.max(numero1, numero2, numero3);
    alert("El número mayor es: " + mayor);
}

function ejercicio12() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));

    let mayor = (numero1 > numero2) ? numero1 : numero2;
    alert("El número mayor es: " + mayor);
}

function ejercicio13() {
    let letra = prompt("Ingrese una letra").toLowerCase();

    if (["a", "e", "i", "o", "u"].includes(letra)) {
        alert("La letra " + letra + " es una vocal.");
    } else {
        alert("La letra " + letra + " no es una vocal.");
    }
}

function ejercicio14() {
    let numero = parseInt(prompt("Ingrese un número entre 1 y 9"));

    if (numero < 2 || numero > 9) {
        alert("El número debe estar entre 1 y 9.");
        return;
    }

    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert("El número " + numero + " es primo.");
    } else {
        alert("El número " + numero + " no es primo.");
    }
}

function ejercicio15() {
    let centimetros = parseFloat(prompt("Ingrese los centímetros"));
    let libras = parseFloat(prompt("Ingrese las libras"));

    let pulgadas = centimetros / 2.54;
    let kilogramos = libras / 2.20462;

    alert(centimetros + " centímetros son " + pulgadas + " pulgadas.");
    alert(libras + " libras son " + kilogramos + " kilogramos.");
}

function ejercicio16() {
    let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7"));

    switch (numeroDia) {
        case 1:
            alert("El día corresponde a Lunes");
            break;
        case 2:
            alert("El día corresponde a Martes");
            break;
        case 3:
            alert("El día corresponde a Miércoles");
            break;
        case 4:
            alert("El día corresponde a Jueves");
            break;
        case 5:
            alert("El día corresponde a Viernes");
            break;
        case 6:
            alert("El día corresponde a Sábado");
            break;
        case 7:
            alert("El día corresponde a Domingo");
            break;
        default:
            alert("Número de día inválido. Ingrese un número entre 1 y 7.");
    }
}

function ejercicio17() {
    let hora = parseInt(prompt("Ingrese la hora en formato de 24 horas (0-23)"));
    let minuto = parseInt(prompt("Ingrese el minuto (0-59)"));
    let segundo = parseInt(prompt("Ingrese el segundo (0-59)"));

    segundo++;

    if (segundo === 60) {
        segundo = 0;
        minuto++;
        if (minuto === 60) {
            minuto = 0;
            hora++;
            if (hora === 24) {
                hora = 0; 
            }
        }
    }

    alert("La hora dentro de un segundo será: " + hora + ":" + minuto + ":" + segundo);
}

function ejercicio18() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs que va a comprar"));

    let precio = 0;
    if (cantidad <= 9) {
        precio = 10; 
    } else if (cantidad >= 10 && cantidad <= 99) {
        precio = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precio = 7;
    } else if (cantidad >= 500) {
        precio = 6;
    }

    let costoTotal = precio * cantidad;
    let ganancia = costoTotal * 0.0825; 

    alert("El costo total de la compra es: $" + costoTotal);
    alert("La ganancia para el vendedor es: $" + ganancia);
}

function ejercicio19() {
    let idEmpleado = parseInt(prompt("Ingrese el ID del empleado (1-4)"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (1-6)"));

    let salarioPorDia;

    switch (idEmpleado) {
        case 1:
            salarioPorDia = 56;
            break;
        case 2:
            salarioPorDia = 64; 
            break;
        case 3:
            salarioPorDia = 80; 
            break;
        case 4:
            salarioPorDia = 48; 
            break;
        default:
            alert("ID de empleado inválido.");
            return;
    }

    let salarioTotal = salarioPorDia * diasTrabajados;
    alert("El salario total que el dueño debe pagar es: $" + salarioTotal);
}

function ejercicio20() {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let num3 = parseInt(prompt("Ingrese el tercer número"));
    let num4 = parseInt(prompt("Ingrese el cuarto número"));

    let pares = 0;
    if (num1 % 2 === 0) pares++;
    if (num2 % 2 === 0) pares++;
    if (num3 % 2 === 0) pares++;
    if (num4 % 2 === 0) pares++;

    alert("Cantidad de números pares: " + pares);

    let mayor = Math.max(num1, num2, num3, num4);
    alert("El mayor número es: " + mayor);

    if (num3 % 2 === 0) {
        let cuadrado = num2 * num2;
        alert("El cuadrado del segundo número es: " + cuadrado);
    }

    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4) / 4;
        alert("La media de los 4 números es: " + media);
    }

    if (num2 > num3) {
        if (num3 >= 50 && num3 <= 700) {
            let suma = num1 + num2 + num3 + num4;
            alert("La suma de los 4 números es: " + suma);
        }
    }
}

function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    alert("El factorial de " + numero + " es: " + factorial);
}

function ejercicio22() {
    let n = parseInt(prompt("Ingrese el número hasta el cual desea sumar"));

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + n + " números es: " + suma);
}

function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los impares menores o iguales"));

    let sumaImpares = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i;
        }
    }

    alert("La suma de los números impares menores o iguales a " + n + " es: " + sumaImpares);
}

function ejercicio24() {
    let sumaPares = 0;
    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }

    alert("La suma de todos los números pares hasta 1000 es: " + sumaPares);
}

function ejercicio25() {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
    alert("El factorial de " + numero + " es: " + factorial(numero));
}

function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo"));
    let divisor = parseInt(prompt("Ingrese el divisor"));

    let cociente = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    alert("Cociente: " + cociente);
    alert("Resto: " + dividendo);
}

function ejercicio27() {
    let suma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingrese un número positivo (o negativo para terminar)"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);

    let media = suma / contador;
    alert("La media de los números ingresados es: " + media);
}

function ejercicio28() {
    let suma = 0;
    let i = 1;
    
    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio29() {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio30() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio31() {
    let sumaPares = 0, sumaImpares = 0;
    let cantidadPares = 0, cantidadImpares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingrese un número"));
        
        if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;
        } else {
            sumaImpares += numero;
            cantidadImpares++;
        }
    }

    let mediaPares = sumaPares / cantidadPares;
    let mediaImpares = sumaImpares / cantidadImpares;

    alert("La media de los números pares es: " + mediaPares);
    alert("La media de los números impares es: " + mediaImpares);
}


function ejercicio32() {
    let provincias = [
        { nombre: "Provincia 1", ciudades: [
            { nombre: "Ciudad A", poblacion: 100000 },
            { nombre: "Ciudad B", poblacion: 200000 },
            { nombre: "Ciudad C", poblacion: 150000 }
        ]},
        { nombre: "Provincia 2", ciudades: [
            { nombre: "Ciudad D", poblacion: 300000 },
            { nombre: "Ciudad E", poblacion: 100000 },
            { nombre: "Ciudad F", poblacion: 250000 }
        ]},
        { nombre: "Provincia 3", ciudades: [
            { nombre: "Ciudad G", poblacion: 500000 },
            { nombre: "Ciudad H", poblacion: 400000 },
            { nombre: "Ciudad I", poblacion: 450000 }
        ]}
    ];

    let ciudadMayorPoblacion = { nombre: "", poblacion: 0 };

    for (let provincia of provincias) {
        for (let ciudad of provincia.ciudades) {
            if (ciudad.poblacion > ciudadMayorPoblacion.poblacion) {
                ciudadMayorPoblacion = ciudad;
            }
        }
    }

    alert("La ciudad con mayor población es " + ciudadMayorPoblacion.nombre + " con " + ciudadMayorPoblacion.poblacion + " habitantes.");
}

function ejercicio33() {
    let continuar = true;

    while (continuar) {
        let respuesta = prompt("¿Deseas continuar con el programa? (sí/no)");
        if (respuesta.toLowerCase() !== 'sí') {
            continuar = false;
            alert("¡Programa finalizado!");
        } else {
            alert("¡Sigues dentro del programa!");
        }
    }
}

function ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
    }
}

function ejercicio35() {
    let mayor = -Infinity;
    let menor = Infinity;

    for (let i = 0; i < 20; i++) {
        let numero = parseInt(prompt("Ingresa un número"));
        if (numero > mayor) mayor = numero;
        if (numero < menor) menor = numero;
    }

    alert("El número mayor es: " + mayor);
    alert("El número menor es: " + menor);
}

function ejercicio36() {
    let n = parseInt(prompt("ingrese numero para utilizar la serie de Fibonacci "));
    let a = 0, b = 1;
    
    console.log("Serie de Fibonacci:");
    console.log(a);
    console.log(b);
    
    for (let i = 2; i < n; i++) {
        let siguiente = a + b;
        console.log(siguiente);
        a = b;
        b = siguiente;
    }
}

function ejercicio37() {
    let a = parseInt(prompt("Ingresa el primer número"));
    let b = parseInt(prompt("Ingresa el segundo número"));

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    alert("El MCD es: " + a);
}

function ejercicio38() {
    let numero = parseInt(prompt("Ingresa un número para verificar si es perfecto"));

    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        alert(numero + " es un número perfecto");
    } else {
        alert(numero + " no es un número perfecto");
    }
}

function ejercicio39() {
    let n = parseInt(prompt("Ingrese numero para aproximar pi con la serie de Gregory-Leibniz"));
    let pi = 0;

    for (let i = 0; i < n; i++) {
        let signo = (i % 2 === 0) ? 1 : -1;
        pi += signo * (4 / (2 * i + 1));
    }

    alert("La aproximación de Pi es: " + pi);
}

function ejercicio40() {
    let n = parseInt(prompt("Ingrese numero para aproximar pi con la serie de nilakathan"));
    let pi = 3;

    for (let i = 1; i <= n; i++) {
        let signo = (i % 2 === 0) ? -1 : 1;
        let term = signo * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)));
        pi += term;
    }

    alert("La aproximación de Pi es: " + pi);
}
 