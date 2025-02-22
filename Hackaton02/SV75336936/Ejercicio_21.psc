Proceso Ejercicio_21
	Definir n, factorial, i Como Entero
    
    Escribir "Ingrese un numero entero positivo para calcular su factorial:"
    Leer n
    Si n < 0 Entonces
        Escribir "Error: El numero debe ser positivo."
	FinSi
	factorial <- 1
	Para i = 1 Hasta num Hacer
	factorial = factorial * i
	FinPara

	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
