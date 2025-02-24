function ejercicio1() {
  /*Hacer un algoritmo en JavaScript que lea un número por el teclado 
    y determinar si tiene tres dígitos.
    */

  const dato = parseInt(prompt("inserte un dato"));

  if (!dato) {
    alert("error ingrese un numero");
  } else {
    if (dato > 99 && dato < 1000) {
      alert("el numero tiene tres digitos");
      console.log("el numero tiene tres digitos");
    } else {
      alert("el numero no tiene tres digitos");
      console.log("el numero no tiene tres digitos");
    }
  }
}

function ejercicio2() {
  let numero = prompt("Introduce un número entero:");  // Prompt para obtener la entrada del usuario
  numero = parseInt(numero);  // Convertir la entrada a un número entero

  // Número_negativo
  if (numero < 0) {
    console.log("El número es negativo.");
  } else if (numero > 0) {
    console.log("El número es positivo.");
  } else {
    console.log("El número es cero.");
  }
}

// Llamar a la función
leerNumero();

function ejercicio3() {
  // Leer el número ingresado por el usuario
  let numero = prompt("Introduce un número:");

  // Asegurarnos de que sea un número
  numero = parseInt(numero);

  // Verificar si el número termina en 4
  if (numero % 10 === 4) {
    alert("El número termina en 4.");
  } else {
    alert("El número no termina en 4.");
  }
}

function ejercicio4() {
  /*4. Hacer un algoritmo en JavaScript que lea tres 
números enteros y los muestre de menor a mayor.
*/
  let num1, num2, num3, menor, medio, mayor;

  num1 = partInt(prompt("ingrese un numero"));
  num2 = 54;
  num3 = 3;

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

  //mostrar en pantalla numeros ordenados

  console.log(
    `Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`
  );
}

function ejercicio5() {
  //Hacer un algoritmo en JavaScript para una tienda de zapatos
  // que tiene una promoción de descuento para
  //vender al mayor, esta dependerá del número de zapatos
  //que se compren. Si son más de diez, se les dará un 10%
  //de descuento sobre el total de la compra; si el número de
  //zapatos es mayor de veinte pero menor de treinta, se le otorga un 20%
  //de descuento; y si son más treinta zapatos se otorgará un 40% de
  //descuento. El precio de cada zapato es de $80.

  let cantidadZapatos, totalPagar, totalOriginal, descuento;
  const precio = 80;

  descuento = 0;
  cantidadZapatos = 24;

  totalOriginal = cantidadZapatos * precio;
  totalPagar = cantidadZapatos * precio;

  //Si son más de diez, se les dará un 10%
  //de descuento sobre el total de la compra;

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

  console.log(
    `Cantidad comprada: ${cantidadZapatos}  Total original: ${totalOriginal}`
  );
  console.log(`Descuento: ${descuento} Total a pagar:  ${totalPagar}`);
}

function ejercicio7() {
  // Total_compra
  let montoCompra = prompt("Introduce el monto total de la compra (en soles):");
  montoCompra = parseFloat(montoCompra); // Convertir_decimal

  // Tipo_membresía
  let tipoMembresia = prompt("Introduce tu tipo de membresía (A, B, C):").toUpperCase(); // Convertir a mayúsculas para asegurar consistencia

  // Variable para el descuento
  let descuento = 0;

  // Aplicar descuento según el tipo de membresía
  if (tipoMembresia === 'A') {
    descuento = 0.10; // 10% 
  } else if (tipoMembresia === 'B') {
    descuento = 0.15; // 15% 
  } else if (tipoMembresia === 'C') {
    descuento = 0.20; // 20% 
  } else {
    alert("Tipo de membresía inválido. Por favor, ingresa A, B o C.");
    return; // Salir si el tipo de membresía no es válido
  }

  // Calcular el monto del descuento
  let montoDescuento = montoCompra * descuento;

  // Calcular el monto final después de aplicar el descuento
  let montoFinal = montoCompra - montoDescuento;

  // Mostrar el resultado
  alert("Tu descuento es de " + montoDescuento + " soles. El monto final a pagar es " + montoFinal + " soles.");
}

function ejercicio8() {
  // Pedir al usuario que ingrese las tres notas
  let nota1 = parseFloat(prompt("Introduce la primera nota:"));
  let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
  let nota3 = parseFloat(prompt("Introduce la tercera nota:"));

  // Calcular el promedio de las tres notas
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Determinar si el estudiante aprobó o no
  if (promedio > 11 && promedio <= 20) {
    alert("¡Aprobaste! Tu promedio es: " + promedio);
  } else if (promedio < 11) {
    alert("¡Desaprobaste! Tu promedio es: " + promedio);
  } else {
    alert("El promedio está fuera del rango válido.");
  }
}

