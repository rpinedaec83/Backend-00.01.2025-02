Proceso Algoritmo37_MCD_con_Euclides
	Definir num1,num2 como Real
	Definir temporal como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese primer numero:"
		Leer num1
		Escribir "Ingrese segundo numero:"
		Leer num2
		//Valida que sea positivo, y no 0
		Si num1 <= 0 O TRUNC(num1) <> num1 O num2 <= 0 O TRUNC(num2) <> num2 Entonces
			Escribir "ERROR: *DEBE SER ENTERO POSITIVO*"
		SiNo
			Mientras num2 <> 0 Hacer
				temporal = num2
				num2 = num1 MOD num2 //calcul el resto de divir 
				num1 = temporal //almacena el maximo comun divisor, hasta la ultima repeticion
			FinMientras
		Escribir "El MCD es: ", num1
		FinSi
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso