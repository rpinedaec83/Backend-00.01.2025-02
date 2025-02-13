Algoritmo Sumadora
	
	Escribir "Digita el primer número"
	Leer n1
	Escribir  "Digita el segundo número"
	Leer  n2
	Escribir  "Digita la operación: 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"
	leer operacion
	
	respuesta = 0
	si operacion == 1 Entonces
		respuesta = n1 + n1
	SiNo
		Si operacion == 2 Entonces
			respuesta = n1 - n2
		SiNo
			Si operacion == 3 Entonces
				respuesta = n1 * n2
			SiNo
				Si operacion == 4 Entonces
					respuesta = n1/n2
				SiNo
					Escribir 'Operación no válida"
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir "La respuesta es: ", respuesta
	
FinAlgoritmo
