Algoritmo  Pregunta36
	
	Escribir "Ingrese la cantidad de términos de la serie de Fibonacci: "
    Leer n
    
    a <- 0
    b <- 1
    
    Escribir "Serie de Fibonacci: "
    Para i <- 1 Hasta n Hacer
        Escribir a  " " Sin Saltar
        temp <- a + b
        a <- b
        b <- temp
    FinPara

FinAlgoritmo

