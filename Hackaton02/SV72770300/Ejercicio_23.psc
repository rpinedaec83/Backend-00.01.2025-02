Proceso Ejercicio_23
	
	Escribir "Digite un número para hacer la suma de los números impares"
	Leer total_numeros
	
	suma = 0
	
	Si total_numeros > 0 Entonces
		Para i <- 1 Hasta total_numeros Con Paso 1 Hacer
			Si i MOD 2 == 1 Entonces
				suma = suma + i
			SiNo
				suma = suma
			Fin Si
		Fin Para
		
		Escribir "Suma de números impares menores o iguales a ", total_numeros , " es: ",suma
		
	SiNo
		Escribir "Ingresar un número mayor a 0"
	Fin Si
	
	
FinProceso
