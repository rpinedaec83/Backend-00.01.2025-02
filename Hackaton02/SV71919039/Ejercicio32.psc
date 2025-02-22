Proceso Ejercicio32
	Definir provincia1, provincia2, provincia3 Como Cadena
    Definir ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6, ciudad7, ciudad8, ciudad9, ciudad10, ciudad11 Como Cadena
    Definir poblacion1, poblacion2, poblacion3, poblacion4, poblacion5, poblacion6, poblacion7, poblacion8, poblacion9, poblacion10, poblacion11 Como Entero
    Definir maxPoblacion, ciudadMaxPoblacion Como Entero
    Definir nombreCiudadMaxPoblacion Como Cadena
    maxPoblacion <- 0
	
    Escribir "Ingrese el nombre de la primera provincia: "
    Leer provincia1
	
    Escribir "Ingrese el nombre de la segunda provincia: "
    Leer provincia2
	
    Escribir "Ingrese el nombre de la tercera provincia: "
    Leer provincia3
	
    
    Escribir "Ingrese las 11 ciudades de ", provincia1, " y sus respectivas poblaciones: "
    Escribir "Ciudad 1: "
    Leer ciudad1
    Escribir "Población de ", ciudad1, ": "
    Leer poblacion1
	
    Escribir "Ciudad 2: "
    Leer ciudad2
    Escribir "Población de ", ciudad2, ": "
    Leer poblacion2
	
    Escribir "Ciudad 3: "
    Leer ciudad3
    Escribir "Población de ", ciudad3, ": "
    Leer poblacion3
	
    Escribir "Ciudad 4: "
    Leer ciudad4
    Escribir "Población de ", ciudad4, ": "
    Leer poblacion4
	
    Escribir "Ciudad 5: "
    Leer ciudad5
    Escribir "Población de ", ciudad5, ": "
    Leer poblacion5
	
    Escribir "Ciudad 6: "
    Leer ciudad6
    Escribir "Población de ", ciudad6, ": "
    Leer poblacion6
	
    Escribir "Ciudad 7: "
    Leer ciudad7
    Escribir "Población de ", ciudad7, ": "
    Leer poblacion7
	
    Escribir "Ciudad 8: "
    Leer ciudad8
    Escribir "Población de ", ciudad8, ": "
    Leer poblacion8
	
    Escribir "Ciudad 9: "
    Leer ciudad9
    Escribir "Población de ", ciudad9, ": "
    Leer poblacion9
	
    Escribir "Ciudad 10: "
    Leer ciudad10
    Escribir "Población de ", ciudad10, ": "
    Leer poblacion10
	
    Escribir "Ciudad 11: "
    Leer ciudad11
    Escribir "Población de ", ciudad11, ": "
    Leer poblacion11
	
    
    Si poblacion1 > maxPoblacion Entonces
        maxPoblacion <- poblacion1
        nombreCiudadMaxPoblacion <- ciudad1
    FinSi
	
    Si poblacion2 > maxPoblacion Entonces
        maxPoblacion <- poblacion2
        nombreCiudadMaxPoblacion <- ciudad2
    FinSi
	
    Si poblacion3 > maxPoblacion Entonces
        maxPoblacion <- poblacion3
        nombreCiudadMaxPoblacion <- ciudad3
    FinSi
	
    Si poblacion4 > maxPoblacion Entonces
        maxPoblacion <- poblacion4
        nombreCiudadMaxPoblacion <- ciudad4
    FinSi
	
    Si poblacion5 > maxPoblacion Entonces
        maxPoblacion <- poblacion5
        nombreCiudadMaxPoblacion <- ciudad5
    FinSi
	
    Si poblacion6 > maxPoblacion Entonces
        maxPoblacion <- poblacion6
        nombreCiudadMaxPoblacion <- ciudad6
    FinSi
	
    Si poblacion7 > maxPoblacion Entonces
        maxPoblacion <- poblacion7
        nombreCiudadMaxPoblacion <- ciudad7
    FinSi
	
    Si poblacion8 > maxPoblacion Entonces
        maxPoblacion <- poblacion8
        nombreCiudadMaxPoblacion <- ciudad8
    FinSi
	
    Si poblacion9 > maxPoblacion Entonces
        maxPoblacion <- poblacion9
        nombreCiudadMaxPoblacion <- ciudad9
    FinSi
	
    Si poblacion10 > maxPoblacion Entonces
        maxPoblacion <- poblacion10
        nombreCiudadMaxPoblacion <- ciudad10
    FinSi
	
    Si poblacion11 > maxPoblacion Entonces
        maxPoblacion <- poblacion11
        nombreCiudadMaxPoblacion <- ciudad11
    FinSi
	
    
    Escribir "La ciudad con la mayor población es: ", nombreCiudadMaxPoblacion
    Escribir "Con una población de: ", maxPoblacion
FinProceso