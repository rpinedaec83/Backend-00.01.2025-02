Algoritmo Pregunta4
	Escribir  "Ingresa 3 numeros"
	Leer num1, num2, num3
	
	si num1 <= num2 y num1 <= num3 Entonces
		Escribir num1
		si num2 <= num3 Entonces
			Escribir num2
			Escribir num3
		SiNo
			Escribir num3
			Escribir num2
		FinSi
	SiNo
		si num2 <= num1 y num2 <= num3 Entonces
			Escribir num2
			si num1 <= num3 Entonces
				Escribir num1
				Escribir num3
			SiNo
				Escribir num3
				Escribir num1
			FinSi
		SiNo
			si num3 <= num2 y num3 <= num1 Entonces
				Escribir num3
				si num2 <= num1 Entonces
					Escribir num2
					Escribir num1
				SiNo
					Escribir num1
					Escribir num2
				FinSi
			FinSi
		FinSi
	FinSi
	
	
FinAlgoritmo
