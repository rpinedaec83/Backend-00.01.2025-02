Proceso Algoritmo3_Evalua_Termina_4
	Definir num como Caracter
	Definir digito como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		//         Solucion del algoritmo
		Escribir "Ingrese un numero: "
		Leer num
		//Subcadena extrae de la cadena num, la ultima cifra.
		//Longitud determina el tamaño de la cadena, por tanto la ultima cifra.
		//digito almacena el numero resultado de convertir con ConvertirANumero
		digito = ConvertirANumero((Subcadena(num,longitud(num),longitud(num))))
		//Evalua el ultimo digito
		Si digito == 4 Entonces
			Escribir "Termina en 4"
		SiNo
			Escribir "No termina en 4"
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

