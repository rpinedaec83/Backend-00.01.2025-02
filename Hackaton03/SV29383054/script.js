function ejercicio01(){
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


function ejercicio02(){
   /* 2. Hacer el algoritmo en java script  que lea un número entero
    por el teclado y determinar si es negativo.
     let n;
     n= parseInt(prompt("Ingrese un número"));
     if(n<0) {
     alert ("El número"+n+"es negativo");
     }
   }

 function ejercicio03(){
   /* 3.  Hacer un algoritmo en Java script que lea un número y
    determinar si termina en 4.
{
    let un_numero;
    un_numero = parseInt (document.formulario1.un_numero.value);
    if(un_numero%10==4)
        alert('El n\u00FAmero s\u00ED termina en 4');
    else
        alert('El n\u00FAmero no termina en 4');
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
  
  function ejercicio6() {
  // Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
  // se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
  // pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
  let sueldo;
            let horas,extra;
            horas = parseInt(prompt("Ingresa las horas trabajadas"));
            if(horas <= 40){
                sueldo = horas * 20;
            }else{
                extra = horas - 40;
                sueldo = (40 * 20) + (extra * 25);
            }
            console.log("Horas trabajadas",horas);
            console.log("Tu sueldo semanal es: $",sueldo);
     }   
  
     function ejercicio07() {
        console.log("==========ejercicio 7=================");
        // Hacer un algoritmo en java script para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
    
        let precio, descuento;
      
        switch (tipo) {
          case "A":
            descuento = (precio * 10)/100;
            precio = precio - descuento;
            break;
           case "B":
           descuento = (precio * 15)/100;
           precio = precio - descuento;
           break;
           case "C":   
            descuento = (precio * 20)/100;
           precio = precio - descuento;
           break;
         console.log(
        `El precio es : S/ {precio}`
        );
      }
     }    
     
     function ejercicio08() {
      console.log("==========ejercicio8=================");
      // Hacer un algoritmo en Java script para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
      let nota1, nota2, nota3, promedio;
      nota1 = parseFloat (prompt(‘Ingresa la nota 1’));
      nota2 = parseFloat (prompt(‘Ingresa la nota 2’));
      nota3 = parseFloat (prompt(‘Ingresa la nota 3’));
      promedio=(nota1+nota2+nota3)/3;
      alert('Tu promedio es:'+promedio);
   
      if(promedio>=11.5) {
          alert('Estás Aprobado');
      }else{
          alert(' Estás Reprobado');
      }
  }
  
  function ejercicio09() {
    console.log("==========ejercicio9=================");
    // Hacer un algoritmo en Java Script para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
let sueldo, aum,Nsue; // puede ir var en lugar de let
sueldo=parseFloat(prompt("Ingrese el sueldo"));
if(sueldo<2000){
aum=0.10*sueldo;
}else{
aum=0.05*sueldo;
}
Nsue=sueldo*aum;
document.write('Sueldo actual'+sueldo);
document.write('Aumento'+aum);
document.write('Nuevo sueldo'+Nsue);
}

function ejercicio10() {
  console.log("==========ejercicio10=================");
  // Hacer un algoritmo en Javascript que diga si un número es par o impar.
 Const numero=prompt('Introduce un número:')
 if(numero%2==0){
alert('El número es par');
} else {
alert('El número es impar');
}
}

function ejercicio11() {
console.log("==========ejercicio11=================");
// Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor
function numMayor(num1,num2,num3){
            if(num1>num2){
                alert("num1 es mayor que num2");
            }
            else if(num2>num1){
                alert("num2 es mayor que num1");
            }
            else if(num2>num3){
                alert("num2 es mayor que num3");
            }
            else if (num1>num3){
                alert("num1 es mayor que num3");
            }
            else{
                alert("num3 es mayor que num1");    
            }
        }
      }

      function ejercicio12() {
        console.log("==========ejercicio12=================");
        // Hacer un algoritmo en javascript que lea dos números y diga cuál es el mayor.
                let a,b;
                a=parseInt(prompt("Ingrese un número"));
                b=parseInt(prompt("Ingrese otro número"));
                if(a==b){
                   alert("Los números son iguales");
                }else{
                   if(a>b){
                       alert("El número mayor es;"+a);
                     }else{
                        alert("El número mayor es;"+b);
                    }
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

  function ejercicio15() {
    // Hacer un algoritmo en javascript que convierta centímetros a pulgadas y libras a kilogramos
    console.log("==========ejercicio 15=================");
  
    var centimetros, kilogramos, libras, pulgadas;
      centimetros = parseFloat(prompt ("Ingrese el valor de los centímetros" ));
      libras = parseFloat(prompt ("Ingrese el valor de las libras" ));
      pulgadas=centimetros/2.54;
      kilogramos=libras*0.45359237;
      document.write('Valor de kilogramos equivale'+Kilogramos);
      document.write('Valor de pulgadas equivale'+pulgadas);
  }

  function ejercicio16() {
    // Hacer un algoritmo en Javascript  que lea un número y según ese número, indique el día que corresponde
    console.log("==========ejercicio 16=================");
     let n;
         n = partInt(prompt("Escribe un numero"));
         switch (n) {
      case 1:
        console.log("Lunes");
        break;
  case 2:
        console.log("Martes");
        break;
  case 3:
        console.log("Miércoles");
        break;
  case 4:
        console.log("Jueves");
        break;
  case 5:
        console.log("Viernes");
        break; 
  case 6:
        console.log("Sábado");
        break;
  case 7:
        console.log("Domingo");
        break;
  default:
        console.log("No es un número comprendido entre 1 y 7 ");
    }
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

  function ejercicio18() {
    //Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los //clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los // precios son:
    //$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
    //$7. Entre 100 y 499 unidades.
    //$6. Para mas de 500 unidades.
    //La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número //de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
    
    var ventas,total 
    ventas = parseInt(prompt (“Cuantos CDS vendió?” ));
         if (ventas<=9) {
       total = ventas*10;
        } else {
        if (ventas<=99) {
          total = ventas*8;
            } else {
    
          if (ventas<=499) {
            total = ventas*7;
              } else {
            if (ventas>499) {
              total = ventas*6;
               }
            }
         }
       }
         document.write( 'Total a pagar por el cliente: '+total);
         document.write ('Ganancias del vendedor: '+total*0.0825);
     }
    
     function ejercicio19() {
      var tipo,diaTrabajado,salario;
       salario = 0;
       tipo= parseInt(prompt ( 'Ingrese el identificador del empleado'));
       diaTrabajado= parseInt(prompt ('Ingrese los días trabajados'));
          Switch(tipo){
          1:
         salario = diaTrabajado*56;
         break;
        2:
         salario = diaTrabajado*64;
          break;
        3:
         salario = diaTrabajado*80;
          break;
        4:
         salario = diaTrabajado*48;
          break;
         default:
            console.log("tipo no válido ");
          }
        Document.write('La cantidad a pagar es: '+salario);
      }

      Function Ejercicio20(){
        //Proceso operaciones 4 Números
           var numero,suma, mayor,par
          suma=0;
         mayor = 0;
           for (let i = 0; i < 5; i++) {
                    document.write( "PROCESO ") + i;
                   numero= parseInt(prompt ("Ingresa el valor de un numero:"));
                        suma=suma+ numero;
                       if(( i = 1) O (mayor<numero)) {
                        mayor = numero;
                       }
                       if( numero mod 2 =0) {
                        Par=par+ 1 ;
                  }
                 document.write( " ");
               }
                 document.write( "Valor de mayor: "+ mayor);
                 document.write ("los numeros pares son: ", par);
                 document.write("la suma  de los 4 números es: ", suma);
                 document.write("la media  de los 4 números es: ", suma/4);
        }
          

        function ejercicio21() {
          var dato=5;
          var resultado=dato;
          var i=dato-1;
          while(i>1){
          resultado=resultado+i;
            i--;
          }
          alert(resultado);
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
  

  Function Ejercicio24(){
    // Hacer un algoritmo en javascript para realizar la suma de todos los números pares hasta el 1000.
    
      var sumapar,i;
      sumapar = 0;
       for (let i= 1;i <1000; i++){
        if( i%2= 0) {
          sumapar=sumapar + i;			;
          alert i;
        }
      }
      
      document.word("La suma de los numeros pares es: "+sumapar);
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