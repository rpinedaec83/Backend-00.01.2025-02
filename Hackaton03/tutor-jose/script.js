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
