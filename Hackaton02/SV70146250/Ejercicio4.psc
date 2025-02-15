Proceso Algoritmo4_menor_a_MAYOR
	Definir num1, num2, num3, temporal como Real
	Definir digito como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese 3 numeros enteros: "
		Leer num1, num2, num3
		//Evaluar si no es entero para advertir
		Si (TRUNC(num1) <> num1) O (TRUNC(num2) <> num2) O (TRUNC(num3) <> num3) Entonces 
			Escribir " *ADVERTENCIA*SOLO*ENTEROS*"
		SiNo 		//Evaluaciones
			Si num1>num2 Entonces //Si num1 es mayor a num2, intercambiarlos
				temporal<-num2		//num2 se guarda en temporal
				num2<-num1			//num1 se intercambia por num2
				num1<-temporal		//se recupera el num2, de temporal,
			FinSi
			Si	num1>num3 Entonces //Si num1 es mayor a num3, intercambiarlos
				temporal<-num3
				num3<-num1			//Intercambio
				num1<-temporal				
			FinSi
			Si	num2>num3 Entonces //Si num2 es mayor a num3, intercambiarlos
				temporal<-num3
				num3<-num2			//Intercambio
				num2<-temporal				
			FinSi
			Escribir "Orden ascendente: ", num1," ", num2," ", num3 
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

