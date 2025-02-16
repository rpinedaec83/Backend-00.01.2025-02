Proceso Algoritmo24_Suma_Pares_Hasta_1000
	Definir num como Real
	Definir suma, contador como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		//Escribir "Ingrese un numero: "
		//Leer num 
		num=1000 //El maximo rango de los pares a tomar
		suma=0 //Para que al repetir el bucle no siga agregando
		//Validacion NO negativo
		Si num < 0 O TRUNC(num) <> num Entonces
			Escribir "ERROR: *DEBE SER ENTERO NO NEGATIVO*"
		SiNo
			Escribir "Lista Pares (+): "		//Lista de los pares a sumar
			Para contador=1 Hasta num Con Paso 1 Hacer
				Si contador MOD 2 == 0 Entonces
					suma=suma+contador
					Escribir "         ",contador
				FinSi
			FinPara
			Escribir  "Suma de pares hasta ",num," es: "
			Escribir "              ",suma
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