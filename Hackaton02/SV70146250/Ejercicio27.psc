Proceso Algoritmo27_Media_Numeros_Positivos_Hasta_Agregar_Negativo
	Definir num, suma, contador como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		contador=0
		Repetir
			Escribir "Ingrese numero NO negativo o finalizara: "
			Leer num 
			Si num>=0 Entonces
				suma=suma+num
				contador=contador+1
			FinSi
		Hasta Que num<0
		Si contador>0 Entonces
			Escribir "Se ingresaron ",contador," numeros positivos"
			Escribir "Media de numeros ingresados es: ", suma/contador
		SiNo
			Escribir "No se ingresaron numeros positivos"
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