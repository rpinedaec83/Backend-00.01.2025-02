Proceso suma_n_primeros
		Definir n, suma, i Como Entero
		
		Escribir "Ingrese el valor de n: "
		Leer n
		
		// Verificar si n es positivo
		Si n < 1 Entonces
			Escribir "El valor de n debe ser un número entero positivo."
		Sino
			suma <- 0
			
			// Calcular la suma de los n primeros números
			Para i <- 1 Hasta n Con Paso 1 Hacer
				suma <- suma + i
			FinPara
			
			Escribir "La suma de los primeros ", n, " números es: ", suma
		FinSi
	
FinProceso
