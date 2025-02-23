Algoritmo pregunta32
	
	numCiudades <- 11
    mayorPoblacion <- 0
   
	
    // Recorrer las 3 provincias
    Para provincia <- 1 Hasta 3 Hacer
        Escribir "Provincia " provincia ":"
	    // Recorrer cada ciudad dentro de la provincia
		Para ciudad <- 1 Hasta numCiudades Hacer
			Escribir "Ingrese el nombre de la ciudad " ciudad ":"
			Leer nombreCiudad
			Escribir "Ingrese la población de " nombreCiudad ":"
			Leer poblacion
			
			// Comparar para encontrar la ciudad con mayor población
			Si poblacion > mayorPoblacion Entonces
				mayorPoblacion <- poblacion
				nombreCiudadMayor <- nombreCiudad
			FinSi
		FinPara
	FinPara
		
		// Mostrar la ciudad con más habitantes
		Escribir "La ciudad con más habitantes es " nombreCiudadMayor " con una población de " mayorPoblacion " personas."
FinAlgoritmo