function ejercicio9() {
  // Pedir al usuario su sueldo actual
  let sueldoActual = parseFloat(prompt("Introduce tu sueldo actual en soles:"));

  // Verificar si el sueldo es mayor a 2000 o no, y calcular el aumento
  let aumento = 0;
  let nuevoSueldo = 0;

  if (sueldoActual > 2000) {
    aumento = sueldoActual * 0.05; // Aumento del 5%
  } else {
    aumento = sueldoActual * 0.10; // Aumento del 10%
  }

  // Calcular el nuevo sueldo
  nuevoSueldo = sueldoActual + aumento;

  // Mostrar el resultado
  alert("Tu aumento es de " + aumento + " soles. Tu nuevo sueldo será de " + nuevoSueldo + " soles.");
}

function ejercicio10() {
  // Pedir al usuario que ingrese un número
  let numero = parseInt(prompt("Introduce un número entero:"));

  // Verificar si el número es par o impar
  if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
  } else {
    alert("El número " + numero + " es impar.");
  }
}

function ejercicio11() {
  // Pedir al usuario que ingrese tres números
  let num1 = parseFloat(prompt("Introduce el primer número:"));
  let num2 = parseFloat(prompt("Introduce el segundo número:"));
  let num3 = parseFloat(prompt("Introduce el tercer número:"));

  // Verificar cuál de los tres números es el mayor
  let mayor = num1;

  if (num2 > mayor) {
    mayor = num2;
  }
  if (num3 > mayor) {
    mayor = num3;
  }

  // Mostrar el número mayor
  alert("El número mayor es: " + mayor);
}

function ejercicio12() {
  // Pedir al usuario que ingrese dos números
  let num1 = parseFloat(prompt("Introduce el primer número:"));
  let num2 = parseFloat(prompt("Introduce el segundo número:"));

  // Verificar cuál de los dos números es el mayor
  if (num1 > num2) {
    alert("El número mayor es: " + num1);
  } else if (num2 > num1) {
    alert("El número mayor es: " + num2);
  } else {
    alert("Ambos números son iguales.");
  }
}

function ejercicio13() {
  console.log("==========ejercicio 13=================");
  //Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
  let letra = "A";

  switch (letra.toLocaleLowerCase()) {
    case "a":
      console.log("si es una vocal");
      break;
    case "e":
      console.log("si es una vocal");
      break;
    case "i":
      console.log("si es una vocal");
      break;
    case "o":
      console.log("si es una vocal");
      break;
    case "u":
      console.log("si es una vocal");
      break;
    default:
      console.log("No es una vocal");
  }
}
function ejercicio6() {
  // Horas_trabajador
  let horasTrabajadas = prompt("Introduce las horas trabajadas en la semana:");

  // Horas_trabajadas
  horasTrabajadas = parseInt(horasTrabajadas);

  // Horas_trabajadas_40
  if (horasTrabajadas <= 40) {
    // Pago normal de 20_hora
    let sueldo = horasTrabajadas * 20;
    alert("Tu sueldo semanal es de " + sueldo + " soles.");
  } else {
    // Horas_extras_25
    let horasExtra = horasTrabajadas - 40;
    let sueldoBase = 40 * 20; // Sueldo por las primeras 40 horas
    let sueldoExtra = horasExtra * 25; // Sueldo por las horas extras
    let sueldoTotal = sueldoBase + sueldoExtra;

    alert("Tu sueldo semanal es de " + sueldoTotal + " soles.");
  }
}

function ejercicio14() {
  ////14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez
  // y determine si es un número primo.
  console.log("==========ejercicio 14=================");

  let esPrimo = false;
  //	Escribir  'Ingrese un numero entero entre el 1 y el 10';
  let num = 4390;
  if (num < 1 || num > 10) {
    console.log("Error: El numero debe de estar entre 1 y 10");
  } else {
    if (num == 2 || num == 3 || num == 5 || num == 7) {
      esPrimo = true;
    }

    if (esPrimo == true) {
      console.log(num, "es un numero primo");
    } else {
      console.log(num, "No es un numero primo");
    }
  }

  // = asignar valor
  // == comprar
  //  === comprar pero tambien el tipo de dato
}

function ejercicio17() {
  /**
   * 
17. Hacer un algoritmo en JavaScript
 donde se ingrese una hora y nos calcule 
 la hora dentro de un segundo.
   */
  console.log("==========ejercicio 17=================");

  let horas, minutos, segundos;

  horas = 23;
  minutos = 59;
  segundos = 59;

  // segundos = segundos+1;
  segundos++;

  if (segundos == 60) {
    segundos = 0;
    minutos = minutos + 1;
  }
  if (minutos == 60) {
    minutos = 0;
    horas += 1;
  }

  if (horas == 24) {
    horas = 0;
  }
  console.log(
    "La hora dentro  de un segundo será: Horas: ",
    horas,
    " minutos: ",
    minutos,
    "  segundos: ",
    segundos
  );
}

function ejercicio15() {
  // Convertir centímetros a pulgadas
  let centimetros = parseFloat(prompt("Introduce la cantidad en centímetros:"));
  let pulgadas = centimetros / 2.54; // 1 pulgada = 2.54 centímetros

  // Convertir libras a kilogramos
  let libras = parseFloat(prompt("Introduce la cantidad en libras:"));
  let kilogramos = libras * 0.453592; // 1 libra = 0.453592 kilogramos

  // Mostrar los resultados
  alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
  alert(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");
}

function ejercicio16() {
  // Pedir al usuario que ingrese un número del 1 al 7
  let numero = parseInt(prompt("Introduce un número del 1 al 7 para conocer el día de la semana:"));

  // Verificar el número y mostrar el día correspondiente
  switch (numero) {
    case 1:
      alert("El día correspondiente es: Lunes");
      break;
    case 2:
      alert("El día correspondiente es: Martes");
      break;
    case 3:
      alert("El día correspondiente es: Miércoles");
      break;
    case 4:
      alert("El día correspondiente es: Jueves");
      break;
    case 5:
      alert("El día correspondiente es: Viernes");
      break;
    case 6:
      alert("El día correspondiente es: Sábado");
      break;
    case 7:
      alert("El día correspondiente es: Domingo");
      break;
    default:
      alert("Número inválido. Por favor, ingresa un número del 1 al 7.");
      break;
  }
}

function ejercicio18() {
  // Pedir al usuario la cantidad de CDs
  let cantidad = parseInt(prompt("Introduce la cantidad de CDs a comprar:"));

  // Variables para el precio y la ganancia
  let precioUnitario = 0;
  let precioTotal = 0;
  let gananciaVendedor = 0;

  // Determinar el precio unitario según la cantidad de CDs
  if (cantidad >= 1 && cantidad <= 9) {
    precioUnitario = 10;  // Precio por unidad si se compran hasta 9
  } else if (cantidad >= 10 && cantidad <= 99) {
    precioUnitario = 8;   // Precio por unidad si se compran entre 10 y 99
  } else if (cantidad >= 100 && cantidad <= 499) {
    precioUnitario = 7;   // Precio por unidad si se compran entre 100 y 499
  } else if (cantidad >= 500) {
    precioUnitario = 6;   // Precio por unidad si se compran más de 500
  } else {
    alert("Cantidad no válida.");
    return;
  }

  // Calcular el precio total
  precioTotal = cantidad * precioUnitario;

  // Calcular la ganancia del vendedor (8,25%)
  gananciaVendedor = precioTotal * 0.0825;

  // Mostrar los resultados
  alert("Cantidad de CDs: " + cantidad + "\nPrecio total: S/ " + precioTotal + "\nGanancia para el vendedor: S/ " + gananciaVendedor.toFixed(2));
}

function ejercicio19() {
  // Pedir al usuario el número identificador del empleado y los días trabajados
  let idEmpleado = parseInt(prompt("Introduce el número identificador del empleado (1 a 4):"));
  let diasTrabajados = parseInt(prompt("Introduce la cantidad de días trabajados (máximo 6 días):"));

  // Verificar si el número de días es válido
  if (diasTrabajados < 1 || diasTrabajados > 6) {
    alert("Número de días no válido. Debe ser entre 1 y 6.");
    return;
  }

  // Inicializar variables para salario y pago
  let salarioDiario = 0;
  let pagoTotal = 0;

  // Asignar el salario diario según el identificador del empleado
  switch (idEmpleado) {
    case 1:
      salarioDiario = 56; // Cajero
      break;
    case 2:
      salarioDiario = 64; // Servidor
      break;
    case 3:
      salarioDiario = 80; // Preparador de mezclas
      break;
    case 4:
      salarioDiario = 48; // Mantenimiento
      break;
    default:
      alert("Número de identificador no válido. Debe ser entre 1 y 4.");
      return;
  }

  // Calcular el pago total
  pagoTotal = salarioDiario * diasTrabajados;

  // Mostrar el resultado
  alert("El empleado con identificador " + idEmpleado + " trabajó " + diasTrabajados + " días y se le debe pagar S/ " + pagoTotal);
}


function ejercicio22() {
  //Hacer un algoritmo en JavaScript para calcular
  // la suma de los n primeros números.
  console.log("==========ejercicio 22=================");
  let suma = 0;
  const n = 39;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  console.log("La suma  de los  n ", n, " primeros numeros es: ", suma);
}

function ejercicio23() {
  // Hacer un algoritmo en JavaScript para calcular
  // la suma de los números impares menores o iguales a n.
  console.log("==========ejercicio 23=================");
  let suma = 0;
  const n = 39;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      suma += i;
    }
  }

  console.log(
    "La suma  de los numeros impares menores o igulaes a ",
    n,
    " es: ",
    suma
  );
}

function ejercicio25() {
  // Hacer un algoritmo en
  // JavaScript para calcular el
  // factorial de un número de una forma distinta.
  console.log("==========ejercicio 25=================");

  let n, factorial, contador;

  n = 5;
  factorial = 1;
  contador = 1;

  while (contador <= n) {
    factorial = factorial * contador;
    contador = contador + 1;
  }
  console.log("El factorial del numero: ", n, " es: ", factorial);
}

function ejercicio28() {
  // Hacer un algoritmo en JavaScript para
  //  calcular la suma de los primeros
  // cien números con un ciclo repetir.

  console.log("==========ejercicio 28=================");
  let suma, contador;

  suma = 0;
  contador = 1;
  do {
    suma = suma + contador;
    contador = contador + 1;
  } while (contador <= 100);

  console.log("La suma de los 100 primeros numeros es ", suma);
}

function ejercicio32() {
  /**
   * 32. Se quiere saber cuál es la ciudad
   * con la población de más personas, son tres provincias y
   * once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
   */
  console.log("==========ejercicio 32=================");

  let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
  let poblacion, mayorPoblacion;

  mayorPoblacion = 0;

  for (let i = 0; i < 3; i++) {
    nombreProvincia = prompt(`ingrese la provincia numero: ${i + 1}`);
    for (let j = 0; j < 2; j++) {
      nombreCiudad = prompt("Ingrese el nombre de la ciudad ");
      poblacion = parseInt(prompt("Ingrese la cantidad de problacion"));
      if (poblacion > mayorPoblacion) {
        mayorPoblacion = poblacion;
        ciudadMayorPoblacion = nombreCiudad;
      }
    }
  }

  alert(`
    La ciudad con  mayor poblacion es:
    ${ciudadMayorPoblacion}
     con una poblacion de 
    ${mayorPoblacion}
    `);
}

function ejercicio38() {
  /**38. Hacer un algoritmo en JavaScript que
   *  nos permita saber si un número es un número perfecto. */
  console.log("==========ejercicio 38=================");

  let numero, sumaDivisores;

  numero = 28;

  sumaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
      sumaDivisores = sumaDivisores + i;
    }
  }

  if (sumaDivisores == numero) {
    console.log(`El numero ${numero} es perfecto`);
  } else {
    console.log(`El numero ${numero} NO es perfecto`);
  }
}

function ejercicio39() {
  /**39. Hacer un algoritmo en JavaScript que cumpla con 
   * la aproximación del número pi con la serie de Gregory-Leibniz. 
   * La formula que se debe aplicar es:
    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... */
  console.log("========== ejercicio39=================");

  let pi, termino, n, signo;
  pi = 0;
  n = 1;
  signo = 1;

  const iteraciones = 50;

  for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / n;
    pi = pi + signo * termino;
    signo = signo * -1;
    n = n + 2;
  }

  console.log(
    "La aproximacion de pi despues de ",
    iteraciones,
    " iteraciones es de: ",
    pi
  );
}

function ejercicio40() {
  /**40. Hacer un algoritmo en JavaScript que cumpla 
   * con la aproximación del número pi con la serie de Nilakantha.
   *  La formula que se debe aplicar es:
    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
*/
  console.log("========== ejercicio40=================");

  let pi, termino, n, signo;
  pi = 3;
  n = 2;
  signo = 1;

  const iteraciones = 100;

  for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / (n * (n + 1) * (n + 2));
    pi = pi + signo * termino;
    n = n + 2;
  }

  console.log(
    "La aproximacion de pi despues de ",
    iteraciones,
    " iteraciones es de: ",
    pi
  );
}