Proceso promedioNotas
	Definir dato, numEntero, estado Como Caracter
	Definir n Como Entero
	Dimension Num[3]
	cant <- 0
	
	Escribir "----------------------------------------------------------------"
	Escribir "|-------- Promedio de Notas, para tres calificaciones ---------|"
	Escribir "|------------- (La nota aprobatoria es de 13) -----------------|"
	Escribir "----------------------------------------------------------------"
	Escribir "|                  ---> Ingrese la nota <---                   |"
	Escribir "----------------------------------------------------------------"
	
	Repetir
		Leer dato
		numEntero <- verificarNumero (dato)
		
		Para i <- 1 Hasta Longitud(numEntero) Con Paso 1 Hacer
			a <- SubCadena(numEntero,i,i)
			Si a <> 'E' Entonces
				Si i = 1 Entonces
					Si Longitud(numEntero) > 2 Entonces
						Escribir "---> Solo puedo procesar 2 digitos"
					SiNo
						n = ConvertirANumero(numEntero)
						Si n > 20 Entonces
							Escribir "---> La nota debe ser menor o igual a 20"
						SiNo
							cant = cant + 1
							Num[cant] <- n
							Escribir "--> Nota: (", n, ") registrada exitosomente"
						FinSi
					FinSi
				FinSi
			SiNo
				Escribir "--> ", numEntero
			Fin Si
		Fin Para
	Hasta Que cant = 3
	
	sumaNota = Num[1] + Num[2] + Num[3]
	nota = sumaNota / 3
	
	Si nota >= 13 Entonces
		estado = 'aprobado'
	SiNo
		estado = 'desaprobado'
	FinSi
	
	Escribir "------------------------------------"
	Escribir "| Notas:     ", Num[1], ", ", Num[2], ", ", Num[3]
	Escribir "| Promedio:  ", Redon(nota)
	Escribir "| Estado:    ", estado
	Escribir "------------------------------------"
	Escribir "|---> Estudiante: ", estado, "  <---"
	Escribir "------------------------------------"
	Escribir "-> Autor: cristian_manuel@outlook.com <-"
FinProceso

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