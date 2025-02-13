Proceso CalculadoraV2
	
	Escribir "Digita el primer número"
	Leer n1
	Escribir  "Digita el segundo número"
	Leer  n2
	Escribir  "Digita la operación: 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"
	leer operacion
	
	respuesta = 0
	
	Segun operacion Hacer
		1:
			respuesta = n1 + n1
		2:
			respuesta = n1 - n2
		3:
			respuesta = n1 * n2
			
		4:
			respuesta = n1 / n2
		De Otro Modo:
			Escribir 'Operación no válida"
	Fin Segun
	
	Escribir "La respuesta es: ", respuesta
	
FinProceso
