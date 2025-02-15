Proceso Ejercicio_21
	
	Escribir "Digite un número por favor"
	Leer n
	
	result = n
	
	Si n == 0 Entonces
		Escribir "Factorial de ", n , " es: 1"
	SiNo
		Para i <- 1 Hasta n - 1 Con Paso 1 Hacer
			result = result * (n - i)
		Fin Para
		Escribir "Factorial de ", n , " es: ", result
	Fin Si
	
	
	
	
FinProceso
