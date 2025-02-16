Proceso numeroNegativo
	Definir dato, datoLimpio, datoConPuntoComa Como Caracter
	Definir verificarDato, verificarMenos Como Logico
	Definir contadorPunto, contadorMenos Como Entero
	
	Escribir "------------------------------------------------------------------"
	Escribir "--- Te dire si un numero entero es negativo, ingresa un numero ---"
	Escribir "------------------------------------------------------------------"
	Repetir
		Leer dato
		longitudCaracteres <- Longitud(dato)
		datoLimpio = ''
		datoConPuntoComa = ''
		
		//--- Quitando caracteres de espaciado ---
		Para i <- 1 Hasta longitudCaracteres Con Paso 1 Hacer
			a <- SubCadena(dato,i,i)
			Si a <> ' ' Entonces
				datoLimpio = Concatenar(datoLimpio, a)
			Fin Si
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
		
		//---Verificando si es numero---
		Si verificarDato = Falso Entonces
			Escribir "--> El dato: (", datoLimpio,") no es un numero"
		FinSi
		
		Si verificarDato = Verdadero Entonces
			Si contadorMenos > 1 O contadorPunto > 1 Entonces
				Escribir "--> El dato: (", datoLimpio,") no es un numero"
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
					Escribir "--> El dato: (", datoLimpio,") no es un numero"
				SiNo
					Si verificarDato = Verdadero Y verificarMenos = Verdadero Y contadorPunto = 0 Entonces
						Para i <- 1 Hasta Longitud(datoLimpio) Con Paso 1 Hacer
							a <- SubCadena(datoLimpio,i,i)
							Si i = 1 Entonces
								Si a = '-' Entonces
									Escribir "--- El numero: (", datoLimpio,") es negativo ---"
									Escribir "--- Autor: cristian_manuel@outlook.com  ---"
								Sino
									verificarMenos = Falso
									Escribir "El numero: (", datoLimpio,") no es negativo"
								FinSi
							FinSi
						Fin Para
					SiNo
						Escribir "--> El numero: ", "( ", datoLimpio," )", " no es un entero"
					FinSi
				FinSi
			FinSi
		FinSi
	Hasta Que verificarDato = Verdadero Y verificarMenos = Verdadero Y contadorPunto = 0
FinProceso
