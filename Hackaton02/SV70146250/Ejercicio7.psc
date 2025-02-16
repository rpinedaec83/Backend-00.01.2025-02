Proceso Algoritmo7_Descuento_Helado
	Definir tipoMembresia como Caracter
	Definir Importe, descuento como Real
	Definir Llave como Cadena
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese importe de compra: "
		Leer Importe
		Escribir "Ingrese tipo de Membresia [A][B][C]:"
		Leer tipoMembresia
		
		Si Importe <0 Entonces  	//Valida si es negativo y advierte
			Escribir " *IMPORTE NO PUEDE SER NEGATIVO*"
		SiNo
			Segun tipoMembresia Hacer	//Segun sea el tipo de mebresia se asgina un descuento
				'A':
					Escribir "Descuento del 10%"	
					descuento=Importe*(0.1)		//Asignando descuento y calculando lo que se descontara
				'B':
					Escribir "Descuento del 15%"
					descuento=Importe*(0.15)
				'C':
					Escribir "Descuento del 20%"
					descuento=Importe*(0.2)
				De Otro Modo:
					Escribir "Tipo de Membresia Invalido"
					Escribir "Sin descuento"
					descuento=0
			Fin Segun
			Importe=Importe-descuento
			Escribir "El descuento es: $", descuento
			Escribir "El importe final es: $", importe
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