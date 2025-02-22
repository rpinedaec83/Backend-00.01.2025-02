Proceso calcular_media_lista_indefinida
		Definir numero, suma, cantidad Como Real
		
		suma <- 0
		cantidad <- 0
		
		Escribir "Ingrese una lista de números positivos. Para terminar, ingrese un número negativo."
		
		Repetir
			Escribir "Ingrese un número: "
			Leer numero
			
			Si numero >= 0 Entonces
				suma <- suma + numero
				cantidad <- cantidad + 1
			FinSi
		Hasta Que numero < 0
	
		Si cantidad > 0 Entonces
			media <- suma / cantidad
			Escribir "La media de los números ingresados es: ", media
		Sino
			Escribir "No se ingresaron números positivos."
		FinSi
FinProceso
