Proceso ejercicio24
	// 	24.Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000
	
	escribir "Digite el número par"
	leer valorpar
	
	si valorpar mod 2 == 0 entonces;
		a = valorpar/2;
		b = a+1;
		resultado = b * a;
		escribir "Suma de los números pares es ",resultado;
		
	SiNo
		escribir valorpar, " No es valido"
		
	FinSi
	
	
	
FinProceso
