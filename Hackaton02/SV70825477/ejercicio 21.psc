Proceso ejercicio21
	//   	21.Hacer un algoritmo en Pseint que permita calcular el factorial de un número
	
	definir n, factorial, contador Como Entero
	escribir "Ingrese el numero entero positivo para calcular factorial"
	leer n
	
	factorial=1;
	contador=1;
	Repetir
		si	contador <=n Entonces
			contador=contador+1
			factorial=factorial*contador
			
		finsi
		
	Hasta Que contador >= n
	
	
	escribir "El factorial del numero: ",n," es: ",factorial;
	
	
	
	
FinProceso
