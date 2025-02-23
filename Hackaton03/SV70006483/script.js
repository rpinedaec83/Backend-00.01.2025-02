function ejercicio01() {
    let numero = prompt("Ingrese un número:");
    if (!isNaN(numero) && Number.isInteger(Number(numero))) {
        numero = Math.abs(Number(numero));
        if (numero >= 100 && numero <= 999) {
            alert("El número tiene tres dígitos.");
        } else {
            alert("El número no tiene tres dígitos.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function ejercicio02() {
    let numero = prompt("Ingrese un número entero:");
    if (!isNaN(numero) && Number.isInteger(Number(numero))) {
        numero = Number(numero);
        if (numero < 0) {
            alert("El número es negativo.");
        } else {
            alert("El número no es negativo.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function ejercicio03() {
    let numero = prompt("Ingrese un número:");
    if (!isNaN(numero) && Number.isInteger(Number(numero))) {
        numero = Math.abs(Number(numero)).toString();
        if (numero.endsWith("4")) {
            alert("El número termina en 4.");
        } else {
            alert("El número no termina en 4.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function ejercicio04() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number.isInteger(Number(num3))) {
        let numeros = [Number(num1), Number(num2), Number(num3)];
        numeros.sort((a, b) => a - b);
        alert("Números ordenados: " + numeros.join(", "));
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

function ejercicio05() {
    let cantidad = prompt("Ingrese la cantidad de zapatos a comprar:");
    const precioPorZapato = 80;
    let descuento = 0;
    
    if (!isNaN(cantidad) && Number.isInteger(Number(cantidad)) && Number(cantidad) > 0) {
        cantidad = Number(cantidad);
        if (cantidad > 30) {
            descuento = 0.4;
        } else if (cantidad > 20) {
            descuento = 0.2;
        } else if (cantidad > 10) {
            descuento = 0.1;
        }
        
        let total = cantidad * precioPorZapato;
        let totalConDescuento = total - (total * descuento);
        
        alert(`El total a pagar con descuento es: $${totalConDescuento.toFixed(2)}`);
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}

function ejercicio06() {
    let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas en la semana:");
    const tarifaNormal = 20;
    const tarifaExtra = 25;
    let sueldo;
    
    if (!isNaN(horasTrabajadas) && Number(horasTrabajadas) >= 0) {
        horasTrabajadas = Number(horasTrabajadas);
        sueldo = horasTrabajadas <= 40 ? horasTrabajadas * tarifaNormal : (40 * tarifaNormal) + ((horasTrabajadas - 40) * tarifaExtra);
        alert(`El sueldo semanal es: $${sueldo.toFixed(2)}`);
    } else {
        alert("Por favor, ingrese un número válido de horas.");
    }
}

function ejercicio07() {
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
    const precioHelado = 100;
    let descuento = { "A": 0.1, "B": 0.15, "C": 0.2 }[tipoMembresia] || null;
    
    if (descuento !== null) {
        let total = precioHelado - (precioHelado * descuento);
        alert(`El total a pagar con descuento es: $${total.toFixed(2)}`);
    } else {
        alert("Tipo de membresía inválido.");
    }
}

function ejercicio08() {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = prompt(`Ingrese la nota ${i}:`);
        if (isNaN(nota)) return alert("Por favor, ingrese notas válidas.");
        notas.push(Number(nota));
    }
    let promedio = notas.reduce((a, b) => a + b, 0) / 3;
    alert(`El estudiante ${promedio >= 10.5 ? "aprobó" : "reprobó"} con un promedio de ${promedio.toFixed(2)}`);
}

function ejercicio09() {
    let salario = prompt("Ingrese el salario actual del trabajador:");
    if (!isNaN(salario) && Number(salario) > 0) {
        salario = Number(salario);
        let nuevoSalario = salario + (salario * (salario > 2000 ? 0.05 : 0.1));
        alert(`El nuevo salario con aumento es: $${nuevoSalario.toFixed(2)}`);
    } else {
        alert("Por favor, ingrese un salario válido.");
    }
}

function ejercicio10() {
    let numero = prompt("Ingrese un número:");
    if (!isNaN(numero) && Number.isInteger(Number(numero))) {
        alert(Number(numero) % 2 === 0 ? "El número es par." : "El número es impar.");
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}


function ejercicio11() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        num1 = Number(num1);
        num2 = Number(num2);
        num3 = Number(num3);
        let mayor = Math.max(num1, num2, num3);
        alert("El número mayor es: " + mayor);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

function ejercicio12() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    if (!isNaN(num1) && !isNaN(num2)) {
        num1 = Number(num1);
        num2 = Number(num2);
        let mayor = num1 > num2 ? num1 : num2;
        alert("El número mayor es: " + mayor);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

function ejercicio13() {
    let letra = prompt("Ingrese una letra:").toLowerCase();
    if (letra.length === 1 && /[a-z]/.test(letra)) {
        if ("aeiou".includes(letra)) {
            alert("Es una vocal.");
        } else {
            alert("No es una vocal.");
        }
    } else {
        alert("Ingrese una única letra válida.");
    }
}

function ejercicio14() {
    let numero = prompt("Ingrese un número del 1 al 9:");
    if (!isNaN(numero) && Number.isInteger(Number(numero)) && numero >= 1 && numero <= 9) {
        numero = Number(numero);
        let esPrimo = [2, 3, 5, 7].includes(numero);
        alert(esPrimo ? "Es primo." : "No es primo.");
    } else {
        alert("Ingrese un número válido entre 1 y 9.");
    }
}

function ejercicio15() {
    let cm = prompt("Ingrese la cantidad en centímetros:");
    let libras = prompt("Ingrese la cantidad en libras:");
    if (!isNaN(cm) && !isNaN(libras)) {
        cm = Number(cm);
        libras = Number(libras);
        let pulgadas = cm / 2.54;
        let kg = libras * 0.453592;
        alert(`Pulgadas: ${pulgadas.toFixed(2)}, Kilogramos: ${kg.toFixed(2)}`);
    } else {
        alert("Ingrese valores válidos.");
    }
}

function ejercicio16() {
    let numero = prompt("Ingrese un número del 1 al 7:");
    if (!isNaN(numero) && Number.isInteger(Number(numero)) && numero >= 1 && numero <= 7) {
        let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        alert("El día es: " + dias[numero - 1]);
    } else {
        alert("Ingrese un número válido entre 1 y 7.");
    }
}

function ejercicio17() {
    let hora = prompt("Ingrese la hora en formato HH:MM:SS:");
    let partes = hora.split(":");
    if (partes.length === 3 && partes.every(p => !isNaN(p))) {
        let h = Number(partes[0]);
        let m = Number(partes[1]);
        let s = Number(partes[2]);
        if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
            s++;
            if (s === 60) { s = 0; m++; }
            if (m === 60) { m = 0; h++; }
            if (h === 24) { h = 0; }
            alert(`La nueva hora es: ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
        } else {
            alert("Formato de hora inválido.");
        }
    } else {
        alert("Ingrese una hora válida en formato HH:MM:SS.");
    }
}

function ejercicio18() {
    let cantidad = prompt("Ingrese la cantidad de CDs a comprar:");
    if (!isNaN(cantidad) && Number.isInteger(Number(cantidad)) && cantidad > 0) {
        cantidad = Number(cantidad);
        let precio;
        if (cantidad <= 9) precio = 10;
        else if (cantidad <= 99) precio = 8;
        else if (cantidad <= 499) precio = 7;
        else precio = 6;
        let total = cantidad * precio;
        let ganancia = total * 0.0825;
        alert(`Precio total: $${total}, Ganancia del vendedor: $${ganancia.toFixed(2)}`);
    } else {
        alert("Ingrese una cantidad válida de CDs.");
    }
}

function ejercicio19() {
    let empleado = prompt("Ingrese el número de empleado (1-Cajero, 2-Servidor, 3-Preparador, 4-Mantenimiento):");
    let dias = prompt("Ingrese la cantidad de días trabajados (máximo 6):");
    let salarios = [56, 64, 80, 48];
    if (!isNaN(empleado) && !isNaN(dias)) {
        empleado = Number(empleado);
        dias = Number(dias);
        if (empleado >= 1 && empleado <= 4 && dias >= 1 && dias <= 6) {
            alert(`El pago total es: $${salarios[empleado - 1] * dias}`);
        } else {
            alert("Ingrese valores válidos.");
        }
    } else {
        alert("Ingrese números válidos.");
    }
}

function ejercicio20() {
    let nums = [];
    for (let i = 0; i < 4; i++) {
        let num = prompt(`Ingrese el número ${i + 1}:`);
        if (!isNaN(num) && Number(num) > 0) {
            nums.push(Number(num));
        } else {
            alert("Ingrese un número válido.");
            return;
        }
    }
    let pares = nums.filter(n => n % 2 === 0).length;
    let mayor = Math.max(...nums);
    alert(`Cantidad de pares: ${pares}, Mayor número: ${mayor}`);
    if (nums[2] % 2 === 0) alert(`Cuadrado del segundo: ${nums[1] ** 2}`);
    if (nums[0] < nums[3]) alert(`Media de los números: ${nums.reduce((a, b) => a + b, 0) / 4}`);
    if (nums[1] > nums[2] && nums[2] >= 50 && nums[2] <= 700) alert(`Suma total: ${nums.reduce((a, b) => a + b, 0)}`);
}

function ejercicio21() {
    let num = prompt("Ingrese un número para calcular su factorial:");
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert(`El factorial de ${num} es ${factorial}`);
}

function ejercicio22() {
    let n = prompt("Ingrese un número para calcular la suma de los n primeros números:");
    let suma = (n * (n + 1)) / 2;
    alert(`La suma de los primeros ${n} números es ${suma}`);
}

function ejercicio23() {
    let n = prompt("Ingrese un número para calcular la suma de los impares:");
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    alert(`La suma de los números impares menores o iguales a ${n} es ${suma}`);
}

function ejercicio24() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert(`La suma de todos los números pares hasta 1000 es ${suma}`);
}

function ejercicio25() {
    function factorial(num) {
        return num === 0 ? 1 : num * factorial(num - 1);
    }
    let num = prompt("Ingrese un número para calcular su factorial de forma recursiva:");
    alert(`El factorial de ${num} es ${factorial(num)}`);
}

function ejercicio26() {
    let dividendo = prompt("Ingrese el dividendo:");
    let divisor = prompt("Ingrese el divisor:");
    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    alert(`Cociente: ${cociente}, Resto: ${dividendo}`);
}

function ejercicio27() {
    let suma = 0, contador = 0, num;
    do {
        num = prompt("Ingrese un número positivo (negativo para terminar):");
        if (num >= 0) {
            suma += Number(num);
            contador++;
        }
    } while (num >= 0);
    alert(`La media es ${suma / contador}`);
}

function ejercicio28() {
    let suma = 0, i = 1;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    alert(`La suma de los primeros 100 números es ${suma}`);
}

function ejercicio29() {
    let suma = 0, i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert(`La suma de los primeros 100 números es ${suma}`);
}

function ejercicio30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert(`La suma de los primeros 100 números es ${suma}`);
}

function ejercicio31() {
    let sumaPares = 0, sumaImpares = 0, contPares = 0, contImpares = 0;
    for (let i = 0; i < 10; i++) {
        let num = prompt(`Ingrese el número ${i + 1}:`);
        if (num % 2 === 0) {
            sumaPares += Number(num);
            contPares++;
        } else {
            sumaImpares += Number(num);
            contImpares++;
        }
    }
    alert(`Media de pares: ${sumaPares / contPares}, Media de impares: ${sumaImpares / contImpares}`);
}

function ejercicio32() {
    let maxPoblacion = 0, ciudadMax = "";
    for (let i = 1; i <= 11; i++) {
        let ciudad = prompt(`Ingrese el nombre de la ciudad ${i}:`);
        let poblacion = prompt(`Ingrese la población de ${ciudad}:`);
        if (poblacion > maxPoblacion) {
            maxPoblacion = poblacion;
            ciudadMax = ciudad;
        }
    }
    alert(`La ciudad con mayor población es ${ciudadMax} con ${maxPoblacion} habitantes.`);
}

function ejercicio33() {
    let continuar;
    do {
        alert("Ejecutando el programa...");
        continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
    } while (continuar === "si");
}

function ejercicio34() {
    let tabla = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            tabla += `${i} x ${j} = ${i * j}\n`;
        }
        tabla += "\n";
    }
    alert(tabla);
}

function ejercicio35() {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        numeros.push(Number(prompt(`Ingrese el número ${i + 1}:`)));
    }
    alert(`Número mayor: ${Math.max(...numeros)}, Número menor: ${Math.min(...numeros)}`);
}

function ejercicio36() {
    let n = prompt("Ingrese la cantidad de términos de Fibonacci:");
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    alert(`Serie de Fibonacci: ${fib.join(", ")}`);
}

function ejercicio37() {
    function mcd(a, b) {
        return b === 0 ? a : mcd(b, a % b);
    }
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    alert(`El MCD de ${num1} y ${num2} es ${mcd(num1, num2)}`);
}

function ejercicio38() {
    let num = prompt("Ingrese un número para verificar si es perfecto:");
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    alert(`${num} ${suma === Number(num) ? "es" : "no es"} un número perfecto.`);
}

function ejercicio39() {
    let iteraciones = prompt("Ingrese el número de iteraciones para aproximar Pi:");
    let pi = 0;
    for (let i = 0; i < iteraciones; i++) {
        pi += (4 / (2 * i + 1)) * (i % 2 === 0 ? 1 : -1);
    }
    alert(`Aproximación de Pi con la serie de Gregory-Leibniz: ${pi}`);
}

function ejercicio40() {
    let iteraciones = prompt("Ingrese el número de iteraciones para aproximar Pi:");
    let pi = 3;
    let signo = 1;
    for (let i = 2; i < 2 * iteraciones; i += 2) {
        pi += (4 / (i * (i + 1) * (i + 2))) * signo;
        signo *= -1;
    }
    alert(`Aproximación de Pi con la serie de Nilakantha: ${pi}`);
}
