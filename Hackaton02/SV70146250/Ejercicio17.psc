Proceso Algoritmo17_Suma_1_segundo
	Definir hors, minuts, segunds como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese las horas (0-23)"
		Leer hors
		Escribir "Ingrese los minutos (0-59)"
		Leer minuts
		Escribir "Ingrese los segundos (0-59)"
		Leer segunds
		
		//Valida que sean positivos y enteros dentro del rango adimisible del formato hora, minutos y segundos
		Si hors < 0 O hors > 23 O (TRUNC(hors) <> hors) O minuts < 0 O minuts > 59 O (TRUNC(minuts) <> minuts) O segunds < 0 O segunds > 59 O (TRUNC(segunds) <> segunds) Entonces
			Escribir "*HORA INGRESADA INVALIDA*"
		SiNo
			segunds = segunds+1
			Si segunds==60 Entonces
				segunds=0
				minuts = minuts+1
			FinSi
			
			Si minuts==60 Entonces
				minuts=0
				hors = hors+1
			FinSi
					
			Si hors==24 Entonces
				hors=0
			FinSi
					
			Escribir "La hora dentro  de un segundo será:"
			Escribir "Horas: ",hors, " | Minutos: ",minuts," | Segundos: ",segunds
		FinSi
	
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe en mayusculas o minusculas, luego se convertira o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso