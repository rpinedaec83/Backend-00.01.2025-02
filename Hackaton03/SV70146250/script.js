function ejercicio01(){
    /*
    Ejemplo profesor
    1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

    let numero  = parseInt(prompt("Escribe un numero"))
    if(numero>99 && numero<1000){
        alert("Tiene 3 digitos")
    }
    else{
        alert("No tiene 3 digitos")
    }
*/
alert("Tres_digitos")
    let num = prompt("Ingrese un numero:"); // Pedir numero al usuario
    num = parseFloat(num); // Convertir a numero decimal
    if (!num) { //Evalua que el dato ingresado sea Float, igual que el num.
        alert("Error: Debe ser un numero");
    }else{
        // Evaluar si no es entero, Math.trunc elimina el decimal
        if (Math.trunc(num) !== num) { //!== Diferencia estricta
            alert("OJO: Solo se evalua la parte entera");
        }
        // Extraer parte entera y hacer positivo
        num = Math.trunc(Math.abs(num)); //Math.abs saca el valor absoluto

        // Evaluar si tiene 3 digitos
        if (num >= 100 && num <= 999) {
            alert("[Tiene 3 Digitos]");
        } else {
            alert("[No tiene 3 Digitos]");
        }
    }
}

function ejercicio02(){
alert("Evalua_negativo");
    let num = parseFloat(prompt("Ingrese un numero entero:")); // Pedir numero, admite decimal
    if (!num) { //Evalua que el dato ingresado sea Float, igual que el num.
        alert("Error: Debe ser un numero entero");
    }else{  
    //Evaluar si no es entero para advertir
         if (Math.trunc(num) !== num){
         alert("*ADVERTENCIA*NO*ES*ENTERO*")
        }else{ 		//Evalua si es negativo
         if ( num < 0 ){
             alert("[El numero es Negativo]")
         }else{
             alert("[El numero es NO Negativo]")
         }
        }
    }
}

function ejercicio03(){
alert("Evalua_Termina_4");
    let num = prompt("Ingrese un numero:"); // Pedir numero al usuario
    if (!isNaN(num)===false){ //Validacion que sea un numero
        alert("Error: Debe ser un numero ") 
        }else{
        // Subcadena extrae de la cadena num, la ultima cifra.
        // Longitud determina el tamaño de la cadena, por tanto la ultima cifra.
        // digito almacena el numero resultado de convertir con Number
     
        let digito = Number(num.substring(num.length - 1));

        // Evalua el ultimo digito
        if (digito == 4) {
            alert("Termina en 4");
        } else {
            alert("No termina en 4");
        }
}
}

function ejercicio04(){
alert("menor_a_MAYOR");
    let num1 = parseInt(prompt("Ingrese 1er numero:"));
    let num2 = parseInt(prompt("Ingrese 2do numero:"));
    let num3 = parseInt(prompt("Ingrese 3er numero:"));


    if (!num1 || !num2 || !num3){ //Validacion que sea un numero entero
            alert("ADVERTENCIA: *SOLO ENTEROS*") 
        }else{
        if(num1>num2){
            let temporal=num2
            num2=num1
            num1=temporal
        }
        if(num1>num3){
            let temporal=num3
            num3=num1
            num1=temporal
        }
        if(num2>num3){
            let temporal=num3
            num3=num2 
            num2=temporal
        }
        alert(`Orden ascendente: [${num1}] - [${num2}] - [${num3}]`)
    }
}

function ejercicio05(){
alert("Venta_AlMayor_Zapatos");
    //Number() convierte a numero el dato ingresado
    let cantidadZapatos = Number(prompt("Ingrese numero de Zapatos comprados:"));
    let precio = 80; 
    // Valida si es 0 o negativo
    if (cantidadZapatos < 1) {
        alert(" *SOLO ADMITEN ENTEROS POSITIVOS*");
    } else if (Math.trunc(cantidadZapatos) !== cantidadZapatos) { // Valida si es decimal
        alert(" *SOLO ADMITEN ENTEROS POSITIVOS*");
    } else {
        let totalOriginal = cantidadZapatos * precio // Calculo total sin descuentos
        let descuento = 0 // Inicializa el descuento
        let totalPagar = totalOriginal // Inicializa el total a pagar
        // Aplica descuentos segun la cantidad comprada
        if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
            descuento = totalOriginal * 0.1 // 10%
            totalPagar = totalOriginal * (1 - 0.1)
        } else if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
            descuento = totalOriginal * 0.2 // 20%
            totalPagar = totalOriginal * (1 - 0.2)
        } else if (cantidadZapatos >= 30) {
            descuento = totalOriginal * 0.4 // 40%
            totalPagar = totalOriginal * (1 - 0.4)
        }
    
        // Muestra los resultados con alert()
        alert(` Cantidad comprada:   ${cantidadZapatos} unidades
          Total original:       $${totalOriginal}
            Descuento:         $${descuento}
            Total a pagar:     $${totalPagar}`);
    }
}

