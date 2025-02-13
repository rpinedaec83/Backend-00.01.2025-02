Proceso CalculadoraV1
	
	Escribir "Digita el primer numero"
	leer primer_numero
	Escribir "Digita el segundo numero"
	leer segundo_numero
	Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir"
	leer operacion
	
	respuesta = 0
	si operacion == 1 Entonces
		respuesta = primer_numero + segundo_numero
	SiNo
		si operacion == 2 Entonces
			respuesta = primer_numero - segundo_numero
		SiNo
			si operacion == 3 Entonces
				respuesta = primer_numero * segundo_numero
			SiNo
				si operacion == 4 Entonces
					respuesta = primer_numero / segundo_numero
				SiNo
					Escribir  'Operacion no valida'
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir "La respuesta es: ",respuesta
	
FinProceso
