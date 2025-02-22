Proceso Algoritmo10_Paridad
	Definir num como Real
	Definir Llave como Cadena
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese numero a evaluar: "
		Leer num
		Si TRUNC(num) <> num Entonces  	//Valida si es entero
			Escribir " *NO ES ENTERO*"
		SiNo
			Si (num MOD 2) == 0 Entonces //Si al dividir por 2, no hay resto. Es PAR.
				Escribir "Es PAR"
			SiNo
				Escribir "Es IMPAR"		//Si el resto diferente de 0. IMPAR
			FinSi
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