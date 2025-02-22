Proceso ejercicio11
	// 	11Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.   
	
	Escribir "Digite primer número"
	Leer valor1
	Escribir "Digite segundo número"
	leer valor2
	escribir "Digite tercer número"
	leer valor3
		
	si	valor1 > valor2 & valor2 > valor3 & valor1 > valor3;
		escribir "El mayor es ",valor1;
	SiNo
		si valor1 > valor3 & valor3 > valor2 & valor1 > valor3;
			escribir "El mayor es ", valor1;
		SiNo
			si valor2 > valor1 & valor1 > valor3 & valor2 > valor3;
				escribir "El mayor es ", valor2;
			SiNo
				si valor2 > valor3 & valor3 > valor1 & valor2 > valor1;
					escribir "El mayor es ",valor2;
				SiNo
					si valor3 > valor1 & valor1 > valor2 & valor3 > valor2;
						escribir "El mayor es ",valor3;
					SiNo
						si valor3 > valor2 & valor2 > valor1 & valor3 > valor1;
							escribir "El mayor es ",valor3;
							
						FinSi
						
					FinSi
					
				FinSi
				
			FinSi
			
		FinSi
	FinSi
	
FinProceso
