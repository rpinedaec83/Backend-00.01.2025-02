Algoritmo ciudad_mayor_poblacion
    Definir poblacion, max_poblacion, ciudad_max Como Entero
    Definir i, j, poblacion_ciudad Como Entero
	
    max_poblacion = 0
    ciudad_max = 0
	
    Para i = 1 Hasta 3 Hacer
        Escribir "Provincia ", i
        Para j = 1 Hasta 11 Hacer
            Escribir "Introduce la población de la ciudad ", j, ": "
            Leer poblacion_ciudad
			
            Si poblacion_ciudad > max_poblacion Entonces
                max_poblacion = poblacion_ciudad
                ciudad_max = j
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la mayor población es la ciudad ", ciudad_max, " con una población de ", max_poblacion
FinAlgoritmo