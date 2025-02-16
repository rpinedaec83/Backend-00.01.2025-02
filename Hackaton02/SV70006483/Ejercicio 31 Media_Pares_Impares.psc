Proceso Media_Pares_Impares
    Definir num, suma_pares, suma_impares, cont_pares, cont_impares Como Entero
    suma_pares <- 0
    suma_impares <- 0
    cont_pares <- 0
    cont_impares <- 0
	
    // Leer los 10 números
    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese un número ",i,":"
        Leer num
		
        Si num MOD 2 = 0 Entonces
            suma_pares <- suma_pares + num
            cont_pares <- cont_pares + 1
        Sino
            suma_impares <- suma_impares + num
            cont_impares <- cont_impares + 1
        FinSi
    FinPara
	
    // Calcular la media solo si hay números pares o impares
    Si cont_pares > 0 Entonces
        Escribir "La media de los números pares es: ", suma_pares / cont_pares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si cont_impares > 0 Entonces
        Escribir "La media de los números impares es: ", suma_impares / cont_impares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
