Proceso Ejercicio_36
	    
    Escribir "Digita el número de términos de la serie de Fibonacci"
    Leer n
	
	a = 0
	b = 1
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
		Escribir a, "+", b, "=" a + b 
		c <- a + b
		a <- b
		b <- c
	Fin Para
	
FinProceso
