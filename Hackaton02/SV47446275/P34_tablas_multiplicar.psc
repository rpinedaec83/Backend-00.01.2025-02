Proceso  tablas_multiplicar
		Definir i, j, resultado Como Entero
		
		Para i <- 1 Hasta 9 Con Paso 1 Hacer
			Escribir "Tabla de multiplicar del ", i
			
			Para j <- 1 Hasta 10 Con Paso 1 Hacer
				resultado <- i * j
				Escribir i, " x ", j, " = ", resultado
			FinPara
			
			Escribir "" // Salto 
		FinPara

FinProceso
