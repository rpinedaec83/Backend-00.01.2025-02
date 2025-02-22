Proceso ejercicio_27
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
