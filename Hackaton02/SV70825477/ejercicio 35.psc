Proceso ejercicio35
	// 	35.Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números
	Definir total, a, b,x,n Como Entero
	Total=20
	x=1
	Mientras x<= total Hacer
		Escribir "Digite el número"
		leer n
		si x=1 Entonces
			a=n
			b=n
		SiNo
			si n>a Entonces
				a=n
			SiNo
				si n<b Entonces
					b=n
					
				FinSi
			FinSi
		FinSi
		x=x+1
		
	FinMientras
	escribir "El numero mayor es: ",a
	
	
	
	
FinProceso
