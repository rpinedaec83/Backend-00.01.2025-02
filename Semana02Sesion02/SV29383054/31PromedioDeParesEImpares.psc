Proceso PromParesImpares
	definir  cantidad_pares, cantidad_impares, i Como Entero;
	definir suma_pares, suma_impares Como Real;
    cantidad_pares <- 0;
	cantidad_impares <- 0;
    suma_pares <- 0;
    suma_impares <- 0;
    Para i<-1 Hasta 5 Con Paso 1 Hacer
        Escribir "PROCESO ", i;
        Escribir Sin Saltar "Ingresa el valor de un numero:";
        Leer un_numero;
        Si un_numero MOD 2 = 0 Entonces
            suma_pares <- suma_pares+un_numero;
            cantidad_pares <- cantidad_pares+1;
        SiNo
            suma_impares <- suma_impares+un_numero;
            cantidad_impares <- cantidad_impares+1;
        FinSi
        Escribir "";
    FinPara
    Escribir "Valor de cantidad pares: ", cantidad_pares;
    Escribir "Valor del promedio pares: ", suma_pares/cantidad_pares;
    Escribir "Valor de cantidad impares: ", cantidad_impares;
	Escribir "Valor del promedio impares: ", suma_impares/cantidad_impares;
FinProceso
