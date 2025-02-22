//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez 
//y determine si es un número primo.

Algoritmo numeroPrimo
	
	Definir num como  entero
	Definir esPrimo Como Logico;
	
	Escribir  'Ingrese un numero entero entre el 1 y el 10';
	leer num
	
	si num<1 o num >10 Entonces
		Escribir  'Error: El numero debe de estar entre 1 y 10';
	SiNo
		
		si num =2 o num =3 o num = 5  o num=7 Entonces
			esPrimo<- Verdadero
		SiNo
			esPrimo<- Falso
		FinSi
	FinSi
	
	
	si esPrimo Entonces
		Escribir num,' Es un numero primo'
	SiNo
		Escribir  num, 'No es un numero primo'
	FinSi
	
FinAlgoritmo
	