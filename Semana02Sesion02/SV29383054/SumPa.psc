Algoritmo detarea
	
	Definir c Como Entero
	
	Definir suma,n Como Real
	
	n = 1
	
	suma = 0
	
	c = 0
	sumaImpar=0
	ci=0
	
	
	Mientras n <> 0 Hacer
		
		Escribir "Ingresa un numero"
		
		leer n
		
		si n <> 0 Entonces
			
			si n mod 2 == 0 Entonces
				
				suma = suma + n
				
				
				c = c + 1
				
			FinSi
		SiNo
			sumaImpar=sumaImpar+n
			ci=ci+1
			
		FinSi
		
	FinMientras
	
Escribir "La suma de los numeros pares es:",suma
	
Escribir "Numeros pares es:",c
	
	
Escribir "El promedio de numeros pares es: ",suma/c
Escribir "La suma de los numeros impares es:",sumaImpar

Escribir "Numeros impares es:",ci


Escribir "El promedio de numeros impares es: ",sumaImpar/ci

	
FinAlgoritmo
