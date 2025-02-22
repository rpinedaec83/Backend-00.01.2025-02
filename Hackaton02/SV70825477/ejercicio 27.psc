Proceso ejercicio27
	// 	27.Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	
	resultado=0
	Repetir
		escribir "Digite el número"
		leer valor1
		si valor1 > 0
			resultado = resultado + valor1
		FinSi
		
	Hasta Que valor1 < 0
	
	Escribir "A es ",resultado;
	
FinProceso
