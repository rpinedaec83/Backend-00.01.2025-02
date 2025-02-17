Proceso Algoritmo12_MAYOR_DE_2
	Definir num1, num2 como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese 2 numeros: "
		Leer num1, num2
			//Evaluacion
			Si num1>num2 Entonces
				Escribir "El MAYOR es: ", num1	
			SiNo
				Escribir "El MAYOR es: ", num2	
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