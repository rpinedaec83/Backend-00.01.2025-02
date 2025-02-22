Proceso ejercicio25
	//  	25.Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
	
	definir n, factorial, contador Como Entero
	escribir "Ingrese el numero entero positivo para calcular factorial"
	leer n
	
	factorial=1;
	contador=1;
	Mientras contador<=n Hacer
		factorial=factorial*contador
		contador=contador+1
		
		
	FinMientras
	
	escribir "El factorial del numero: ",n," es: ",factorial;
	
	
FinProceso
