Proceso CuatroNumeros
	
	Definir a,b,c,d Como Entero;
	Definir pares,grande Como Entero;
	Definir promedio Como Real;
	pares <- 0;
	promedio <- 0;
	grande <- 0;
	
	Escribir 'ingresa cuatro números';
	Leer a,b,c,d;
	
	Si (a MOD 2=0) Entonces
		pares <- pares+1;
	FinSi
	
	Si (b MOD 2=0) Entonces
		pares <- pares+1;
	FinSi
	
	Si (c MOD 2=0) Entonces
		pares <- pares+1;
	FinSi
	
	Si (d MOD 2=0) Entonces
		pares <- pares+1;
	FinSi
	
	Si (a>b Y a>c Y a>d) Entonces
		grande <- a;
	SiNo
		Si (b>c Y b>d) Entonces
			grande <- b;
		SiNo
			Si (c>d) Entonces
				grande <- c;
			SiNo
				grande <- d;
			FinSi
		FinSi
	FinSi
	
	Escribir 'La cantidad de número pares: ',pares;
	Escribir 'El mayor de todos es: ',grande;
	
	Si (c MOD 2=0) Entonces
		Escribir 'El cuadrado del segundo es: ',b*b;
	FinSi
	
	Si (a<d) Entonces
		Escribir 'El promedio de todos los números es: ',(a+b+c+d)/4;
	FinSi
	
	Si (b>c) Entonces
		Si (c>=50 Y c<=700) Entonces
			Escribir 'El tercer número está comprendido entre 50-700';
			Escribir 'La suma de los cuatro números es: ',a+b+c+d;
		SiNo
			Escribir 'El tercer número no está comprendido entre 50-700';
		FinSi
	FinSi
	
FinProceso
