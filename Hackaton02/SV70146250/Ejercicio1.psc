Proceso Algoritmo1_Tres_digitos	
	Definir num como Real //Numero a evaluar
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		Escribir "Ingrese un numero: "
		Leer num
		//Evaluar si no es entero para advertir
		Si TRUNC(num) <> num Entonces 
			Escribir "OJO:Solo se evalua parte Entera"
		FinSi
		num=TRUNC(ABS(num)) //Vuelve positivo al numero y extrae solo el entero
		Si (num>=100 Y num<=999) Entonces
			Escribir "[Tiene 3 Digitos]"
		SiNo
			Escribir "[No tiene 3 Digitos]"
		FinSi
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
FinProceso
