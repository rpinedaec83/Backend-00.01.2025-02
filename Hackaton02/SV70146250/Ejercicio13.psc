Proceso Algoritmo13_Evalua_Vocales
	Definir letra como Caracter
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese una letra: "
		Leer letra
			//Evalua si es vocal o no
		Segun Minusculas(letra) Hacer //Convierte a minuscula en caso este en mayuscula
			'a':
				Escribir "  Es VOCAL"
			'e':
				Escribir "  Es VOCAL"
			'i':
				Escribir "  Es VOCAL"
			'o':
				Escribir "  Es VOCAL"
			'u':
				Escribir "  Es VOCAL"
			De Otro Modo:
				Escribir "  NO es VOCAL"
		FinSegun
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe en mayusculas o minusculas, luego se convertira o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso