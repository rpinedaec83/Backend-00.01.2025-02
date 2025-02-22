Proceso sin_titulo
	definir n,suma,i Como Entero
	suma=0;
	escribir "Ingrese número entero"
	leer n;
	para i<-1 hasta n con paso 1 Hacer
		si i%2<>0 entonces
			suma=suma+1;
			escribir i;
			
		FinSi
	FinPara
	
	escribir "La suma de los numeros impare menores o iguales a ",n," es: ",suma
	
FinProceso
