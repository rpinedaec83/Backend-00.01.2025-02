//Ejercicio25
//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
Proceso fact_distinta
	Definir  n, factorial, contador Como Entero;
	Escribir  "ingrese un numero entero positivo para calcular factorial"
	leer n
	factorial=1;
	contador=1;
	Mientras  contador<=n Hacer
		factorial = factorial *contador;
		contador=contador+1
	FinMientras
	
	Escribir "El factorial del numero: ",n," es: ", factorial;
FinProceso
