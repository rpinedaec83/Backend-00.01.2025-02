//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha.
//La formula que se debe aplicar es:

//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

Proceso Ejercicio40
	Escribir "Ingrese la cantidad de t�rminos para la aproximaci�n de pi:"
    Leer n
    
    piSymbol = 3
    
    Para i <- 1 Hasta n Hacer
        Si i MOD 2 = 0 Entonces
            piSymbol = piSymbol - (4 / ((2*i) * (2*i+1) * (2*i+2)))
        Sino
            piSymbol = piSymbol + (4 / ((2*i) * (2*i+1) * (2*i+2)))
        Fin Si
    Fin Para
    
    Escribir "Aproximaci�n de pi: ", piSymbol
FinProceso