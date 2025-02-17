Proceso Ejercicio_38
	
	Escribir "Digite un número para verificar si es un número perfecto"
	Leer num
	
	sumaDivisores = 0
	
	Para i <- 1 Hasta num - 1 Con Paso 1 Hacer
		Si num MOD i == 0 Entonces
			sumaDivisores = sumaDivisores + i
			Escribir sumaDivisores
		Fin Si
	Fin Para
	
	Si sumaDivisores == num Entonces
		Escribir "El número: ", num , " es perfecto"
	SiNo
		Escribir "El número: ", num , " no es perfecto"
	Fin Si
	
FinProceso
