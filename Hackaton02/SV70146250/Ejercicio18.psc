Proceso Algoritmo18_CD_al_Mayor
	Definir unidades, precio, gananciaVendedor, precioTotal como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Cantidad de CDs pedido: "
		Leer unidades
		//Evalua que sea entero positivo
		Si unidades < 1 O TRUNC(unidades) <> unidades Entonces
			Escribir  "*ERROR: CANTIDAD INVALIDA*"
		SiNo
			Si unidades>=1 Y unidades<=9 Entonces
				precio=10
			SiNo
				Si unidades >= 10 Y unidades <= 99 Entonces 
					precio=8
				SiNo
					Si unidades>= 100 Y unidades <=499 Entonces
						precio=7
					SiNo
						precio=6
					FinSi
				FinSi
			FinSi
				//Calculo de precio total
			precioTotal=precio*unidades
			gananciaVendedor=precioTotal*0.0825			
			Escribir "Precio total del pedido es: $", precioTotal
			Escribir "Ganancia del vendedor es: $", gananciaVendedor
		FinSi
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe en mayusculas o minusculas, luego se convertira o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso