Proceso  Algoritmo39_Aproxima_GregoryLeibniz_para_Pi
	definir pi2, termino como Real;
	definir n, signo, iteraciones Como Entero
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
		Repetir //Comienza el bucle

		pi2=0
		n=1
		signo=1
		Escribir "Ingrese el numero de iteraciones:"
		leer iteraciones
		//Validacion pendiente
		Para i=1 hasta iteraciones Hacer 
			termino=4/n
			pi2=pi2+(signo * termino)		//Metodo GregoryLeibniz, en un ciclo
			signo = signo*(-1)
			n= n+2
		FinPara
		Escribir "Aproximacion PI en ",iteraciones," ciclos: "
		Escribir "            ",pi2
		Escribir "Referencia: 	3.1415926535897932"
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso
