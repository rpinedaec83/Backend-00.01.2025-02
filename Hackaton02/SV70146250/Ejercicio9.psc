Proceso Algoritmo9_Determina_Aumento
	Definir Sueldo como Real
	Definir Llave como Cadena
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese sueldo: "
		Leer Sueldo
		Si Sueldo<0 Entonces  	//Valida si es negativo y advierte
			Escribir " *EL SUELDO DEBE SER POSITIVO*"
		SiNo
				Si Sueldo=2000 Entonces //Determina si aprobo o desaprobo
					Escribir "No recibira aumento:"
				SiNo
					Si	Sueldo<2000 Entonces
						Escribir "Aumento de 10% equivale a: ", Sueldo*0.1
					SiNo
						Escribir "Aumento de 5% equivale a: ", Sueldo*0.05
					FinSi
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