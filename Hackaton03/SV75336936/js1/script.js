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
    let num = parseInt(prompt("Escribe un numero"))
    
    if (isNaN(num)) {
        alert('Por favor, ingrese un numero válido.')
        console.log('Por favor, ingrese un numero válido.')
    } else if (num < 0) {
        alert('El numero es negativo.')
        console.log('El numero es negativo.')
    } else if (num > 0){
        alert('El numero no es negativo.')
        console.log('El numero no es negativo.')
    }
}

function ejercicio03(){
    let numStr = prompt('Ingrese un numero: ') // Guardamos la entrada como string
    let num = parseInt(numStr)

    if (isNaN(num)) {
        alert('Por favor, ingrese un numero válido.')
        console.log('Por favor, ingrese un numero válido.')
    } else if (numStr.endsWith('4')) { // Comprobamos el último carácter de la cadena
        alert('El numero termina en 4.')
        console.log('El numero termina en 4.')
    } else {
        alert('El numero no termina en 4.')
        console.log('El numero no termina en 4.')
    }
}

function ejercicio04() {
    
    let num1, num2, num3, menor, medio, mayor
  
    num1 = parseInt(prompt("ingrese un numero"))
    num2 = parseInt(prompt("ingrese un numero"))
    num3 = parseInt(prompt("ingrese un numero"))
  
    if (num1 <= num2 && num1 <= num3) {
      menor = num1
      if (num2 <= num3) {
        medio = num2
        mayor = num3
      } else {
        medio = num3
        mayor = num2
      }
    } else {
      if (num2 <= num1 && num2 <= num3) {
        menor = num2
        if (num1 <= num3) {
          medio = num1
          mayor = num3
        } else {
          medio = num3
          mayor = num1
        }
      } else {
        menor = num3
        if (num1 < num2) {
          medio = num1
          mayor = num2
        } else {
          medio = num2
          mayor = num1
        }
      }
    }
    console.log("Numero 1: ", num1)
    console.log("Numero 2: ", num2)
    console.log("Numero 3: ", num3)
    alert( `Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}` )
    console.log(`Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`)
  }

function ejercicio05() {
  
    let cantidadZapatos = parseInt(prompt('Ingrese cantidad de zapatos comprados: '))
    console.log('Ingrese cantidad de zapatos comprados: ', cantidadZapatos)
    const precio = 80
    let descuento = 0

    if (isNaN(cantidadZapatos) || cantidadZapatos < 0) {
        alert("Por favor, ingrese un numero válido.")
        console.log("Por favor, ingrese un numero válido.")
        return
    }

    //operacion
    let totalOriginal = cantidadZapatos * precio
    let totalPagar = cantidadZapatos * precio
  
    if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
      descuento = totalOriginal * 0.1
      totalPagar = totalOriginal - descuento
    } else {
      if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
        descuento = totalOriginal * 0.2
        totalPagar = totalOriginal - descuento
      } else {
        if (cantidadZapatos >= 30) {
          descuento = totalOriginal * 0.4
          totalPagar = totalOriginal - descuento
        }
      }
    }
    alert(`Cantidad comprada: ${cantidadZapatos}`)
    alert(`Total Original: S/. ${totalOriginal}`)
    alert(`Descuento: S/. ${descuento}`)
    alert(`Total a pagar: S/. ${totalPagar}`)
    console.log(`Cantidad comprada: ${cantidadZapatos}`)
    console.log(`Total Original: S/. ${totalOriginal}`)
    console.log(`Descuento: S/. ${descuento}`)
    console.log(`Total a pagar: S/. ${totalPagar}`)
}
 
function ejercicio06() {
  
    let nota1 = parseInt(prompt('Ingrese horas Trabajadas: '))
    console.log('Ingrese horas trabajadas: ', nota1)
    const hNormales = 40
    let hExtras
    const pago = 20
    const pagoExtra = 25
    let montoDescuento

    if (isNaN(nota1) || nota1 < 0) {
        alert("Por favor, ingrese un numero válido.")
        console.log("Por favor, ingrese un numero válido.")
        return
    }
    
  
    if (nota1 <= hNormales) {
      montoDescuento = nota1 * pago
    } else {
       hExtras = nota1 - hNormales
       montoDescuento = (hNormales * pago) + (hExtras * pagoExtra)
      }
    
    alert(`Monto de Descuuento: S/.  ${montoDescuento}`)
    console.log(`Monto de Descuuento: S/.  ${montoDescuento}`)
}

function ejercicio07() {
  
    let precio = parseInt(prompt('Ingrese el precio de la compra: '))
    let tipoMembresia = prompt('Ingrersar tipo de Membresia (A, B o C):').toUpperCase()
    console.log('Ingrese el precio de la compra: ', precio)
    console.log('Ingrersar tipo de Membresia (A, o C):', tipoMembresia)
    let descuento = 0 
    let precioFinal , montoDescuento

    if (isNaN(precio) || precio < 0) {
        alert("Por favor, ingrese un numero válido.")
        console.log("Por favor, ingrese un numero válido.")
        return
    }
    
  
   switch (tipoMembresia){
        case "A":
            descuento = 0.10
            break
        case "B":
            descuento = 0.15
            break
        case "C":
            descuento = 0.20
            break
        default:
            alert("Tipo de membresía no válido. Ingrese A, B o C.")
            console.log("Tipo de membresía no válido.")
            return
}

    montoDescuento = precio * descuento
    precioFinal = precio - montoDescuento

    
    alert(`Monto de Descuuento: S/.  ${montoDescuento}`)
    console.log(`Monto de Descuuento: S/.  ${montoDescuento}`)
    alert(`Precio a pagar: S/.  ${precioFinal}`)
    console.log(`Precio a pagar: S/.  ${precioFinal}`)
}

function ejercicio08() {
  
    let nota1 = parseInt(prompt('Ingresar Nota 1: '))
    let nota2 = parseInt(prompt('Ingresar Nota 2: '))
    let nota3 = parseInt(prompt('Ingresar Nota 3: '))
    console.log('Ingrese nota 1: ', nota1)
    console.log('Ingrese nota 2: ', nota2)
    console.log('Ingrese nota 3: ', nota3)

    if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 >20 ||
        nota2 < 0 || nota2 >20 ||
        nota3 < 0 || nota3 >20    
    ) {
        alert("Por favor, ingrese un numero válido.")
        console.log("Por favor, ingrese un numero válido.")
        return
    }
    
    let promedio = ((nota1 + nota2 + nota3) / 3)
  
    if (promedio >= 10.5 ) {
        alert( `Aprobado, tu promedio es: ${promedio}`)
        console.log("Aprobado")
        console.log("Promedio: ", promedio)
    } else if(promedio < 10.5) {
        alert( `Desaprobado, tu promedio es: ${promedio}`)
        console.log("Desaprobado")
        console.log("Promedio: ", promedio)
      }

}

function ejercicio09() {
  
    let sueldoActual = parseInt(prompt('Ingresar sueldo Actual: '))
    console.log('Ingrese suledo Actual ', sueldoActual)
    let aumento, nSueldo
    
    if (isNaN(sueldoActual) || sueldoActual < 0) {
        alert('Por favor, ingrese un numero válido.')
        console.log('Por favor, ingrese un numero válido.')
        return
    }
  
    if (sueldoActual > 2000 ) {
        aumento = sueldoActual * 0.05
    } else {
        aumento = sueldoActual * 0.10
      }

    nSueldo = sueldoActual + aumento

    alert(`El aumento es: S/.  ${aumento}`)
    alert(`El nuevo sueldo es: S/.  ${nSueldo}`)
    console.log(`El aumento es: S/.  ${aumento}`)
    console.log(`El nuevo sueldo es: S/.  ${nSueldo}`)

}

function ejercicio10() {
  
    let numero = parseInt(prompt("Ingrese un numero entero:"))

    if (isNaN(numero)) {
        alert("Por favor, ingrese un numero válido.")
        console.log("Entrada inválida. Asegúrese de ingresar un numero entero.")
        return
    }

    if (numero % 2 === 0) {
        alert(`El numero ${numero} es PAR`)
        console.log(`El numero ${numero} es PAR`)
    } else {
        alert(`El numero ${numero} es IMPAR`)
        console.log(`El numero ${numero} es IMPAR`)
    }
}