function ejercicio06(){
alert("Sueldo_Semanal");
    let cantidadHoras = Number(prompt("Ingrese horas trabajadas en la semana:"));
    if (!cantidadHoras ){ //Validacion que sea un numero 
        alert("ADVERTENCIA: *SOLO NUMEROS*") 
    }else{
        // Valida si es negativo
        if (cantidadHoras < 0) {
            alert(" *NO ADMITE NEGATIVO*");
        } else {
            let SueldoSemana = cantidadHoras * 20; // Pago normal por hora
        
            // Si trabaja mas de 40 horas, se calculan horas extra
            if (cantidadHoras > 40) {
                let PagoHorasExtra = (cantidadHoras - 40) * 25;
                SueldoSemana = 800 + PagoHorasExtra; // 800 es el pago base de 40 horas
            }
        
            // Muestra el sueldo semanal
            alert(`Sueldo semanal: $${SueldoSemana}`);
        }
    }
}

function ejercicio07(){
alert("Descuento_Helado");
    let Importe = Number(prompt("Ingrese importe de compra ($):"));
    if (!Importe){ //Validacion que sea un numero
        alert("ADVERTENCIA: *SOLO NUMEROS*") 
    }else{
        // Solicita el tipo de membresia                             .toUpperCase() convierte en Mayus
        let tipoMembresia = prompt("Ingrese tipo de Membresia [A][B][C]:").toUpperCase();

        let descuento = 0;

        // Valida si el importe es negativo
        if (Importe < 0) {
            alert(" *IMPORTE NO PUEDE SER NEGATIVO*");
        } else {
            // Aplica descuento segun el tipo de membresia
            switch (tipoMembresia) {
                case 'A':
                    alert("Descuento del 10%");
                    descuento = Importe * 0.1;
                    break;
                case 'B':
                    alert("Descuento del 15%");
                    descuento = Importe * 0.15;
                    break;
                case 'C':
                    alert("Descuento del 20%");
                    descuento = Importe * 0.2;
                    break;
                default:                        //Salto de linea
                    alert("Tipo de Membresia Invalido \n **Sin descuento**");
                    descuento = 0;
                    break;
            }

            // Calcula el importe final
            Importe = Importe - descuento;

            // Muestra los resultados
            alert(`El descuento es: $${descuento}
                El importe final es: $${Importe}`);
        }
    }
}

function ejercicio08(){
alert("Promedio_Aprobad_o_Desaprobado");
	let nota1=parseFloat(prompt("Ingrese 1ra nota: "));
    let nota2=parseFloat(prompt("Ingrese 2da nota: "));
    let nota3=parseFloat(prompt("Ingrese 3ra nota: "));

    if (!nota1 || !nota2 || !nota3){ //Validacion que sea un numero reales
        alert("ADVERTENCIA: *SOLO ADMITE NUMEROS REALES*") 
    }else{
        if (nota1<0 || nota2<0 || nota3<0) { //Valida si es negativo y advierte
            alert(" *NOTAS INVALIDAS,FUERA DE RANGO*")
        }else{
            if(nota1>20 || nota2>20 || nota3>20) {//Valida el rango maximo
                alert(" *NOTAS INVALIDAS,FUERA DE RANGO*");
            }else{
                let promedio=(nota1+nota2+nota3)/3; //Calcula el promedio
                if (promedio>=12){ //Determina si aprobo o desaprobo
                    alert( `El Alumno APROBO con: ${promedio}`);
                }else{
                    alert(`El Alumno DESAPROBO con: ${promedio}`)
                }
            }
        }
    }
}

function ejercicio09(){
alert("Determina_Aumento");
    let sueldo = Number(prompt("Ingrese sueldo:"));
    if (!sueldo){ //Validacion que sea un numero
        alert("ADVERTENCIA: *SOLO ADMITE NUMEROS POSITIVOS*") 
    }else{
        // Verifica si el sueldo es negativo
        if (sueldo < 0) {
            alert("*EL SUELDO DEBE SER POSITIVO*");
        } else {
            if (sueldo === 2000) {
                alert("*No recibira aumento*");
            } else if (sueldo < 2000) {
                alert(`Aumento de 10% equivale a: ${sueldo * 0.1}`);
            } else {
                alert(`Aumento de 5% equivale a: ${sueldo * 0.05}`);
            }
        }
    }
}

