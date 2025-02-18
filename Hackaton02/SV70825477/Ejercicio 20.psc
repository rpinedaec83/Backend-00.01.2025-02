Proceso Ejercicio20
	// 	20Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y 
	
	
	definir numero1 Como Entero
	definir numero2 Como Entero
	definir numero3 Como Entero
	definir numero4 Como Entero
	escribir "A1"
	leer numero1
	escribir "A2"
	leer numero2
	escribir "A3"
	leer numero3
	escribir "A4"
	leer numero4
	
	si numero1 mod 2 == 0 & numero1 > 0 entonces;
		Valorpar = 1;
		
	FinSi
	si numero2 mod 2 == 0 & numero2 > 0 entonces;
		Valorpar2 = 1;
		
	finsi
	si numero3 mod 2 == 0 & numero3 > 0 entonces;
		Valorpar3 = 1;
		
	finsi
	si numero4 mod 2 == 0 & numero4 > 0 entonces;
		Valorpar4 = 1;
		
	finsi
	
	totalvalorpar = valorpar + valorpar2 + valorpar3 + valorpar4
	escribir "Hay ",totalvalorpar," numeros pares"
	
	// /////////////////////////////////////////////////////////////
	si numero1 > numero2 & numero1 > numero3 & numero1 > numero4 Entonces
		escribir "Es el número mayor: ",numero1;
	SiNo
		si numero2 > numero1 & numero2 > numero3 & numero2 > numero4 Entonces
			escribir "Es el número mayor: ",numero2;
		SiNo
			si numero3 > numero1 & numero3 > numero2 & numero3 > numero4 Entonces
				escribir "Es el número mayor: ",numero1;
			SiNo
				si numero4 > numero1 & numero4 > numero2 & numero4 > numero3 Entonces
					escribir "Es un número mayor; ",numero4;
				SiNo
					si numero1 == numero2 & numero1 == numero3 & numero1 == numero4 & numero2 == numero3 & numero2 == numero4 & numero3 == numero4 entonces
						escribir "Es un número mayor; ",numero1;
						
					FinSi
					
				FinSi
				
			FinSi
			
		FinSi
	FinSi
	
	//si numero1 == numero2 & numero1 == numero3 & numero1 == numero4 & numero2 == numero3 & numero2 == numero4 & numero3 == numero4 entonces
	//	escribir "Es un número mayor; ",numero1;
	//FinSi
	
	
	
	// ///////////////////////////////////////////////////////////
	
	si valorpar3 = 1 Entonces
		cuadrado = numero2 * numero2
		escribir "El cuadrado de ",numero2, " es ",cuadrado;
		
	FinSi
	// ////////////////////////////////////////////////////////////
	si numero1 < numero4 Entonces
		media = numero1 + numero2 + numero3 + numero4;
		mediatotal = media/4
		escribir "La media es ", mediatotal;
		
	FinSi
	// /7///////////////////////////////////////////////////////////
	si numero2 > numero3 & 50 <= numero3 & numero3 <= 700 Entonces
		suma1 = numero1 + numero2 + numero3 + numero4;
		Escribir "La suma de los 4 números es ", suma1;
		
	FinSi
	
	
	
	
	
	
	
	
	
	
	
FinProceso
