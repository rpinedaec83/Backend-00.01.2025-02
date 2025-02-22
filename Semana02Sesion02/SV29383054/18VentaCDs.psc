Proceso VentaCD
	Definir ventas,total Como Entero;
	total <- 0;
	Escribir '¿Cuántos Cds vendió?';
	Leer ventas;
	Si (ventas<=9) Entonces
		total <- ventas*10;
	SiNo
		Si (ventas<=99) Entonces
			total <- ventas*8;
		SiNo
			Si (ventas<=499) Entonces
				total <- ventas*7;
			SiNo
				Si (ventas>499) Entonces
					total <- ventas*6;
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir 'Total a pagar por el cliente: ',total;
	Escribir 'Ganancias del vendedor: ',total*0.0825;
	
FinProceso