function ejercicio10(){
alert("Paridad");
    let num = Number(prompt("Ingrese numero a evaluar:"));
    if (!num){ //Validacion que sea un numero
        alert("ADVERTENCIA: *SOLO ADMITE NUMEROS POSITIVOS*");
    }else{
        // Valida si es entero
        if (Math.trunc(num) !== num) {
            alert("*NO ES ENTERO*");
        } else {
            // Si al dividir por 2, no hay resto, es PAR
            if (num % 2 === 0) {
                alert("Es PAR");
            } else {
                alert("Es IMPAR"); // Si el resto es diferente de 0, es IMPAR
            }
        }
    }
}

function ejercicio11(){
alert("MAYOR_DE_3");
    let num1 = parseInt(prompt("Ingrese 1er numero:"));
    let num2 = parseInt(prompt("Ingrese 2do numero:"));
    let num3 = parseInt(prompt("Ingrese 3er numero:"));


    if (!num1 || !num2 || !num3){ //Validacion que sea un numero entero
            alert("ADVERTENCIA: *SOLO ENTEROS*") 
        }else{
        if(num1>num2){
            let temporal=num2
            num2=num1
            num1=temporal
        }
        if(num1>num3){
            let temporal=num3
            num3=num1
            num1=temporal
        }
        if(num2>num3){
            let temporal=num3
            num3=num2 
            num2=temporal
        }
        alert(`El MAYOR es: ${num3}`)
    }    
}

function ejercicio12(){
alert("MAYOR_DE_2");
    let num1 = Number(prompt("Ingrese el primer numero:"));
    let num2 = Number(prompt("Ingrese el segundo numero:"));
    if (!num1 || !num2){ //Validacion que sea un numero no nulo
        alert("ADVERTENCIA: *SOLO ADMITE NUMEROS NO NULOS *")
    }else{
        // Evaluacion
        if (num1 > num2) {
            alert(`El MAYOR es: ${num1}`);
        } else {
            alert(`El MAYOR es: ${num2}`);
        }
    }
}

function ejercicio13(){
    alert("Evalua_Vocales");
    let letra = prompt("Ingrese una caracter:");
    // Verifica que la entrada sea 1 caracter y que no sea un numero
    if (letra.length !== 1 || !isNaN(letra)) {
        alert("ADVERTENCIA: SOLO ADMITE 1 CARACTER");
    } else {
        switch (letra.toLowerCase()) {
            case 'a': 
            case 'e': 
            case 'i':
            case 'o': 
            case 'u':
                alert("Es VOCAL");
                break;
            default:
                alert("NO es VOCAL");
        }
    }
}

function ejercicio14(){
alert("Primo_del_1_10");
    let num = Number(prompt("Ingresa numero entre 1 y 10:"));
    if (!num){ //Validacion que sea un numero
        alert("ADVERTENCIA: *SOLO ADMITE NUMEROS *")
    }else{
        // Evalua si el numero es entero y esta en el rango
        if (num < 1 || num > 10 || Math.trunc(num) !== num) {
            alert("*DEBE SER ENTERO ENTRE 1 - 10*");
        } else {
            if (num === 2 || num === 3 || num === 5 || num === 7) { // Evalua si es primo
                alert("*SI es PRIMO*");
            } else {
                alert("*NO es PRIMO*");
            }
        }
    }
}

function ejercicio15(){
alert("Convertidor_CM_in_/_LB_kl")
    let tipo = prompt(`¿Que desea convertir?
        CENTIMETROS o LIBRAS`).toUpperCase();
    let cantidad = Number(prompt("Ingrese cantidad a convertir"));
    if (!cantidad || !isNaN(tipo)){ //Valida cantidad numero y tipo no numero
        alert("ADVERTENCIA: *DATOS INVALIDOS *")
    }else{
        // Evalua que sea positivo y diferente de 0
        if (cantidad <= 0) {
            alert(`ERROR: ${cantidad} DEBE SER POSITIVO`);
        } else {
            if (tipo === "CENTIMETROS") { // Evalua si es conversion de centimetros a pulgadas
                let pulga = cantidad / 2.54;
                alert(`> ${cantidad} cm equivale a: ${pulga} in`);
            } else if (tipo === "LIBRAS") { // Evalua si es conversion de libras a kilos
                let kilo = cantidad * 0.4536;
                alert(`> ${cantidad} lb equivale a: ${kilo} kg`);
            } else {
                alert(`ERROR: ${tipo} NO ES UN TIPO VALIDO`);
            }
        }
    }
}

