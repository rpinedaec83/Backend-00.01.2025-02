Proceso ejercicio38
	// 	38.Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto
	
	Definir numero, sumaDivisores,i Como Entero
	escribir"Ingrese el numero para verificar si es perfecto"
	leer numero;
	sumaDivisores=0
	para i<-1 hasta numero-1 con paso 1 Hacer
		si numero%i=0 Entonces
			sumaDivisores=sumaDivisores+i
		FinSi
	FinPara
	
	si sumaDivisores=numero Entonces
		Escribir "Es numero es perfecto: ",numero
	SiNo
		escribir "Es numero no es perfecto: ",numero
		
	FinSi
	
	
	
	
FinProceso
