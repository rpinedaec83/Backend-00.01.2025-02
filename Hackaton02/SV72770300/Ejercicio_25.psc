Proceso Ejercicio_25
	
	Escribir "Digite un número por favor"
	Leer n
	
	Si n == 0 Entonces
		Escribir "Factorial de ", n , " es: 1"
	SiNo
		Dimension factorial(n)
		resultado = n
		Para i <- n Hasta 2 Con Paso -1 Hacer
			factorial(i) = i
			resultado = resultado * (factorial(i) - 1)
		Fin Para
		Escribir "Factorial de ", n , " es: ",resultado
	Fin Si
	
FinProceso