function ejercicio16(){
alert("Indica_dia_de_Semana")
    let dia = Number(prompt("Ingresa numero entre 1 y 7:"));

    // Evalua el rango y .isIntger() que sea entero
    if (dia < 1 || dia > 7 || !Number.isInteger(dia)) {
        alert("*DEBE SER ENTERO ENTRE 1-7*");
    } else {
        let nombreDia;
        switch (dia) { // Asigna el dia correspondiente
            case 1:
                nombreDia = "Domingo";
                break;
            case 2:
                nombreDia = "Lunes";
                break;
            case 3:
                nombreDia = "Martes";
                break;
            case 4:
                nombreDia = "Miercoles";
                break;
            case 5:
                nombreDia = "Jueves";
                break;
            case 6:
                nombreDia = "Viernes";
                break;
            case 7:
                nombreDia = "Sabado";
                break;
        }
        alert(`Es ${nombreDia}`);
    }
}

function ejercicio17(){
alert("Suma_1_segundo");
    let hors = parseInt(prompt("Ingrese las horas (0-23)"));
    let minuts = parseInt(prompt("Ingrese los minutos (0-59)"));
    let segunds = parseInt(prompt("Ingrese los segundos (0-59)"));
    // Valida que sean positivos y enteros dentro del rango permitido
    if (hors < 0 || hors > 23 || !hors || 
        minuts < 0 || minuts > 59 || !minuts ||
        segunds < 0 || segunds > 59 || !segunds) {
            alert("*HORA INGRESADA INVALIDA*");
    }else{
        segunds =segunds + 1;
        if (segunds === 60) {
            segunds = 0;
            minuts = minuts + 1;
        }

        if (minuts === 60) {
            minuts = 0;
            hors = hors + 1;
        }

        if (hors === 24) {
            hors = 0;
        }
        alert(`La hora dentro de un segundo sera:
        Horas: ${hors} | Minutos: ${minuts} | Segundos: ${segunds}`);
    }
}

function ejercicio18(){
alert("CDs_al_Mayor");
    let unidades = parseInt(prompt("Cantidad de CDs pedido: "));
    // Evalua que sea entero positivo
    if (unidades < 1 || !unidades) {
         alert("*ERROR: CANTIDAD INVALIDA*");
    } else {
        let precio;
        
        if (unidades >= 1 && unidades <= 9) {
            precio = 10;
        } else{
            if (unidades >= 10 && unidades <= 99) {
                precio = 8;
            } else{
                if (unidades >= 100 && unidades <= 499) {
                precio = 7;
                } else {
                precio = 6;
                }
            }
        }
    
        // Calculo de precio total
        let precioTotal = precio * unidades;
        let gananciaVendedor = (precioTotal * 0.0825).toFixed(2); //Redondea a dos decimales

        alert(`Precio total del pedido es: $${precioTotal}
        Ganancia del vendedor es: $${gananciaVendedor}`);
    
    }
}

function ejercicio19(){
alert("Heladeria_Empleados");
    let ID = Number(prompt(` [ID] Tipo Empleado
        -----------------
        [1] Cajero
        [2] Servidor
        [3] Prep. Mezcla
        [4] Mantenimiento
    Ingrese ID empleado:`));
    let dias = Number(prompt("Dias trabajados [1-6]:"));
        
        // Evalua ID valido y dias validos
        if (ID < 1 || ID > 4 || !Number.isInteger(ID) ||
        dias < 1 || dias > 6 || !Number.isInteger(dias)) {
            alert("*ERROR: DATA INVALIDA*");
        } else {
            let precioDia;
            switch (ID) { // Segun ID asigna un precio por dia
                case 1:
                    precioDia = 56;
                    break;
                case 2:
                    precioDia = 64;
                    break;
                case 3:
                    precioDia = 80;
                    break;
                case 4:
                    precioDia = 48;
                    break;
            }
            let pagoSemana = precioDia * dias; // Calculo de pago semanal
            alert(`Pago semanal es: $${pagoSemana}`);
        }
}

