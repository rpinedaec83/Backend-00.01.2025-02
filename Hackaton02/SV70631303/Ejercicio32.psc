//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
hacer un algoritmo en Pseint que nos permita saber eso.

Proceso Ejercicio32
	mayorPoblacion = 0
    
    Para i <- 1 Hasta 11 Hacer
        Escribir "Ingrese el nombre de la provincia:"
        Leer provincia
        Escribir "Ingrese el nombre de la ciudad:"
        Leer ciudad
        Escribir "Ingrese la poblaci�n de ", ciudad, ":"
        Leer poblacion
        
        Si poblacion > mayorPoblacion Entonces
            mayorPoblacion = poblacion
            ciudadMayor = ciudad
            provinciaMayor = provincia
        Fin Si
    Fin Para
    
    Escribir "La ciudad con mayor poblaci�n es ", ciudadMayor, " en la provincia ", provinciaMayor, " con ", mayorPoblacion, " habitantes."
FinProceso