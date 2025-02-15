//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

SubProceso returnValue <- Factorial ( num )
	Si num = 0 Entonces
		returnValue = 1
	Sino
		returnValue =  num * Factorial(num-1)
	Fin Si
Fin SubProceso

Proceso Ejercicio25
	Escribir "Ingrese un n�mero:"
	Leer num
	Escribir "El factorial de ", num, " es: " Factorial(num)
FinProceso