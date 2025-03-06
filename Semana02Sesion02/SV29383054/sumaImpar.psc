Algoritmo detarea
	Definir n,sumaimpar,i Como Entero;
	sumaimpar = 0;
	Escribir "Ingresar un numero positivo";
	leer n;
	para i= 1 hasta n con paso 1 Hacer
		si i%2<> 0 Entonces
			sumaimpar=sumaimpar + i			;
			escribir i;
		FinSi
	FinPara
	
	
	Escribir "La suma de los numeros impares es: ",sumaimpar
FinAlgoritmo
