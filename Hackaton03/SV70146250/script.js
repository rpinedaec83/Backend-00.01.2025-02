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