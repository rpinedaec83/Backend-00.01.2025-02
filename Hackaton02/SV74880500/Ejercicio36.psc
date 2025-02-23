Algoritmo fibonacci
    Definir n, a, b, c Como Entero
    Escribir "Ingresa el número de términos de la serie Fibonacci: "
    Leer n
	
    a = 0
    b = 1
	
    Escribir "Serie Fibonacci: "
    Escribir a
    Escribir b
	
    Para i = 3 Hasta n Hacer
        c = a + b
        Escribir c
        a = b
        b = c
    FinPara
FinAlgoritmo