//Hacer un algoritmo en Pseint para calcular la
//suma de los números impares menores o iguales a n.



Algoritmo sumaImpares
	definir n, suma, i Como Entero;
	
	suma =0;
	
	Escribir "ingrese un numero entero positivo";
	leer n;
	
	para i<-1 hasta n con paso 1 Hacer
		//<> < >
		si i%2<> 0 Entonces
			
			suma = suma+i;
			Escribir i;

		FinSi
	FinPara
	
	Escribir  "La suma  de los numeros impares menores o igulaes a ",n," es: ",suma;
FinAlgoritmo
	