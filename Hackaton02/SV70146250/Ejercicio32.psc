Proceso Algoritmo32_Poblacion_3_Provincias_11_Ciudades
	Definir nombreProvincia, nombreCiudad,ciudadMayorPoblacion Como Caracter
	Definir  poblacion, mayorPoblacion Como Entero
	definir i, j Como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		//Evita que acumule info de otras repeticiones
		mayorPoblacion=0
		Para i=1 hasta 3 con paso 1 hacer
			Escribir "Ingrese el nombre de la provincia: ",i,":"
			Leer nombreProvincia
			Para j=1 hasta 11 con paso 1 Hacer
				Escribir  "Ingrese el nombre de la ciudad: ",j, " de la provincia ", nombreProvincia
				Leer  nombreCiudad
				Escribir  "Ingrese la poblacion de la ciudad ",nombreCiudad
				leer poblacion
				Si poblacion > mayorPoblacion Entonces
					mayorPoblacion = poblacion
					ciudadMayorPoblacion = nombreCiudad
				FinSi
			FinPara
		FinPara
		Escribir  "Ciudad de mayor poblacion es ",ciudadMayorPoblacion, " con una cantidad de: ",mayorPoblacion
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso