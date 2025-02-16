Proceso Algoritmo29_Suma_Cien_Numeros_con_Mientras
	Definir contador, suma como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		//Evita que acumule datos de otras iteraciones
		suma=0
		contador=1
		Escribir "Numeros a sumar: "
		Mientras contador <= 100 Hacer
			suma = suma + contador
			Escribir "   ",contador
			contador = contador+1
		Fin Mientras
		Escribir  "Suma 100 primeros numeros es: ", suma
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso