//	Hacer un algoritmo en Pseint para determinar la media de una
//lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Algoritmo calcularMedia
	Definir  num, suma,contador Como Real
	
	contador=0;
	Repetir
		Escribir "Ingrese un numero positivo ( o un numero negativo para finalizar)";
		leer num;
		si num>= 0 Entonces
			suma = suma+num;
			contador=contador+1
		FinSi
	Hasta Que num<0
	
	si contador>0 Entonces
		Escribir "La media de los numeros ingresados es: ",suma/contador;
	SiNo
		Escribir "No se ingresaron numeros positivos"
	FinSi

FinAlgoritmo
	