function ejercicio11() {
  
    let n1 = parseFloat(prompt("Ingrese el primer numero:"))
    let n2 = parseFloat(prompt("Ingrese el segundo numero:"))
    let n3 = parseFloat(prompt("Ingrese el tercer numero:"))

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, ingrese numeros válidos.")
        console.log("Entrada inválida. Asegúrese de ingresar numeros.")
        return
    }


    if (n1 > n2 && n1 > n3) {
        alert(`El numero mayor es: ${n1}`)
        console.log(`El numero mayor es: ${n1}`)
    } else if (n2 > n1 && n2 > n3) {
        alert(`El numero mayor es: ${n2}`)
        console.log(`El numero mayor es: ${n2}`)
    } else if (n3 > n1 && n3 > n2) {
        alert(`El numero mayor es: ${n3}`)
        console.log(`El numero mayor es: ${n3}`)
    } else {
        alert("Hay numeros iguales, no hay un único mayor.")
        console.log("Hay numeros iguales, no hay un único mayor.")
    }
}

function ejercicio12() {
  
    let n1 = parseFloat(prompt("Ingrese el primer numero:"))
    let n2 = parseFloat(prompt("Ingrese el segundo numero:"))

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingrese numeros válidos.")
        console.log("Entrada inválida. Asegúrese de ingresar numeros.")
        return
    }

    if (n1 > n2) {
        alert(`El numero mayor es: ${n1}`)
        console.log(`El numero mayor es: ${n1}`)
    } else if (n2 > n1) {
        alert(`El numero mayor es: ${n2}`)
        console.log(`El numero mayor es: ${n2}`)
    } else {
        alert("Los dos numeros son iguales.")
        console.log("Los dos numeros son iguales.")
    }
}

function ejercicio13() {
let letra = prompt("Ingrese una letra:").toLowerCase() 

if (!letra || letra.length !== 1 || !isNaN(letra)) {
    alert("Por favor, ingrese solo una letra válida.")
    console.log("Entrada inválida. Asegúrese de ingresar una sola letra.")
    return
}

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert("La letra es una vocal.")
        console.log("La letra es una vocal.")
        break
    default:
        alert("No es una vocal.")
        console.log("No es una vocal.")
}
}

function ejercicio14() {
    let num = parseInt(prompt("Ingrese un numero entero entre 1 y 10:"))

    if (isNaN(num) || num < 1 || num > 10) {
        alert("Error: El numero debe estar entre 1 y 10.")
        console.log("Error: El numero debe estar entre 1 y 10.")
        return
    }

    let primo = (num === 2 || num === 3 || num === 5 || num === 7)

    if (primo) {
        alert(`${num} es un numero primo.`)
        console.log(`${num} es un numero primo.`)
    } else {
        alert(`${num} no es un numero primo.`)
        console.log(`${num} no es un numero primo.`)
    }
}

function ejercicio15() {
  
    let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"))
    
    if (isNaN(cm) || cm < 0) {
        alert("Por favor, ingrese un numero válido para los centímetros.")
        console.log("Entrada inválida para centímetros.")
        return
        }
        
    let precioUnitariolgadas = cm / 2.54
    alert(`${cm} cm equivalen a ${precioUnitariolgadas.toFixed(2)} precioUnitariolgadas.`)
    console.log(`${cm} cm equivalen a ${precioUnitariolgadas.toFixed(2)} precioUnitariolgadas.`)
    

    let libras = parseFloat(prompt("Ingrese la cantidad en libras:"))
    if (isNaN(libras) || libras < 0) {
    alert("Por favor, ingrese un numero válido para las libras.")
    console.log("Entrada inválida para libras.")
    return
    }
        
    let kg = libras * 0.453592
    alert(`${libras} libras equivalen a ${kg.toFixed(2)} kilogramos.`)
    console.log(`${libras} libras equivalen a ${kg.toFixed(2)} kilogramos.`)
}

function ejercicio16() {
    let num = parseInt(prompt("Ingrese un numero del 1 al 7:"))

    if (isNaN(num) || num < 1 || num > 7) {
        alert("numero inválido. Debe ingresar un numero del 1 al 7.")
        console.log("numero inválido. Debe ingresar un numero del 1 al 7.")
        return
    }

    let dia
    switch (num) {
        case 1:
            dia = "Lunes"
            break
        case 2:
            dia = "Martes"
            break
        case 3:
            dia = "Miércoles"
            break
        case 4:
            dia = "Jueves"
            break
        case 5:
            dia = "Viernes"
            break
        case 6:
            dia = "Sábado"
            break
        case 7:
            dia = "Domingo"
            break
    }


    alert(`El día correspondiente es ${dia}.`)
    console.log(`El día correspondiente es ${dia}.`)
}

