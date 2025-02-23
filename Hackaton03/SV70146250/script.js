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
            factorial *= contador; // Calculo del factorial
        }
        alert(`El factorial es: ${factorial}`);
    }
}