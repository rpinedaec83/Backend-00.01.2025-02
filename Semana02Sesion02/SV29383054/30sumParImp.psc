Algoritmo detarea
	Definir n,sumaimpar,sumapar,x Como Entero
	Escribir "Ingresar un numero"
	leer n
	sumaimpar = 0
	sumapar = 0
	Mientras n >0 Hacer
		x = n mod 10
		Escribir x
		si x mod 2 == 0 Entonces
			sumapar = sumapar + x
		SiNo
			sumaimpar = sumaimpar + x
		FinSi
		n = trunc(n/10)
	FinMientras
	Escribir "La suma de los digitos pares es: ",sumapar
	Escribir "La suma de los digitos impares es: ",sumaimpar
FinAlgoritmo
