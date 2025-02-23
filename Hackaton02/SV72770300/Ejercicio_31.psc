Proceso Ejercicio_31
	suma = 0
	cont = 0
	i = 0
	
	Repetir
		Escribir "Ingrese ",i + 1, "º número"
		Leer n
		Si n MOD 2 == 0 o n MOD 2 == 1 Entonces
			suma = suma + n
			cont = cont + 1
		Fin Si
		
	i = i + 1	
	Hasta Que i == 10
	
	Escribir "Media: ", suma / cont
FinProceso
