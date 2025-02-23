Proceso Ejercicio_36
	Definir n, a, b, c, i Como Entero
    Escribir "Ingrese la cantidad de términos de la serie Fibonacci:"
    Leer n
    Si n <= 0 Entonces
        Escribir "Ingrese un número mayor a 0."
	FinSi

	a = 0
	b = 1

	Escribir "Serie de Fibonacci:"
	Escribir a
	Si n > 1 Entonces
		Escribir b
	FinSi

	Para i = 3 Hasta n Hacer
		c = a + b
		Escribir c
		a = b
		b = c
	FinPara
FinProceso
