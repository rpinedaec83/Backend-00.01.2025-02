Proceso Algoritmo31_Media_Pares_Impares_de_10_Numeros
	Definir num como Real
	Definir contador,contaPar,contaImpar,sumaPar,sumaImpar como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		//Evita que acumule datos de otras iteraciones
		sumaPar=0
		sumaImpar=0
		contaPar=0
		contaImpar=0
		Escribir "Ingresar 10 numeros enteros: "
		Para contador<-1 Hasta 10 Con Paso 1 Hacer
			Leer num
			Si TRUNC(num) <> num Entonces
				Escribir "ERROR: *DEBE SER ENTERO*"
				sumaPar=0		
				sumaImpar=0
				contaPar=0
				contaImpar=0
				contador=10		//Sale de al iteracion borrando lo acumulado
			SiNo
				Si num MOD 2 == 0 Entonces	//Acumula y suma pares
					sumaPar=sumaPar+num		
					contaPar=contaPar+1
				SiNo							
					sumaImpar=sumaImpar+num 	//Acumula y suma impares
					contaImpar=contaImpar+1
				FinSi
			FinSi
		FinPara
		Si contaImpar<>0 Entonces
			Escribir  "Media de Impares es: ", sumaImpar/contaImpar
		FinSi
		Si contaPar<>0 Entonces
			Escribir  "Media de Pares es: ", sumaPar/contaPar		
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