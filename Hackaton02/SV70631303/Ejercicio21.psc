//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Ejercicio21
	Escribir "Ingrese un n�mero:"
    Leer n
    
    fact = 1
    Para i <- 1 Hasta n Hacer
        fact = fact * i
    Fin Para
    
    Escribir "El factorial de ", n, " es: ", fact

FinProceso