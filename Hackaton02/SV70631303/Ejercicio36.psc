//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Ejercicio36
	Definir n,a,b,temp Como Entero
	Escribir "Ingrese la cantidad de t?rminos de la serie Fibonacci:"
    Leer n
    
    a = 0
    b = 1
    
    Escribir "Serie de Fibonacci:"
    Para i <- 1 Hasta n Hacer
        Escribir a
        temp = a + b
        a = b
        b = temp
    Fin Para
FinProceso