function ejercicio20(){
alert("Evaluacion_de_4_Digitos")
    let num1 = Number(prompt("Ingrese el primer numero entero positivo:"));
    let num2 = Number(prompt("Ingrese el segundo numero entero positivo:"));
    let num3 = Number(prompt("Ingrese el tercer numero entero positivo:"));
    let num4 = Number(prompt("Ingrese el cuarto numero entero positivo:"));

    // Validacion de enteros positivos
    if (
        num1 < 1 || !Number.isInteger(num1) ||
        num2 < 1 || !Number.isInteger(num2) ||
        num3 < 1 || !Number.isInteger(num3) ||
        num4 < 1 || !Number.isInteger(num4)
        ) {
        alert("*ERROR: DEBE SER ENTERO POSITIVO*");
    } else {
        let pares = 0;
        let mayr = num1;
        let cuadrado2 = 0;
        let media = 0;
        let suma = 0;
      
        // Contar los pares
        if (num1 % 2 === 0) pares=pares+1;
        if (num2 % 2 === 0) pares=pares+1;
        if (num3 % 2 === 0) {
            pares=pares+1;
          cuadrado2 = num2 ** 2;} // Tercer requerimiento
        if (num4 % 2 === 0) pares=pares+1;
      
        // Primer requerimiento: cantidad de pares
        if (pares === 0) {
          alert("1) No hay pares.");
        } else {
          alert(`1) Hay ${pares} numeros pares.`);
        }
      
        // Segundo requerimiento: encontrar el mayor
        if (num2 > mayr) mayr = num2;
        if (num3 > mayr) mayr = num3;
        if (num4 > mayr) mayr = num4;
        alert(`2) El mayor de todos es: ${mayr}`);
      
        // Tercer requerimiento: cuadrado del segundo si el tercero es par
        if (cuadrado2 === 0) {
            alert("3) El tercero no es par.");
        } else {
            alert(`3) El cuadrado del segundo es: ${cuadrado2}`);
        }
      
        // Cuarto requerimiento: media si num1 < 4
        if (num1 < 4) {
            media = (num1 + num2 + num3 + num4) / 4;
            alert(`4) La media de los 4 numeros es: ${media}`);
        } else {
            alert("4) El primero es mayor o igual que cuatro.");
        }
      
        // Quinto requerimiento: suma si num2 > num3 y num3 esta en [50,700]
        if (num2 > num3) {
            if (num3 >= 50 && num3 <= 700) {
                suma = num1 + num2 + num3 + num4;
                alert(`5) La suma de los 4 es: ${suma}`);
            } else {
                alert("5) El tercero no esta en el rango [50-700]");
            }
        } else {
            alert("5) El tercero es mayor o igual que el segundo");
        }
      }
}

function ejercicio21(){
alert("Factorial_Tradicional");
    let num = Number(prompt("Ingrese un numero:"));
    let factorial = 1; // Define factorial como 1

    // Validacion: debe ser entero y no negativo
    if (num < 0 || !Number.isInteger(num)) {
         alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
        for (let contador = 1; contador <= num; contador++) {
            factorial = factorial*contador; // Calculo del factorial
        }
        alert(`El factorial es: ${factorial}`);
    }
}

function ejercicio22(){
alert("Suma_n_primeros_numeros");
    let num = Number(prompt("Ingrese un numero:"));
    let suma = 0;
    // Validacion: debe ser entero y no negativo
    if (num < 0 || !Number.isInteger(num)) {
        alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
        alert("Lista de numeros (+):");
        for (let contador = 1; contador <= num; contador++) {
            suma = suma+contador;
            alert(`         ${contador}`);
        }
    alert(`Suma de ${num} primeros numeros es:
                  ${suma}`);
    }        
}

function ejercicio23(){
alert("Suma_Impares_Menor_Igual_n");
    let num = Number(prompt("Ingrese un numero:"));
    let suma = 0;
    let impares=[]; //Array para almacenar impares
    // Validacion: debe ser entero y no negativo
    if (num < 0 || !Number.isInteger(num)) {
     alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
     
    for (let contador = 1; contador <= num; contador++) {
        if (contador % 2 !== 0) {
        suma = suma + contador;
        impares.push(contador); //Agrega el impar al array impares[]
        }
    }
    if(num>500){ //Si num es mayor a 500, falta espacio
        alert(`Lista de Impares (+):
        ${impares.join(" - ").slice(0,1400)} ...
        Suma de menores iguales a ${num} es:
                      ${suma}`); //Esta parte se podria perder si es mayor a 500
    }else{
        alert(`Lista de Impares (+):
        ${impares.join(" - ")}
        Suma de menores iguales a ${num} es:
                      ${suma}`); //Muestra array impares y suma
    }
}
}

