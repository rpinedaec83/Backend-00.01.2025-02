Proceso verificar_tres_digitos
		// Leer el número
		Escribir "Ingresa un número:"
		Leer numero
		
		// Verificar si el número tiene tres dígitos
		Si numero >= 100 y numero <= 999 o numero <= -100 y numero >= -999 Entonces
			Escribir "El número tiene tres dígitos."
		Sino
			Escribir "El número no tiene tres dígitos."
		FinSi	

FinProceso

///comentario 