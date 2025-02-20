//Ejercicio38
//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso num_perfecto
	Definir numero, sumaDivisores,i Como Entero;
	Escribir "Ingrese un numero para verificar si es perfecto";
	leer numero;
	
	sumaDivisores=0
	
	para i<-1 hasta numero con paso 1 hacer
		si numero%i =0 Entonces
			sumaDivisores= sumaDivisores+1
		FinSi
	FinPara
	
	
	si sumaDivisores=numero Entonces
		
		Escribir  "El numero: ",numero," es perfecto";
	SiNo
		Escribir  "El numero: ",numero," no es perfecto";
	FinSi
FinProceso
