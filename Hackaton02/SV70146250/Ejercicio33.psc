Proceso Algoritmo33_Continuar_O_Terminar
	Definir contar como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	contar=0
	Repetir //Comienza el bucle
		//Menu para continuar o salir
		contar=contar+1
		Escribir "[==========",contar,"=============]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[==========",contar,"=============]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso