Proceso Algoritmo2_Evalua_negativo
	Definir num como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		//         Solucion del algoritmo
		Escribir "Ingrese un numero entero: "
		Leer num
		//Evaluar si no es entero para advertir
		 Si TRUNC(num) <> num Entonces 
			 Escribir " *ADVERTENCIA*NO*ES*ENTERO*"
			 SiNo 		//Evalua si es negativo
			 Si num < 0 Entonces
				 Escribir "[El numero es Negativo]"
			 SiNo
				 Escribir "[El numero es NO Negativo]"
			 FinSi
		FinSi
	
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso
