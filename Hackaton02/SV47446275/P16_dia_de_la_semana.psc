Proceso  dia_de_la_semana
		Definir numero Como Entero
		
		Escribir "Ingrese un número entre 1 y 7: "
		Leer numero
		
		// Semana_número
		Segun numero Hacer
			Caso 1:
				Escribir "El día correspondiente es: Lunes"
			Caso 2:
				Escribir "El día correspondiente es: Martes"
			Caso 3:
				Escribir "El día correspondiente es: Miércoles"
			Caso 4:
				Escribir "El día correspondiente es: Jueves"
			Caso 5:
				Escribir "El día correspondiente es: Viernes"
			Caso 6:
				Escribir "El día correspondiente es: Sábado"
			Caso 7:
				Escribir "El día correspondiente es: Domingo"
			De Otro Modo:
				Escribir "Número inválido. Por favor ingrese un número entre 1 y 7."
		FinSegun	
FinProceso
