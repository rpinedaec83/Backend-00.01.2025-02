//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.


Algoritmo mayor_menor
	definir num1, num2, num3,men,medio, may Como Entero
	
	Escribir  'inserte 3 numeros';
	leer num1
	leer num2
	leer num3
	
	
	si num1 <=num2 y num1<=num3 Entonces
		
		men<- num1;
		si num2<= num3 Entonces
			medio <- num2
			may <- num3
		SiNo
			medio <- num3
			may <- num2
		FinSi
	SiNo 
		si num2<=num1 y num2 <=num3 Entonces
			men <- num2
			si num1<= num3 Entonces
				medio <-num1
				may<- num3
			SiNo
				medio<- num3
				may <-num1
			FinSi
		sino 
			men <- num3
			si num1<=num2 Entonces
				
				medio <- num1
				may<- num2
			SiNo
				medio <- num2
				may <-num1
			FinSi
		FinSi
		
	FinSi
	
	
	//Mostrar  en pantalla numeros ordenados
	
	Escribir  "Numeros ordenados de menor a mayor:",men,", ",medio,",",may;
	
	
FinAlgoritmo

