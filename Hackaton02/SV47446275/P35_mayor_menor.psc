Proceso  mayor_menor
		Definir numero, mayor, menor, i Como Entero

		mayor <- -999999999
		menor <- 999999999
		
		Para i <- 1 Hasta 20 Con Paso 1 Hacer
			Escribir "Ingrese el número ", i, ": "
			Leer numero
			
			// N+Mmayor
			Si numero > mayor Entonces
				mayor <- numero
			FinSi
			
			// Número_menor'
			Si numero < menor Entonces
				menor <- numero
			FinSi
		FinPara
		
		// Mayor y menor
		Escribir "El número mayor es: ", mayor
		Escribir "El número menor es: ", menor

FinProceso
