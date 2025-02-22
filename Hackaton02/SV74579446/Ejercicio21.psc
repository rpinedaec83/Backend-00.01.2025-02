//Ejercicio21
//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso factorial_num
	Definir num, fact, i Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer num
	
    Si num < 0 Entonces
        Escribir "Error: El número debe ser positivo."
    Sino
        factorial <- 1
        Para i <- 1 Hasta num Hacer
            factorial <- factorial * i
        FinPara
    FinSi
	
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso

