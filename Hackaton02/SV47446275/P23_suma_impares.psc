Proceso  suma_impares
		Definir n, suma, i Como Entero
		
		Escribir "Ingrese el valor de n: "
		Leer n
		
		// VN_ositivo
		Si n < 1 Entonces
			Escribir "El valor de n debe ser un número entero positivo."
		Sino
			suma <- 0
			
			// Suma de los números impares menores o iguales a n
			Para i <- 1 Hasta n Con Paso 2 Hacer
				suma <- suma + i
			FinPara
			
			Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
		FinSi

FinProceso
