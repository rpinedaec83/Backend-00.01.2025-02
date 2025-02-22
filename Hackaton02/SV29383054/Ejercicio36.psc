Algoritmo MayMen20
	Definir total,a,b,n,x Como Entero
	Escribir " para el total de 20 datos"
	total=20;
	x = 1
	Mientras x <= total Hacer
		Escribir "Ingresa un numero "
		leer n
		si x == 1 Entonces
			a = n
			b = n
		SiNo
			si n > a Entonces
				a = n
			SiNo
				si n < b Entonces
					b = n
				FinSi
			FinSi
		FinSi
		x = x + 1
	FinMientras
	Escribir "El numero mayor es: ",a
	Escribir "El numero menor es: ",b
FinAlgoritmo