function ejercicio17() {
    let horas = parseInt(prompt("Ingrese las horas (0-23):"))
    let minutos = parseInt(prompt("Ingrese los minutos (0-59):"))
    let segundos = parseInt(prompt("Ingrese los segundos (0-59):"))

    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos) || 
        horas < 0 || horas > 23 || 
        minutos < 0 || minutos > 59 || 
        segundos < 0 || segundos > 59) {
        
        alert("Error: Ingrese valores válidos.")
        console.log("Error: Ingrese valores válidos.")
        return
    }

    segundos++

    if (segundos === 60) {
        segundos = 0
        minutos++
    }

    if (minutos === 60) {
        minutos = 0
        horas++
    }

    if (horas === 24) {
        horas = 0
    }

    let resultado = `La hora dentro de un segundo será: ${horas}h ${minutos}m ${segundos}s`
    alert(resultado)
    console.log(resultado)
}

function ejercicio18() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"))
    let precioUnitario 
    const porcentajeGanancias = 0.0825 

    if (isNaN(cantidad) || cantidad < 1) {
        alert("Cantidad inválida.")
        console.log("Cantidad inválida.")
        return
    }

    if (cantidad >= 1 && cantidad <= 9) {
        precioUnitario = 10
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioUnitario = 8
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioUnitario = 7
    } else if (cantidad >= 500) {
        precioUnitario = 6
    }
    let tventa = cantidad * precioUnitario
    let ganancia = tventa * porcentajeGanancias

    alert(`El precio unitario es: $${precioUnitario}`)
    alert(`El total de la venta es: $${tventa}`)
    alert(`La ganancia del vendedor es: $${ganancia.toFixed(2)}`)

    console.log(`El precio unitario es: $${precioUnitario}`)
    console.log(`El total de la venta es: $${tventa}`)
    console.log(`La ganancia del vendedor es: $${ganancia.toFixed(2)}`)
}

function ejercicio19() {
    let id = parseInt(prompt(
        "Ingrese el numero identificador del empleado:\n" +
        "1 = Cajero ($56 por día)\n" +
        "2 = Servidor ($64 por día)\n" +
        "3 = Preparador de mezclas ($80 por día)\n" +
        "4 = Mantenimiento ($48 por día)"
    ))
    
    let dias = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"))

    if (isNaN(dias) || dias < 1 || dias > 6) {
        alert("Error: Los días trabajados deben estar entre 1 y 6.")
        console.log("Error: Los días trabajados deben estar entre 1 y 6.")
        return
    }

    let salariodiario

    switch (id) {
        case 1:
            salariodiario = 56
            break
        case 2:
            salariodiario = 64
            break
        case 3:
            salariodiario = 80
            break
        case 4:
            salariodiario = 48
            break
        default:
            alert("Error: Identificador de empleado no válido.")
            console.log("Error: Identificador de empleado no válido.")
            return
    }

    let ptotal = salariodiario * dias

    alert(`El pago total para el empleado es: $${ptotal}`)
    console.log(`El pago total para el empleado es: $${ptotal}`)
}

function ejercicio20() {
    let n1 = parseInt(prompt("Ingrese el primer numero entero positivo:"))
    let n2 = parseInt(prompt("Ingrese el segundo numero entero positivo:"))
    let n3 = parseInt(prompt("Ingrese el tercer numero entero positivo:"))
    let n4 = parseInt(prompt("Ingrese el cuarto numero entero positivo:"))

   
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || n1 <= 0 || n2 <= 0 || n3 <= 0 || n4 <= 0) {
        alert("Error: Debe ingresar solo numeros enteros positivos.")
        console.log("Error: Debe ingresar solo numeros enteros positivos.")
        return
    }

    let contadorPares = 0

    if (n1 % 2 === 0) contadorPares++
    if (n2 % 2 === 0) contadorPares++
    if (n3 % 2 === 0) contadorPares++
    if (n4 % 2 === 0) contadorPares++

    let mayor = Math.max(n1, n2, n3, n4)

    if (n3 % 2 === 0) {
        let cuadradoSegundo = n2 * n2
        alert(`El cuadrado del segundo numero es: ${cuadradoSegundo}`)
        console.log(`El cuadrado del segundo numero es: ${cuadradoSegundo}`)
    }

    if (n1 < n4) {
        let media = (n1 + n2 + n3 + n4) / 4
        alert(`La media de los cuatro numeros es: ${media}`)
        console.log(`La media de los cuatro numeros es: ${media}`)
    }

    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
        let suma = n1 + n2 + n3 + n4
        alert(`La suma de los cuatro numeros es: ${suma}`)
        console.log(`La suma de los cuatro numeros es: ${suma}`)
    }

    alert(`Cantidad de numeros pares: ${contadorPares}`)
    alert(`El mayor de todos los numeros es: ${mayor}`)
    console.log(`Cantidad de numeros pares: ${contadorPares}`)
    console.log(`El mayor de todos los numeros es: ${mayor}`)
}