function ejercicio24(){
alert("Suma_Pares_Hasta_1000");
    let num = 1000; // El maximo rango de los pares a tomar
    let suma = 0;
    // Validacion NO negativo
    if (num < 0 || !Number.isInteger(num)) {
         alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
        // Sumar solo los pares
        for (let contador = 2; contador <= num; contador += 2) {
            suma += contador;
        }
       // Mostrar la suma total
        alert(`Suma de pares hasta ${num} es: ${suma}`);
    }
}

function ejercicio25(){
alert("Factorial_Distinto");
    let num = parseInt(prompt("Ingrese un numero: ")); 
    let contador , factorial; 
    // Para que al repetir el bucle no siga acumulando
    factorial = 0; 
    contador = 0; 
    // Validacion NO negativo
    if (num < 0 || Math.trunc(num) !== num) {
        alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
    // Para que comiencen en 1
        contador = 1;
        factorial = 1; 

        while (contador <= num) {
            factorial = factorial * contador; // Calculo
            contador = contador + 1; // Para que pase al siguiente valor sumando 1
        }
    alert(`El factorial es: ${factorial}`);
    }
}

function ejercicio26(){
alert("Resto_Cociente_Por_Restas_Sucesivas");
    let dividendo = parseInt(prompt("Ingrese numero a dividir: "));
    let divisor = parseInt(prompt("Ingrese numero que divide: "));
    let cociente, resto;

    // Validacion NO negativo
    if (dividendo < 0 || Math.trunc(dividendo) !== dividendo || divisor <= 0 || Math.trunc(divisor) !== divisor) {
         alert("ERROR: *DEBE SER ENTERO NO NEGATIVO*");
    } else {
        cociente = 0;
        resto = dividendo; //Comienza resto como dividendo
        //Se crea una cadena para almacenar el contenido del bucle
        let mensaje = "   Restas Sucesivas:\n";

        while (resto >= divisor) {
            cociente = cociente + 1;
            //Se almacena en cada iteracion una linea de resta a la cadena mensaje
            mensaje += `    ${cociente}) ${resto} - ${divisor} = ${resto - divisor}\n`; // Calculo temporal
            resto = resto - divisor; // Calculo almacenando en resto
        }
    //Se almacena en la cadena mensaje el resto final y el cociente
    mensaje += `El resto es: ${resto}\n`; //Ultimo resto
    mensaje += `El cociente es: ${cociente}`; //Numero de iteraciones hasta llegar
    alert(mensaje);
    }

}

function ejercicio27(){
alert("Media_Numeros_Positivos_Hasta_Agregar_Negativo");
    let num, suma, contador;
    contador = 0;
    suma = 0;

    do {
         num = parseFloat(prompt("Ingrese NUMERO NO negativo o finalizara: "));
        if (num >= 0) {
            suma = suma + num;
            contador = contador + 1;
        }
    } while (num >= 0);

    if (contador > 0) {
        alert(`Se ingresaron ${contador} numeros positivos`); //Limita en 2 decimal
        alert(`Media de numeros ingresados es: ${(suma / contador).toFixed(2)}`);
    } else {
        alert("No se ingresaron NUMEROS positivos");
    }
}

function ejercicio28(){
alert("Suma_Cien_Numeros_con_Repetir");
    let contador, suma;
    let mensaje=""; //Para alacenar en las iteraciones del DoWhile en una cadena
    // Evita que acumule datos de otras iteraciones
    suma = 0;
    contador = 1;
    mensaje += "Numeros a sumar:\n"; //Primera linea almacenar
    do {
        suma = suma + contador;
        mensaje +=` ${contador} -`; //Alamacena 1 iteracion
        contador = contador + 1;
    } while (contador <= 100);

    mensaje +=`\n Suma 100 primeros numeros es: ${suma}`;
    alert(mensaje);
}

function ejercicio29(){
alert("Suma_Cien_Numeros_con_Mientras");
    let contador, suma;
    let mensaje=""; //Para alacenar en las iteraciones del While en una cadena
    // Evita que acumule datos de otras iteraciones
    suma = 0;
    contador = 1;
    mensaje += "Numeros a sumar:\n"; //Primera linea almacenar
    while (contador <= 100) {
        mensaje +=`- ${contador} `; //Alamacena 1 iteracion
        suma = suma + contador;
        contador = contador + 1;
    } 

    mensaje +=`\n Suma 100 primeros numeros es: ${suma}`;
    alert(mensaje);
}

