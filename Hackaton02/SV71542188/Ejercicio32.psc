Algoritmo Ejercicio32

    Definir poblacion, mayorPoblacion, ciudadMayor Como Entero
    mayorPoblacion <- 0
    ciudadMayor <- ""

    Para i <- 1 Hasta 11 Hacer
        Escribir "Ingrese el nombre de la ciudad ", i, ": "
        Leer ciudad
        Escribir "Ingrese la población de ", ciudad, ": "
        Leer poblacion

        Si poblacion > mayorPoblacion Entonces
            mayorPoblacion <- poblacion
            ciudadMayor <- ciudad
        FinSi
    FinPara

    Escribir "La ciudad con mayor población es ", ciudadMayor, " con ", mayorPoblacion, " habitantes."
FinAlgoritmo