function ejercicio21() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"))

    if (isNaN(n) || n < 0) {
        alert("Error: El número debe ser positivo.")
        console.log("Error: El número debe ser positivo.")
        return
    }

    let factorial = 1
    for (let i = 1 ;i <= n; i++) {
        factorial *= i
    }

    alert("El factorial de " + n + " es: " + factorial)
    console.log("El factorial de " + n + " es: " + factorial)
}

function ejercicio22() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"))

    if (isNaN(n) || n <= 0) {
        alert("Error: Debe ingresar un número entero positivo.")
        console.log("Error: Debe ingresar un número entero positivo.")
        return
    }

    let suma = 0
    let impares = []

    for (let i = 1; i <= n ; i += 2) {
        suma += i
        impares.push(i)
    }

    alert("Números impares hasta " + n + ": " + impares.join(", "))
    alert("La suma de los números impares menores o iguales a " + n + " es: " + suma)

    console.log("Números impares hasta " + n + ": " + impares.join(", "))
    console.log("La suma de los números impares menores o iguales a " + n + " es: " + suma)
}

function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"))
    console.log("Número ingresado:", n)

    if (isNaN(n) || n < 1) {
        alert("Error: Ingrese un número positivo.")
        console.log("Error: Ingrese un número positivo.")
        return
    }

    let suma = 0
    
    for (let i = 1; i <= n ;i += 2) {
        suma += i
    }

    alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`)
    console.log(`La suma de los números impares menores o iguales a ${n} es: ${suma}`)
}

function ejercicio24() {
    let opcion = prompt("Ingrese 'a' para calcular la suma de los números pares de 0 a 1000:").toLowerCase()
    console.log("Opción ingresada:", opcion)

    switch (opcion) {
        case "a":
            let suma = 0
            for (let i = 0 ;i <= 1000 ;i += 2) {
                suma += i
            }

            alert(`La suma de todos los números pares de 0 a 1000 es: ${suma}`)
            console.log(`La suma de todos los números pares de 0 a 1000 es: ${suma}`)
            break

        default:
            alert("Entrada no válida. Debe ingresar la letra 'a'.")
            console.log("Entrada no válida. Debe ingresar la letra 'a'.")
            break
    }
}

function ejercicio25() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"))
    console.log("Número ingresado:", n)

    // Validar que sea un número positivo
    if (isNaN(n) || n < 0) {
        alert("Error: Debe ingresar un número entero positivo.")
        console.log("Error: Debe ingresar un número entero positivo.")
        return
    }

    let factorial = 1
    let contador = 1

    while (contador <= n) {
        factorial *= contador
        contador++
    }

    alert(`El factorial de ${n} es: ${factorial}`)
    console.log(`El factorial de ${n} es: ${factorial}`)
}

function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo (número a dividir):"))
    let divisor = parseInt(prompt("Ingrese el divisor (número por el cual se divide):"))

    console.log("Dividendo ingresado:", dividendo)
    console.log("Divisor ingresado:", divisor)

    // Validar que el divisor no sea cero
    if (isNaN(dividendo) || isNaN(divisor)) {
        alert("Error: Debe ingresar números válidos.")
        console.log("Error: Debe ingresar números válidos.")
        return
    }
    if (divisor === 0) {
        alert("Error: No se puede dividir entre cero.")
        console.log("Error: No se puede dividir entre cero.")
        return
    }

    let cociente = 0
    let resto = dividendo

    while (resto >= divisor) {
        resto -= divisor
        cociente++
    }

    alert(`El cociente es: ${cociente}\nEl resto es: ${resto}`)
    console.log(`El cociente es: ${cociente}`)
    console.log(`El resto es: ${resto}`)
}

function ejercicio27() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));

    console.log("Número ingresado:", n);

    // Validar que el número sea positivo
    if (isNaN(n) || n < 0) {
        alert("Error: Debe ingresar un número entero positivo.");
        console.log("Error: Debe ingresar un número entero positivo.");
        return;
    }

    let factorial = 1;
    let contador = 1;

    while (contador <= n) {
        factorial *= contador;
        contador++;
    }

    alert(`El factorial del número ${n} es: ${factorial}`);
    console.log(`El factorial del número ${n} es: ${factorial}`);
}

function ejercicio28() {
    let opcion = prompt("Ingrese 'a' para calcular la suma de los primeros 100 números:").toLowerCase();

    switch (opcion) {
        case "a":
            let suma = 0;
            for (let i = 1; i <= 100; i++) {
                suma += i;
            }
            alert("La suma de los primeros 100 números es: " + suma);
            console.log("La suma de los primeros 100 números es: " + suma);
            break;
        default:
            alert("Opción no válida. Debe ingresar 'a'.");
            console.log("Opción no válida. Debe ingresar 'a'.");
    }
}

function ejercicio29() {
    let opcion = prompt("Ingrese 'a' para calcular la suma de los primeros 100 números:").toLowerCase();

    switch (opcion) {
        case "a":
            let suma = 0;
            let i = 1;

            while (i <= 100) {
                suma += i;
                i++;
            }

            alert("La suma de los primeros 100 números es: " + suma);
            console.log("La suma de los primeros 100 números es: " + suma);
            break;
            
        default:
            alert("Opción no válida. Debe ingresar 'a'.");
            console.log("Opción no válida. Debe ingresar 'a'.");
    }
}

function ejercicio30() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros 100 números es: " + suma);
    console.log("La suma de los primeros 100 números es: " + suma);
}

function ejercicio31() {
    let spares = 0, simpares = 0, contapar = 0, contaimpar = 0;
    let mediapares = 0, mediaimpares = 0;

    for (let i = 1; i <= 10; i++) {
        let n = parseInt(prompt("Ingrese el número " + i + ":"));

        if (isNaN(n)) {
            alert("Por favor, ingrese un número válido.");
            console.log("Por favor, ingrese un número válido.");
            i--; // Restar uno para repetir la entrada
            continue;
        }

        if (n % 2 === 0) {
            spares += n;
            contapar++;
        } else {
            simpares += n;
            contaimpar++;
        }
    }

    mediapares = contapar > 0 ? spares / contapar : 0;
    mediaimpares = contaimpar > 0 ? simpares / contaimpar : 0;

    alert(`La media de los números pares es: ${mediapares}`);
    console.log(`La media de los números pares es: ${mediapares}`);

    alert(`La media de los números impares es: ${mediaimpares}`);
    console.log(`La media de los números impares es: ${mediaimpares}`);
}

function ejercicio32() {
    let mayorPoblacion = 0;
    let ciudadMayorPoblacion = "";

    for (let i = 1; i <= 3; i++) {
        let nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}:`);

        for (let j = 1; j <= 2; j++) {
            let nombreCiudad = prompt(`Ingrese el nombre de la ciudad ${j} de la provincia ${nombreProvincia}:`);
            let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${nombreCiudad}:`));

            if (isNaN(poblacion) || poblacion < 0) {
                alert("Por favor, ingrese un número válido para la población.");
                console.log("Por favor, ingrese un número válido para la población.");
                j--; 
                continue;
            }

            if (poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayorPoblacion = nombreCiudad;
            }
        }
    }

    alert(`La ciudad con mayor población es: ${ciudadMayorPoblacion} con una población de ${mayorPoblacion}`);
    console.log(`La ciudad con mayor población es: ${ciudadMayorPoblacion} con una población de ${mayorPoblacion}`);
}

function ejercicio33() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));

    console.log("Número ingresado:", n);

    // Validar que el número sea positivo
    if (isNaN(n) || n < 0) {
        alert("Error: Debe ingresar un número entero positivo.");
        console.log("Error: Debe ingresar un número entero positivo.");
        return;
    }

    let factorial = 1;
    let contador = 1;

    while (contador <= n) {
        factorial *= contador;
        contador++;
    }

    alert(`El factorial del número ${n} es: ${factorial}`);
    console.log(`El factorial del número ${n} es: ${factorial}`);
}

function ejercicio34() {
    let resultado = "";

    for (let i = 1; i <= 9; i++) {
        resultado += `Tabla del ${i}:\n`;
        console.log(`Tabla del ${i}:`);

        for (let j = 1; j <= 10; j++) {
            let operacion = `${i} x ${j} = ${i * j}`;
            resultado += operacion + "\n";
            console.log(operacion);
        }

        resultado += "\n"; 
    }

    alert(resultado); 
}

function ejercicio35() {
    let n = parseInt(prompt("Ingrese el numero 1:"));

    if (isNaN(n)) {
        alert("Error: Debe ingresar un numero válido.");
        console.log("Error: Debe ingresar un numero válido.");
        return;
    }

    let mayor = n;
    let menor = n;

    for (let i = 2; i <= 20; i++) {
        n = parseInt(prompt(`Ingrese el numero ${i}:`));

        if (isNaN(n)) {
            alert("Error: Debe ingresar un numero válido.");
            console.log("Error: Debe ingresar un numero válido.");
            return;
        }

        if (n > mayor) {
            mayor = n;
        }

        if (n < menor) {
            menor = n;
        }
    }

    alert(`El numero mayor es: ${mayor}`);
    alert(`El numero menor es: ${menor}`);

    console.log(`El numero mayor es: ${mayor}`);
    console.log(`El numero menor es: ${menor}`);
}

function ejercicio36() {
    let n = parseInt(prompt("Ingrese la cantidad de terminos de la serie Fibonacci:"));

    if (isNaN(n) || n <= 0) {
        alert("Ingrese un numero mayor a 0.");
        console.log("Ingrese un numero mayor a 0.");
        return;
    }

    let a = 0, b = 1, c;

    alert("Serie de Fibonacci:");
    console.log("Serie de Fibonacci:");

    alert(a);
    console.log(a);

    if (n > 1) {
        alert(b);
        console.log(b);
    }

    for (let i = 3; i <= n; i++) {
        c = a + b;
        alert(c);
        console.log(c);
        a = b;
        b = c;
    }
}

function ejercicio37() {
    let a = parseInt(prompt("Ingrese el primer numero:"));
    let b = parseInt(prompt("Ingrese el segundo numero:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Error: Debe ingresar valores numericos.");
        console.log("Error: Debe ingresar valores numericos.");
        return;
    }

    let resto;
    while (b !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }

    alert("El Maximo Comun Divisor (MCD) es: " + a);
    console.log("El Maximo Comun Divisor (MCD) es: " + a);
}

function ejercicio38() {
    let numero = parseInt(prompt("Ingrese un numero para verificar si es perfecto:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Error: Debe ingresar un numero entero positivo.");
        console.log("Error: Debe ingresar un numero entero positivo.");
        return;
    }

    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) { // Se corrige la condición para no incluir el número mismo
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        alert("El numero " + numero + " es perfecto.");
        console.log("El numero " + numero + " es perfecto.");
    } else {
        alert("El numero " + numero + " no es perfecto.");
        console.log("El numero " + numero + " no es perfecto.");
    }
}

function ejercicio39() {
    let pi2 = 0;
    let n = 1;
    let signo = 1;
    
    let iteraciones = parseInt(prompt("Ingrese el numero de iteraciones:"));

    if (isNaN(iteraciones) || iteraciones <= 0) {
        alert("Error: Debe ingresar un numero entero positivo.");
        console.log("Error: Debe ingresar un numero entero positivo.");
        return;
    }

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / n;
        pi2 += signo * termino;
        signo *= -1;
        n += 2;
    }

    alert("La aproximacion de pi despues de " + iteraciones + " iteraciones es: " + pi2);
    console.log("La aproximacion de pi despues de " + iteraciones + " iteraciones es: " + pi2);
}

function ejercicio40() {
    let pi2 = 3;
    let n = 2;
    let signo = 1;

    let iteraciones = parseInt(prompt("Ingrese el numero de iteraciones:"));

    if (isNaN(iteraciones) || iteraciones <= 0) {
        alert("Error: Debe ingresar un numero entero positivo.");
        console.log("Error: Debe ingresar un numero entero positivo.");
        return;
    }

    for (let i = 1; i <= iteraciones; i++) {
        let termino = 4 / (n * (n + 1) * (n + 2));
        pi2 += signo * termino;
        signo *= -1;
        n += 2;
    }

    alert("La aproximacion de pi despues de " + iteraciones + " iteraciones es: " + pi2);
    console.log("La aproximacion de pi despues de " + iteraciones + " iteraciones es: " + pi2);
}
