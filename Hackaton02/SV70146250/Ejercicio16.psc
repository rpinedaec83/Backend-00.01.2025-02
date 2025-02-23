Proceso Algoritmo16_Indica_dia_de_Semana
	Definir dia como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingresa numero entre 1 y 7: "
		Leer dia
		//Evalua el rango y que sea entero
		Si dia < 1 O dia> 7 O TRUNC(dia) <> dia Entonces
			Escribir  "*DEBE SER ENTERO ENTRE 1-7*"
		SiNo
			Segun dia Hacer	//Asignando el dia
				1:
					Escribir "Es Domingo"	//Indica que dia es, comienza por domingo
				2:
					Escribir "Es Lunes"
				3:
					Escribir "Es Martes"
				4:
					Escribir "Es Miercoles"
				5:
					Escribir "Es Jueves"
				6:
					Escribir "Es Vieres"
				7:
					Escribir "Es Sabado"
			Fin Segun			
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