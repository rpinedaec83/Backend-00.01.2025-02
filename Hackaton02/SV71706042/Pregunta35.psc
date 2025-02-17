Algoritmo  Pregunta35
	
	Escribir "Ingrese el primer número: "
    Leer num
    may <- num
    men <- num
    
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese un número: "
        Leer num
        
        Si num > may Entonces
            may <- num
        FinSi
        
        Si num < men Entonces
            men <- num
        FinSi
    FinPara
    
    Escribir "El número mayor es: ", may
    Escribir "El número menor es: ", men
	
FinAlgoritmo

