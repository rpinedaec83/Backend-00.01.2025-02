Proceso Algoritmo5_Venta_AlMayor_Zapatos
	Definir  precio como Entero
	Definir  cantidadZapatos, totalPagar, totalOriginal, descuento como Real
	precio=80 //Cada par de zapatos cuesta 80
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese numero de Zapatos comprados: "
		Leer cantidadZapatos
		//Valida si no es entero para advertir
		Si (TRUNC(cantidadZapatos) <> cantidadZapatos) Entonces 
			Escribir " *ADVERTENCIA*SOLO*ENTEROS*"
		SiNo 		
			totalOriginal = cantidadZapatos*precio  // Calculo total sin descuentos para todos
			descuento=totalOriginal *0				// Calculo de la cantidad a descontar
			totalPagar = totalOriginal*(1-0)		// Calculo del total a pagar
			//Mayor igual a 10u y menor a 20u da 10%  desdecuento
			Si cantidadZapatos >=10 y cantidadZapatos <20 Entonces
				descuento = totalOriginal *0.1		//10%
				totalPagar = totalOriginal*(1-0.1);
			SiNo //Mayor igual a 20u y menor a 30u da 20% descuento
				Si cantidadZapatos>=20 y cantidadZapatos <30 Entonces
					descuento = totalOriginal *0.2	//20%
					totalPagar = totalOriginal*(1-0.2)
				SiNo // Mayor igual a 30u da 40% descuento
					Si cantidadZapatos >=30 Entonces
						descuento = totalOriginal*0.4//40%
						totalPagar = totalOriginal*(1-0.4)
					FinSi
				FinSi
			FinSi	//Muestra las unidades compradas, el precio sin descuento, descuento y total a pagar
			Escribir  "Cantidad comprada: ", cantidadZapatos, " unidades"
			Escribir "Total original: $",totalOriginal
		Escribir  "Descuento: $",descuento, " Total a pagar: $", totalPagar
		FinSi
				
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso