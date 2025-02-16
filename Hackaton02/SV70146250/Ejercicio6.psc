Proceso Algoritmo6_Sueldo_Semanal
	Definir  cantidadHoras, SueldoSemana como Real
	Definir Llave como Cadena
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese horas trabajadas en la semana: "
		Leer cantidadHoras
		Si cantidadHoras <0 Entonces  	//Valida si es negativo y advierte
			Escribir " *NO ADMITE NEGATIVO*"
		SiNo
				//Pago de sueldo por hora normal
				SueldoSemana=cantidadHoras*20 
				//Si trabaja mas de 40 horas, se pagaran horas extra=25 por hora
				Si cantidadHoras > 40 Entonces
					PagoHorasExtra=((cantidadHoras-40)*25)
					SueldoSemana=800+PagoHorasExtra 
				FinSi	
				//Muestra sueldo
				Escribir  "Sueldo semanal: $", SueldoSemana
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