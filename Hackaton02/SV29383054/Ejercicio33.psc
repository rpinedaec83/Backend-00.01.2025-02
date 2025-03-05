Proceso CiudadesP
	definir i,j, Poblacion, mayorPoblacion Como Entero;
	definir nombreCiudad, CiudadMayorPoblacion Como Caracter;
	mayorPoblacion=0;
	para i=1 hasta 3 con paso 1 Hacer
		Escribir"Ingrese el nombre de la provincia:",i;
		Leer nombreProvincia;
		Para  j=1 hasta 11 con paso 1 hacer
			Escribir "Ingrese el nombre de la ciudad:",j," de la provincia:", nombreProvincia;
			Leer nombreCiudad;
			Escribir "Ingrese la población de la ciudad:", nombreProvincia;
			Leer Poblacion;
			si población>mayorPoblacion Entonces
				mayorPoblacion=Poblacion;
				CiudadMayorPoblacion= nombreCiudad
			FinSi
		FinPara
	FinPara
	Escribir "La ciudad con mayor población es:", mayorPoblacion;
FinProceso
