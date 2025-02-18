Proceso Algoritmo36_Serie_Fibonacci
	Definir num como Real
	Definir a, b, temporal, i como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese numero de terminos de serie:"
		Leer num
		//Valida que sea positivo, y no 0
		Si num <= 0 O TRUNC(num) <> num Entonces
			Escribir "ERROR: *DEBE SER ENTERO POSITIVO*"
		SiNo
			a = 0		//Fibonacci comienza con 0
			b = 1		//Segundo termino
			Escribir "Serie Fibonacci:"
			Para i= 1 Hasta num Hacer
				Escribir a		
				temporal = a + b	//Almacena la suma del anterior con el numero actual
				a = b				//Actualiza a para mostrarlo el siguiente ciclo
				b = temporal		//Almacena la suma hasta el momento en b
			FinPara
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