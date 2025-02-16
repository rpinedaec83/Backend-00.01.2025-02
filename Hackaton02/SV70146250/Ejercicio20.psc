Proceso Algoritmo20_Evaluacion_de_4_Digitos
	Definir num1, num2, num3, num4, mayr,media como Real
	Definir pares,cuadrado2,suma como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese 4 numeros enteros positivos: "
		Leer num1, num2, num3, num4
		//Evitando que en el bucle se sigan acumulando valores en estas variables
		pares=0
		mayr=0	
		media=0
		suma=0
		//Validacion de entero y positivos
		Si num1 < 1 O TRUNC(num1) <> num1 O num2 < 1 O TRUNC(num2) <> num2 O num3 < 1 O TRUNC(num3) <> num3 O num4 < 1 O TRUNC(num4) <> num4 Entonces
			Escribir  "*ERROR: DEBE SER ENTERO POSITIVO"
		SiNo
			//Contando los pares
			Si num1 MOD 2==0 Entonces
				pares=pares+1
			FinSi
			Si num2 MOD 2==0 Entonces
				pares=pares+1
			FinSi
			Si num3 MOD 2==0 Entonces
				cuadrado2=num2^2		//Calculo de tercer Requerimiento
				pares=pares+1
			FinSi
			Si num4 MOD 2==0 Entonces
				pares=pares+1
			FinSi
			Si pares==0 Entonces		//Primer Requerimiento
				Escribir "1) No hay pares."
			SiNo
				Escribir "1) Hay ", pares," numeros pares."
			FinSi
			
			//Encontrar el mayor
			mayr=num1
			Si num2>mayr Entonces
				mayr=num2
			FinSi
			Si num3>mayr Entonces
				mayr=num3
			FinSi
			Si num4>mayr Entonces
				mayr=num4
			FinSi
			Escribir "2) El mayor de todos es: ", mayr //Segundo Requerimiento
			
			//Muestra cuadrado del segundo si cumple condicion
			Si cuadrado2==0 Entonces					//Tercer Requerimiento
				Escribir "3) El tercero no es par." 
			SiNo
				Escribir "3) El cuadrado del segundo es: ", cuadrado2
			FinSi
			
			//Calculo de la media, si cumple condicion
			Si num1<4 Entonces
				media=(num1+num2+num3+num4)/4
				Escribir "4) La media de los 4 numeros es: ", media
			SiNo
				Escribir "4) El primero es mayor o igual que cuatro."
			FinSi
			//Calculo de suma si cumple condicion
			Si num2>num3 Entonces
				Si num3>=50 Y num3<=700 Entonces
					suma=num1+num2+num3+num4
					Escribir "5) La suma de los 4 es: ",suma //Cuarto requerimiento
				SiNo
					Escribir "5) El tercero no esta en el rango [50-700]"
				FinSi
			SiNo
				Escribir "5) El tercero es mayor o igual que el segundo"
			FinSi
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