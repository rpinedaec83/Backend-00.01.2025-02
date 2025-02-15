Proceso sueldoMensual
	Definir maxHoras, minHoras, pagoNormal, pagoExtra, n Como Entero
	
	maxHoras = 66
	minHoras = 40
	pagoNormal = 20
	pagoExtra = 25
	validarOperacion = Falso
	tarifaNormal = 'Normal'
	tarifaExtra = 'Extras'
	
	Escribir "----------------------------------------------------------"
	Escribir "|-------- Calculadora de pagos por Horas Extras ---------|"
	Escribir "|--- (Las horas extras se calculan a partir de 40 h.) ---|"
	Escribir "----------------------------------------------------------"
	Escribir "|    ---> Ingresa el número de horas trabajadas <---     |"
	Escribir "----------------------------------------------------------"
	Repetir
		Leer dato
		numEntero <- verificarNumero (dato)
		
		//---Conversión de dato a número---
		Para i <- 1 Hasta Longitud(numEntero) Con Paso 1 Hacer
			x <- SubCadena(numEntero,i,i)
			Si x <> 'E' Entonces
				Si i = 1 Entonces
					Si Longitud(numEntero) > 2 Entonces
						Escribir "---> Solo puedo procesar 2 digitos"
					SiNo
						n = ConvertirANumero(numEntero)
						Si n > maxHoras Entonces
							Escribir "--> El limite de horas de trabajo son de ", maxHoras, " h."
						SiNo
							Si n >= 24 Entonces
								Si n >= 24 Entonces
									a <- n //horas de trabajo
									b <- 0 //horas extra
									tipo <- tarifaNormal
									tarifa <- pagoNormal
									d <- n - b //hora base
									e <- d * pagoNormal //salario base 
									f <- b * pagoExtra // pago de horas extras
									g <- e + f
									validarOperacion = Verdadero
								FinSi
								
								Si n > minHoras Entonces
									a <- n //horas de trabajo
									b <- n - minHoras //horas extra
									tipo <- tarifaExtra
									tarifa <- pagoExtra
									d <- n - b //hora base
									e <- d * pagoNormal //salario base 
									f <- b * pagoExtra // pago de horas extras
									g <- e + f
									validarOperacion = Verdadero
								FinSi
								
								
								Escribir "----------------------------"
								Escribir "| H. de Trabajo:  ", a, " h."
								Escribir "| H. extras:      ", b, " h."
								Escribir "| Tarifa ", tipo,":  $", tarifa
								Escribir "| Salario base:   $", e
								Escribir "| Pago extra:     $", f
								Escribir "----------------------------"
								Escribir "|---> Salario Total:  $", g, " <---"
								Escribir "----------------------------"
								Escribir "-> Autor: cristian_manuel@outlook.com <-"
							SiNo
								Escribir "---> Las horas de trabajo mínimo son de 24 h."
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