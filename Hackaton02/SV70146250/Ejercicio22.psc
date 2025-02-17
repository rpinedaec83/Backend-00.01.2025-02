Proceso Algoritmo22_Suma_n_primeros_numeros
	Definir num como Real
	Definir suma, contador como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese un numero: "
		Leer num 
		suma=0 //Para que al repetir el bucle no siga agregando
		//Validacion NO negativo
		Si num < 0 O TRUNC(num) <> num Entonces
			Escribir "ERROR: *DEBE SER ENTERO NO NEGATIVO*"
		SiNo
			Escribir "Lista de numeros (+): "
			Para contador=1 Hasta num Con Paso 1 Hacer
					suma=suma+contador
					Escribir "         ",contador
			FinPara
			Escribir  "Suma de ",num,"° primeros numeros es: "
			Escribir "              ",suma
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