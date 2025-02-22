Proceso CalculadoraV3
	
	bandera =  Verdadero
	
	
	Mientras bandera Hacer
		
		
		Escribir "Digita el primer numero"
		leer primer_numero
		Escribir "Digita el segundo numero"
		leer segundo_numero
		
		
		Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir si deseas salir presiona 0"
		leer operacion
		
		si operacion == 0 Entonces
			bandera = Falso
		FinSi
		
		
		
		opValida = 0
		
		
		respuesta = 0
		
		Segun operacion Hacer
			1:
				respuesta = primer_numero + segundo_numero
				opValida = 1
			2:
				respuesta = primer_numero - segundo_numero
				opValida = 1
			3:
				respuesta = primer_numero * segundo_numero
				opValida = 1
			4:
				respuesta = primer_numero / segundo_numero
				opValida = 1
			0:
				Escribir "Saliendo del programa"
			De Otro Modo:
				Escribir "Opcion No Valida"
		Fin Segun
		
		si opValida == 1 Entonces
			Escribir "La respuesta es: ",respuesta
		FinSi
	Fin Mientras
FinProceso