function ejercicio30(){
alert("Suma_Cien_Numeros_con_Para");
    let contador, suma;
    let mensaje=""; //Para alacenar en las iteraciones del For en una cadena
    // Evita que acumule datos de otras iteraciones
    suma = 0;
    mensaje += "Numeros a sumar:\n"; //Primera linea almacenar
    for (contador=1;contador <= 100;contador=contador+1) {
        mensaje +=`| ${contador} `; //Alamacena 1 iteracion
        suma = suma + contador;
    } 
    mensaje +=`\n Suma 100 primeros numeros es: ${suma}`;
    alert(mensaje);
}

function ejercicio31(){
alert("Media_Pares_Impares_de_10_Numeros");
    let num;
    let contador, contaPar, contaImpar, sumaPar, sumaImpar;

    // Evita que acumule datos de otras iteraciones
    sumaPar = 0;
    sumaImpar = 0;
    contaPar = 0;
    contaImpar = 0;

    alert("***Ingresar 10 numeros ENTEROS***");

    for (contador = 1; contador <= 10; contador = contador + 1) {
         num = parseFloat(prompt(`Ingrese numero ${contador}:`));

        if (Math.trunc(num) !== num) {
            alert("ERROR: *DEBE SER ENTERO*");
            sumaPar = 0;
            sumaImpar = 0;
            contaPar = 0;
            contaImpar = 0;
            break; // Sale del bucle borrando lo acumulado
        } else {
            if (num % 2 === 0) {
                sumaPar = sumaPar + num;
                contaPar = contaPar + 1;
            } else {
                sumaImpar = sumaImpar + num;
                contaImpar = contaImpar + 1;
            }
        }
    }

    if (contaImpar !== 0) {     // .toFixed(0) Redondea a 0 decimales
    alert(`Media de Impares es: ${(sumaImpar / contaImpar).toFixed(0)}`);
    }

    if (contaPar !== 0) {        // .toFixed(0) Redondea a 0 decimales
    alert(`Media de Pares es: ${(sumaPar / contaPar).toFixed(0)}`);
    }

}

function ejercicio32(){
alert("Poblacion_3_Provincias_11_Ciudades");
    let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
    let poblacion, mayorPoblacion;
    let i, j;

    // Evita que acumule info de otras repeticiones
    mayorPoblacion = 0;

    for (i = 1; i <= 3; i = i + 1) {
        nombreProvincia = prompt(`Ingrese el nombre de la provincia ${i}:`);
      
        for (j = 1; j <= 11; j = j + 1) {
          nombreCiudad = prompt(`Ingrese el nombre de la ciudad ${j} de la provincia ${nombreProvincia}:`);
          poblacion = parseInt(prompt(`Ingrese la poblacion de la ciudad ${nombreCiudad}:`));
      
          if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMayorPoblacion = nombreCiudad;
          }
        }
      }
      
      alert(`Ciudad de mayor poblacion es ${ciudadMayorPoblacion} con una cantidad de: ${mayorPoblacion}`);

}

function ejercicio33(){
alert("Continuar_O_Terminar");
    let contar = 0;
    let Llave = ""; // Permite cerrar el bucle
    alert("[+++++++++++[INICIO]+++++++++++]");
    do {
        contar = contar + 1;
        Llave = prompt(`[==========${contar}=============]
        ("PRESIONE [ENTER] PARA CONTINUAR
        PARA TERMINAR ESCRIBA: SALIR`);
        alert(`[==========${contar}=============]`);
    } while (Llave.toUpperCase() !== "SALIR"); // La condicion para cerrar el bucle

    alert("[++++++++++++[FIN]+++++++++++++]");

}

function ejercicio34(){
alert("Tablas_Multiplica_1_9");
    let i, j;
    let mensaje="";
    for (i = 1; i <= 9; i = i + 1) {
        mensaje +=`Tabla del ${i})\n`;
        for (j = 1; j <= 10; j = j + 1) {
            mensaje+=`${i} x ${j} = ${i * j}\n`;
        }
        alert(`${mensaje}------------`);
        mensaje="";
    }
}

