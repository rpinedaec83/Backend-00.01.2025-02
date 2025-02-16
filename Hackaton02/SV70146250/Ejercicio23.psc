Proceso Algoritmo23_Suma_Impares_Menor_Igual_n
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
			Escribir "Lista de Impares (+): "
			Para contador=1 Hasta num Con Paso 1 Hacer
				Si contador MOD 2 <> 0 Entonces
					suma=suma+contador
					Escribir "         ",contador
				FinSi
			FinPara
			Escribir  "Suma de menores iguales a ",num," es: "
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