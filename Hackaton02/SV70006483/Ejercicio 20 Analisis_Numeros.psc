Proceso Analisis_Numeros
    Definir num, i, pares, mayor Como Entero
	Definir  media Como Real
	
    // Crear un arreglo para almacenar los números
    Dimension num[4]
	
    // Ingreso y validación de números positivos
    Para i <- 1 Hasta 4 Hacer
        Repetir
            Escribir "Ingrese el número ", i, " (entero positivo):"
            Leer num[i]
            Si num[i] <= 0 Entonces
                Escribir "Error: Deben ser enteros positivos."
            FinSi
        Hasta Que num[i] > 0
    FinPara
	
    // Contar cuántos números son pares
    pares <- 0
    Para i <- 1 Hasta 4 Hacer
        Si num[i] MOD 2 = 0 Entonces
            pares <- pares + 1
        FinSi
    FinPara
    Escribir "Cantidad de números pares:", pares
	
    // Determinar el mayor de los números
    mayor <- num[1]
    Para i <- 2 Hasta 4 Hacer
        Si num[i] > mayor Entonces
            mayor <- num[i]
        FinSi
    FinPara
    Escribir "El número mayor es:", mayor
	
    // Si el tercero es par, calcular el cuadrado del segundo
    Si num[3] MOD 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es:", num[2] * num[2]
    FinSi
	
    // Si el primero es menor que el cuarto, calcular la media
    Si num[1] < num[4] Entonces
        media <- (num[1] + num[2] + num[3] + num[4]) / 4
        Escribir "La media de los 4 números es:", media
    FinSi
	
    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma
    Si num[2] > num[3] Y num[3] >= 50 Y num[3] <= 700 Entonces
        Escribir "La suma de los 4 números es:", num[1] + num[2] + num[3] + num[4]
    FinSi
FinProceso
