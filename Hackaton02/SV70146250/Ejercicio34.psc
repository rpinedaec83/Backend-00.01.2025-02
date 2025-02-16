Proceso Algoritmo34_Tablas_Multiplica_1_9
	definir i, j Como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Para i=1 hasta 9 con paso 1 hacer
			Escribir "Tabla del ",i,")"
			Para j=1 hasta 10 con paso 1 Hacer
				Escribir i," x ",j," = ", i*j
			FinPara
			Escribir "------------"
		FinPara
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso