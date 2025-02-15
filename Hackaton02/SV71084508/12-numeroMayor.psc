Proceso numeroMayor
	Definir dato, numEntero, a, b, c Como Caracter
	Definir n Como Real
	Dimension Num[2]
	cant <- 0
	
	Escribir "---------------------------------------------------------"
	Escribir "--- Te dire cual numero es mayor, ingresa los numeros ---"
	Escribir "---------------------------------------------------------"
	Repetir
		Leer dato
		numEntero <- verificarNumero (dato)
		
		//---Conversiun de dato a numero---
		Para i <- 1 Hasta Longitud(numEntero) Con Paso 1 Hacer
			a <- SubCadena(numEntero,i,i)
			Si a <> 'E' Entonces
				Si i = 1 Entonces
					Si Longitud(numEntero) > 10 Entonces
						Escribir "---> Solo puedo procesar 10 digitos"
					SiNo
						n = ConvertirANumero(numEntero)
						cant = cant + 1
						Num[cant] <- n
						Si cant = 1 Entonces
							Escribir "--> Primer numero: (", n, ") registrado exitosamente"
						FinSi
						Si cant = 2 Entonces
							Escribir "--> Segundo numero: (", n, ") registrado exitosamente"
						FinSi
					FinSi
				FinSi
			SiNo
				Escribir "--> ", numEntero
			Fin Si
		Fin Para
	Hasta Que cant = 2
	
	posicionUno = 1
	posicionDos = 1
	
	//---Ordenando los numeros---
	Para i <- 1 Hasta cant Con Paso 1 Hacer
		Si i = 1 Entonces
			Si Num[i] > Num[2] Entonces
				posicionUno = posicionuno + 1
			SiNo
				posicionUno = posicionuno
			FinSi
		FinSi
		
		Si i = 2 Entonces
			Si Num[i] > Num[1] Entonces
				posicionDos = posicionDos + 1
			SiNo
				posicionDos = posicionDos
			FinSi
		FinSi
	Fin Para
	
	//---Reasignando indices del arreglo---
	n1 <- Num[1]
	n2 <- Num[2]
	Num[posicionUno] <- n1
	Num[posicionDos] <- n2
	
	//---Recorriendo el arreglo y asignando cada elemento a una variable tipo cadena---
	Para i <- 1 Hasta cant Con Paso 1 Hacer
		Si i = 1 Entonces
			a = ConvertirATexto(Num[i])
		FinSi
		
		Si i = 2 Entonces
			b = ConvertirATexto(Num[i])
		FinSi
	Fin Para
	
	Escribir "----------------------------------"
	Escribir "--- Los numeros son: ---"
	Escribir "--> [ ", n1, ", ", n2, " ] <--"
	Escribir "----------------------------------"
	Escribir "|---> El mayor es: ", b, " <---"
	Escribir "----------------------------------"
	Escribir "-> Autor: cristian_manuel@outlook.com <-"
FinProceso

//---Funcion que valida la cadena en numeros Enteros---
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
		resultado =  Concatenar("El dato: (", datoLimpio)
		resultado = Concatenar(resultado, ") no es un numero")
	FinSi
	
	Si verificarDato = Verdadero Entonces
		Si contadorMenos > 1 O contadorPunto > 1 Entonces
			resultado =  Concatenar("El dato: (", datoLimpio)
			resultado = Concatenar(resultado, ") no es un numero")
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
				resultado = Concatenar(resultado, ") no es un numero")
			SiNo
				Si verificarDato = Verdadero Entonces
					resultado = datoLimpio
				FinSi
			FinSi
		FinSi
	FinSi
	f1 <- resultado
Fin SubProceso
