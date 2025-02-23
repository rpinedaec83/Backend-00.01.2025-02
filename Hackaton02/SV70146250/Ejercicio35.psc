Proceso Algoritmo35_Mayor_Y_Menor_de_20
	Definir num, mayr, menr como Real
	Definir repetidor como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
	
		Para repetidor=1 hasta 20 con paso 1 hacer
			Escribir "Ingrese numero ",repetidor,":"
			Leer num
			Si repetidor = 1 Entonces
				mayr = num
				menr = num
			Sino
				Si num > mayr Entonces
					mayr = num
				FinSi
				Si num < menr Entonces
					menr = num
				FinSi
			FinSi			
		FinPara
		Escribir "El mayor es: ", mayr
		Escribir "El menor es: ", menr
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso