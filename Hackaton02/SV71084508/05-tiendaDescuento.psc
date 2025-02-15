Proceso tiendaDescuento
	Definir zapato, dscUno, dscDos, dscTres, n Como Entero
	
	zapatoPrecio = 80
	dscUno = 10
	dscDos = 20
	dscTres = 40
	validarOperacion = Falso
	
	Escribir "---------------------------------------------------------------"
	Escribir "--> Tienda de Zapatos en ¡Promoción!"
	Escribir "--> se aplican descuentos a partir de:"
	Escribir "---------------------------------------------------------------"
	Escribir "--- a) Más de 10          ->  Descuento del 10%"
	Escribir "--- b) Entre 20 y 30      ->  Descuento del 20%"
	Escribir "--- c) Más de 30          ->  Descuento del 40%"
	Escribir "---------------------------------------------------------------"
	Escribir "--- Cuantos pares de zapatillas vas a comprar, ingrea un número"
	Escribir "---------------------------------------------------------------"
	Repetir
		Leer dato
		numEntero <- verificarNumero (dato)
		
		//---Conversión de dato a número---
		Para i <- 1 Hasta Longitud(numEntero) Con Paso 1 Hacer
			x <- SubCadena(numEntero,i,i)
			Si x <> 'E' Entonces
				Si i = 1 Entonces
					Si Longitud(numEntero) > 3 Entonces
						Escribir "---> Solo puedo procesar 3 digitos"
					SiNo
						n = ConvertirANumero(numEntero)
						Si n > 100 Entonces
							Escribir "--> Stock Limitado a 100 unidades"
						SiNo
							Si n > 0 Entonces
								Si n <= 10 Y n > 0 Entonces
									a <- n * zapatoPrecio
									b <- a * 1
									c <- 0
									d <- a
									dsc <- 0
									validarOperacion = Verdadero
								FinSi
								
								Si n > 10 Entonces
									a <- n * zapatoPrecio
									b <- a * dscUno
									c <- b / 100
									d <- a - c
									dsc <- dscUno
									validarOperacion = Verdadero
								FinSi
								
								Si n > 20 Y n <= 30 Entonces
									a <- n * zapatoPrecio
									b <- a * dscDos
									c <- b / 100
									d <- a - c
									dsc <- dscDos
									validarOperacion = Verdadero
								FinSi
								
								Si n > 30 Y n <= 100 Entonces
									a <- n * zapatoPrecio
									b <- a * dscTres
									c <- b / 100
									d <- a - c
									dsc <- dscTres
									validarOperacion = Verdadero
								FinSi
								
								Escribir "----------------------------"
								Escribir "| Precio:     $", zapatoPrecio
								Escribir "| Cantidad:    ", n
								Escribir "| Sub Total:  $", a
								Escribir "| Descuento:   ", dsc, "%"
								Escribir "| Total:      $", d
								Escribir "----------------------------"
								Escribir "|---> Ahorraste: $", c, "  <---"
								Escribir "----------------------------"
								Escribir "--- Autor: cristian_manuel@outlook.com ---"
							SiNo
								Escribir "---> La Unidad mínima de Venta, es uno"
							FinSi
						FinSi
					FinSi
				FinSi
			SiNo
				Escribir "--> ", numEntero
			Fin Si
		Fin Para
	Hasta Que validarOperacion = Verdadero
FinProceso

//---Funcion que valida la cadena en números Enteros---
SubProceso f1 <- verificarNumero ( data )
	Definir dato, datoLimpio, datoConPuntoComa, resultado Como Caracter
	Definir verificarDato, verificarMenos Como Logico
	Definir contadorPunto, contadorMenos Como Entero
	
	dato = data
	longitudCaracteres <- Longitud(dato)
	datoLimpio = ''
	datoConPuntoComa = ''
	
	//--- Quitando caracteres de espaciado ---
	Para i <- 1 Hasta longitudCaracteres Con Paso 1 Hacer
		a <- SubCadena(dato,i,i)
		Si a <> ' ' Entonces
			datoLimpio = Concatenar(datoLimpio, a)
		FinSi
	Fin Para
	
	verificarDato = Verdadero
	verificarMenos = Verdadero
	contadorPunto = 0
	contadorMenos = 0
	
	//---Verificando si el dato contiene caracteres ---
	Para i <- 1 Hasta Longitud(datoLimpio) Con Paso 1 Hacer
		a <- SubCadena(datoLimpio,i,i)
		Si a <> '-' Y a <> '.' Y a <> '0' Y a <> '1' Y a <> '2' Y a <> '3' Y a <> '4' Y a <> '5' Y a <> '6' Y a <> '7' Y a <> '8' Y a <> '9'Entonces
			verificarDato = Falso
		Fin Si
		
		Si a = '-' Entonces
			Si i = 1 Entonces
				verificarMenos = Verdadero
			SiNo
				verificarMenos = Falso
			Fin Si
		FinSi
		
		Si a = '-' Entonces
			contadorMenos = contadorMenos + 1
		FinSi
		
		Si a = '.' Entonces
			contadorPunto = contadorPunto + 1
		FinSi
	Fin Para
	
	//---Verificando si es número---
	Si verificarDato = Falso Entonces
		resultado =  Concatenar("El dato: (", datoLimpio)
		resultado = Concatenar(resultado, ") no es un número")
	FinSi
	
	Si verificarDato = Verdadero Entonces
		Si contadorMenos > 1 O contadorPunto > 1 Entonces
			resultado =  Concatenar("El dato: (", datoLimpio)
			resultado = Concatenar(resultado, ") no es un número")
		SiNo
			Para i <- 1 Hasta Longitud(datoLimpio) Con Paso 1 Hacer
				a <- SubCadena(datoLimpio,i,i)
				Si a = '-' O a = '.' Entonces
					datoConPuntoComa = Concatenar(datoConPuntoComa, a)
				Fin Si
				
				Si a = '-' Entonces
					Si i = 1 Entonces
						varificarDato = Verdadero
					SiNo
						verificarDato = Falso
					FinSi
				FinSi
			Fin Para
			
			Si datoLimpio = '-.' O datoLimpio = '.-' O verificarDato = Falso Entonces
				resultado =  Concatenar("El dato: (", datoLimpio)
				resultado = Concatenar(resultado, ") no es un número")
			SiNo
				Si verificarDato = Verdadero Y contadorMenos = 0 Y contadorPunto = 0 Entonces
					resultado = datoLimpio
				SiNo
					Si contadorMenos > 0 Entonces
						resultado =  Concatenar("El número: (", datoLimpio)
						resultado = Concatenar(resultado, ") es negativo")
					FinSi
					
					Si contadorPunto > 0 Entonces
						resultado =  Concatenar("El número: (", datoLimpio)
						resultado = Concatenar(resultado, ") no es un entero")
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	f1 <- resultado
Fin SubProceso
