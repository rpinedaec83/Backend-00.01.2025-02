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
