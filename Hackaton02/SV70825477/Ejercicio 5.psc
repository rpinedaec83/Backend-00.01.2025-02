Proceso Ejercicio5
	// 	5Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
	
		escribir "Cantidad de zapatos a comprar";
		leer numero1;
		total=numero1*80
		
	
	si		numero1 >= 10 & numero1 < 20;
		tipodescuento = 0.1*total;
		totaldescuento=total-tipodescuento;
	SiNo
		si			numero1 >= 20 & numero1 < 30;
			tipodescuento = 16;
			tipodescuento = 0.2*total;
			totaldescuento=total-tipodescuento;
		sino
			si numero1 >= 30;
				tipodescuento = 32;
				tipodescuento = 0.2*total;
				totaldescuento=total-tipodescuento;
			SiNo
				si numero1 > 0 & numero1 < 10;
					escribir "Precio es: $",numero1*80
					
				FinSi
				
			FinSi
			
		FinSi
		
	FinSi
	
	escribir "Precio total a pagar $",totaldescuento;
	
	


FinProceso
