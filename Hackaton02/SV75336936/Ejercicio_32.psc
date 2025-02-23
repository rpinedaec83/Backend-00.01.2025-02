Proceso ejeercicio_32
	Definir nombreProvincia, nombreCiudad,ciudadMayorPoblacion Como Caracter
	Definir  poblacion, mayorPoblacion Como Entero;
	definir i,j Como Entero;
	
	mayorPoblacion=0;
	
	para i<-1 hasta 3 con paso 1 hacer
		Escribir "Ingrese el nombre de la provincia: ",i,":"
		leer nombreProvincia
		Para j<-1 hasta 2 con paso 1 Hacer
			Escribir  "Ingrese el nombre de la ciudad: ",j, " de la provincia ", nombreProvincia;
			Leer  nombreCiudad;
			
			Escribir  "Ingrese la poblacion de la ciudad ",nombreCiudad
			leer poblacion
			
			si poblacion > mayorPoblacion Entonces
				
				mayorPoblacion = poblacion;
				ciudadMayorPoblacion = nombreCiudad;
			FinSi
		FinPara
	FinPara
	
	Escribir  "La ciudad con  mayor poblacion es: ",ciudadMayorPoblacion, " con una poblacion de ",mayorPoblacion
FinProceso
