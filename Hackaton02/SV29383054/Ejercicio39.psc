Proceso NumeroPerfecto
	Definir n,i,s,r  como entero;
	Escribir "Ingrese un número para verificar si es perfecto";
	Leer n;
	s=0
	escribir "divisores"
	para i= 1 hasta n-1 con paso 1 Hacer
		r=n mod i
		si r=0 Entonces
			s=s + i;
			escribir i
		FinSi
	FinPara
	si s=n Entonces 
		Escribir "El número:",n,' ',"es perfecto";
	SiNo
		Escribir "El numero:",n,' ',"no es perfecto";
	FinSi
FinProceso
