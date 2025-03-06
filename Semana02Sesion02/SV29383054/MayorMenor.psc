Algoritmo MayorMenor
	a,b,c,ban Son Enteros
	Escribir "Ingrese los tres números"
	leer a,b,c
	ban=1
	Si a == b entonces
		Si a == c Entonces
			Escribir "Los 3 números son iguales"
			ban=0
		SiNo
			Escribir "Primer y Segundo números son iguales"
			ban=0
		FinSi
	Sino
		si b == c Entonces
			Escribir "Segundo y Tercer números son iguales"
			ban=0
		FinSi
	FinSi
	Si ban == 1 Entonces
		Si a > b Entonces
			Si a > c Entonces
				Escribir "Mayor: ",a
			SiNo
				Escribir "Mayor: ",c
			FinSi
		SiNo
			
			Si b > c Entonces
				Escribir "Mayor: ",b
			Sino 
				Escribir "Mayor: ",c
			FinSi
		FinSi
	FinSi
	Si ban == 1 Entonces
		Si a < b Entonces
			Si a < c Entonces
				Escribir "Menor: ",a
			Sino 
				Escribir "Menor: ",c
			FinSi
		SiNo
			Si b < c Entonces
				Escribir "Menor: ",b
			SiNo
				Escribir "Menor: ",c
			FinSi
		Finsi
	FinSi
FinAlgoritmo

