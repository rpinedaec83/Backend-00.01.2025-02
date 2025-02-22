Proceso continuar_programa
		Definir respuesta Como Cadena
		
		Repetir
			// PREGUNTA
			Escribir "Este es el programa principal."
			
			// SI O NO
			Escribir "¿Desea continuar con el programa? (S/N): "
			Leer respuesta
			
		Hasta Que respuesta = "N" o respuesta = "n"
		
		Escribir "El programa ha finalizado."
	
FinProceso
