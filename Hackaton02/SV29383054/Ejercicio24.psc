Algoritmo SumPares
	Definir sumapar,i Como Entero;
	sumapar = 0;
	
	para i= 1 hasta 1000 con paso 1 Hacer
		si i%2= 0 Entonces
			sumapar=sumapar + i			;
			escribir i;
		FinSi
	FinPara
	
	Escribir "La suma de los numeros pares es: ",sumapar
FinAlgoritmo
