Proceso CalculadoraV3
	
	bandera = Verdadero
	
	Mientras bandera = Verdadero Hacer
		Escribir  "Digita la operación: 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"
		leer operacion
		
		Si operacion <> 0 Entonces
			Escribir "Digita el primer número"
			Leer n1
			Escribir  "Digita el segundo número"
			Leer  n2
			opValida = 0
			respuesta = 0
			
			Segun operacion Hacer
				1:
					respuesta = n1 + n1
					opValida = 1
				2:
					respuesta = n1 - n2
					opValida = 1
				3:
					respuesta = n1 * n2
					opValida = 1
				4:
					respuesta = n1 / n2
					opValida = 1
					
				De Otro Modo:
					Escribir 'Operación no válida"
			Fin Segun
			
			Si	opValida == 1 Entonces
				Escribir "La respuesta es: ", respuesta
			FinSi
			
		SiNo
			Escribir "Saliendo del programa"
			bandera = Falso
		FinSi
		
	FinMientras

FinProceso
