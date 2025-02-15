Proceso Ejercicio_14
	
	Escribir "Digite un número entre 1 y 10"
	Leer n
	
	contador = 0
	
	Si n == 1 o n < 1 Entonces
		Escribir n, " no es un número primo"
	SiNo
		
		Si n > 10 Entonces
			Escribir "Por favor, digite un número entre 1 y 10"
		SiNo
			
			Si n > 1 Entonces
			
			Para i <- 2 Hasta n-1 Con Paso 1 Hacer
				evaluar = n MOD i
				
				Si evaluar == 0 Entonces
					contador = contador + 1
				Fin Si
				
			Fin Para
			
		Fin Si
		
		Si contador > 0 Entonces
			Escribir "El número ", n , " no es primo"
		SiNo
			Escribir "El número ", n , " es primo"
		Fin Si
		
		Fin Si
	
	Fin Si
FinProceso
