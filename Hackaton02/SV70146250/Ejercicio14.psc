Proceso Algoritmo14_Primo_del_1_10
	Definir num como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingresa numero entre 1 y 10: "
		Leer num
		//Evalua el rango y que sea entero
		Si num < 1 O num > 10 O TRUNC(num) <> num Entonces
			Escribir  "*DEBE SER ENTERO ENTRE 1 - 10*"
		SiNo
			Si num == 2 o num == 3 o num == 5  o num == 7 Entonces //Evalua que sea primo
				Escribir "*SI es PRIMO*"
			SiNo
				Escribir "*NO es PRIMO*"
			FinSi
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