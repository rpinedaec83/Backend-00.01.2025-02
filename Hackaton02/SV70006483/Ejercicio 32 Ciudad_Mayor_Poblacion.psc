Proceso Ciudad_Mayor_Poblacion
    Definir ciudad, provincia_mayor, ciudad_mayor Como Cadena
    Definir poblacion, mayor_poblacion Como Entero
    mayor_poblacion <- 0
    ciudad_mayor <- ""
    provincia_mayor <- ""
	
    // Se recorren las 3 provincias
    Para i <- 1 Hasta 3 Hacer
        Escribir "Ingrese el nombre de la provincia ", i, ":"
        Leer provincia
		
        // Se recorren las 11 ciudades por provincia
        Para j <- 1 Hasta 11 Hacer
            Escribir "Ingrese el nombre de la ciudad ", j, " de la provincia ", provincia, ":"
            Leer ciudad
            Escribir "Ingrese la población de ", ciudad, ":"
            Leer poblacion
			
            // Verificar si es la ciudad con mayor población
            Si poblacion > mayor_poblacion Entonces
                mayor_poblacion <- poblacion
                ciudad_mayor <- ciudad
                provincia_mayor <- provincia
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con mayor población es: ", ciudad_mayor, " en la provincia de ", provincia_mayor, " con ", mayor_poblacion, " habitantes."
FinProceso
