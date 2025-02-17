//Ejercicio36
//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Fibonacci
    Definir n, a, b, c Como Entero
    Escribir "Ingrese el valor de n para la serie de Fibonacci: "
    Leer n
    a = 0
    b = 1
    
    Escribir "Serie de Fibonacci hasta ", n, ":"
    Escribir a
    Escribir b
    
    Para i <- 3 Hasta n
        c =a + b
        Escribir c
        a = b
        b = c
    FinPara
	
FinProceso
