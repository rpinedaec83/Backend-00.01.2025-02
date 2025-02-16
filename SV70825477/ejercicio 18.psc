Proceso ejercicio18
	//  18Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	
	Escribir "Cantidad de discos"
	leer disco
	
	si disco <= 9;
		resultado=disco * 10
	SiNo
		si disco <= 99 & disco>=10;
			resultado=disco * 8;
		SiNo
			si disco <= 499 & disco >= 100;
				resultado=disco * 7;
			SiNo
				si disco>500;
					resultado = disco * 6;
					
				FinSi
				
			FinSi
			
		FinSi
	FinSi
	
	ganancia=8.25/100 * resultado
	
	
	
	Escribir "El precio es: ",resultado,"$"
	escribir "La ganancia es: ",ganancia,"$"
	
	
	
	
FinProceso