function ejercicio35(){
alert("Mayor_Y_Menor_de_20");
    let num, mayr, menr;
    let repetidor;

    for (repetidor = 1; repetidor <= 20; repetidor = repetidor + 1) {
        num = parseFloat(prompt(`Ingrese numero ${repetidor}:`));
        if(!num){ //Validacion de datos
            alert("DATO INVALIDO");
            repetidor=20;
            mayr=num;
            menr=num;
        }else{
            if (repetidor == 1) {
                mayr = num;
                menr = num;
            } else {
                if (num > mayr) {
                    mayr = num;
                }
                if (num < menr) {
                    menr = num;
                }
            }
        }
    }
    if(!isNaN(mayr)||!isNaN(menr)){
        alert(`El mayor es: ${mayr}`);
        alert(`El menor es: ${menr}`);
     }
}

function ejercicio36(){
alert("Serie_Fibonacci");
    let num;
    let a, b, temporal, i;
    let mensaje=""; //Cadena para almacenar la serie
    
    num = parseInt(prompt("Ingrese numero de terminos de serie:"));
    
    // Valida que sea positivo y no 0
    if (num <= 0 || Math.trunc(num) !== num) {
        alert("ERROR: *DEBE SER ENTERO POSITIVO*");
    } else {
        a = 0; // Fibonacci comienza con 0
        b = 1; // Segundo termino
        mensaje+=`Serie Fibonacci:\n`;
    
        for (i = 1; i <= num; i = i + 1) {
            mensaje+=`- ${a} `; //Agregar a la cadena uno numero de la serie
            temporal = a + b; // Almacena la suma del anterior con el numero actual
            a = b; // Actualiza a para mostrarlo el siguiente ciclo
            b = temporal; // Almacena la suma hasta el momento en b
        }
        alert(`${mensaje}`);
    }
}

function ejercicio37(){
alert("MCD_con_Euclides");
    let num1, num2;
    let temporal;
    num1 = parseFloat(prompt("Ingrese primer numero:"));
    num2 = parseFloat(prompt("Ingrese segundo numero:"));

    // Valida que sea positivo y no 0
    if (num1 <= 0 || Math.trunc(num1) !== num1 || num2 <= 0 || Math.trunc(num2) !== num2) {
        alert("ERROR: *DEBE SER ENTERO POSITIVO*");
    } else {
        while (num2 !== 0) {
            temporal = num2;
            num2 = num1 % num2; // Calcula el resto de dividir
            num1 = temporal; // Almacena el maximo comun divisor, hasta la ultima repeticion
        }
        alert(`El MCD es: ${num1}`);
    }
}

function ejercicio38(){
alert("Numero_Perfecto");
    let num, sumaDivisores, i;
    num = parseInt(prompt("Ingrese numero y verificar perfecto"));
    sumaDivisores = 0;
    for (i = 1; i <= num - 1; i = i + 1) {
        if (num % i === 0) { // Evalua si tiene divisores
            sumaDivisores = sumaDivisores + i; // Si cumple los acumula
        }
    }
    if (sumaDivisores === num) {
        alert(`> ${num} es PRRRfecto`);
    } else {
        alert(`> ${num} NO es PRRRfecto`);
    }
}

function ejercicio39(){
alert("Aproxima_GregoryLeibniz_para_Pi");
    let pi2, termino;
    let n, signo, iteraciones;

    pi2 = 0;
    n = 1;
    signo = 1;

    iteraciones = parseInt(prompt("Ingrese el numero de iteraciones:"));
    if(!iteraciones){ //Validacion
        alert("DATO INVALIDO");
    }else{
        for (let i = 1; i <= iteraciones; i++) {
            termino = 4 / n;
            pi2 = pi2 + (signo * termino); // Metodo Gregory-Leibniz, en un ciclo
            signo = signo * (-1);
            n = n + 2;
        }

        alert(`Aproximacion PI en ${iteraciones} ciclos: 
                                  ${pi2}
            Referencia:     3.1415926535897932`);
    }
}

function ejercicio40(){
    alert("Aproxima_Nilakantha_para_Pi");
        let pi2, termino;
        let n, signo, iteraciones;
    
        pi2 = 3;
        n = 2;
        signo = 1;
    
        iteraciones = parseInt(prompt("Ingrese el numero de iteraciones:"));
        if(!iteraciones){ //Validacion
            alert("DATO INVALIDO");
        }else{
            for (let i = 1; i <= iteraciones; i++) {
                termino = 4/(n*(n+1)*(n+2));
                pi2 = pi2+(signo*termino); // Metodo Nilakantha, en un ciclo
                signo = signo * (-1);
                n = n + 2;
            }
    
            alert(`Aproximacion PI en ${iteraciones} ciclos: 
                                      ${pi2}
                Referencia:     3.1415926535897932`);
        }
}