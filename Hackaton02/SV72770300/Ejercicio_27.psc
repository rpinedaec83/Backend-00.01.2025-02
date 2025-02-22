Proceso Ejercicio_27
	
	suma = 0
	cont = 0
	Repetir
		
		Escribir "Digite un número"
		Leer n
		
		Si n >= 0 Entonces
			suma = suma + n
			cont = cont + 1
		Fin Si
		
	Hasta Que n <= 0
	
	Escribir "Media: ", suma / cont
	
FinProceso
