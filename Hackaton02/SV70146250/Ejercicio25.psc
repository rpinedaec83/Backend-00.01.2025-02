Proceso Algoritmo25_Factorial_Distinto
	Definir num como Real
	Definir contador, factorial como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese un numero: "
		Leer num 
		//Para que al repetir el bucle no siga acumulando
		factorial=0 
		contador=0
		//Validacion NO negativo
		Si num < 0 O TRUNC(num) <> num Entonces
			Escribir "ERROR: *DEBE SER ENTERO NO NEGATIVO*"
		SiNo
			//Para que comiencen en 1
			contador=1
			factorial=1 		
			Mientras contador<=num Hacer
				factorial = factorial *contador; //Calculo
				contador = contador+1 //Para que pase al siguiente valor sumando 1
			FinMientras
			
			Escribir "El factorial es: ", factorial
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