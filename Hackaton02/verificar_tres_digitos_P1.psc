Proceso verificar_tres_digitos
		// Leer el n�mero
		Escribir "Ingresa un n�mero:"
		Leer numero
		
		// Verificar si el n�mero tiene tres d�gitos
		Si numero >= 100 y numero <= 999 o numero <= -100 y numero >= -999 Entonces
			Escribir "El n�mero tiene tres d�gitos."
		Sino
			Escribir "El n�mero no tiene tres d�gitos."
		FinSi	

FinProceso

///comentario sabado