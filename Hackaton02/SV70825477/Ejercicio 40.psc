Proceso ejercicio40
	//	Hacer un algoritmo en Pseint que cumpla con la aproximación del número 
	// pi con la serie de Nilakantha. La formula que se debe aplicar es:
	// Pi = = 3 + 4/(2x3x4) - 4/(4x5x6) + 4/(6x7x8) - 4/(8x9x10) + 4/(10x11x12) - 4/(12x13x14)
	
	definir pi2, termino como real;
	definir n, signo Como Entero
	definir iteraciones Como Entero
	pi2=3;
	n=2;
	signo=1;
	
	Escribir "Ingrese el numero de iteraciones"
	leer iteraciones;
	
	para i<-1 hasta iteraciones Hacer
		
		termino = 4/(n*(n+1)*(n+2));
		pi2 =pi2+(signo*termino);
		signo = signo *(-1)
		n=n+2;
	FinPara
	
	Escribir "La aproximacion de pi despues de ",iteraciones," iteraciones es de: ",pi2
	
	
FinProceso
