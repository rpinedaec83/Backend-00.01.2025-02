//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio39
	Definir n Como Entero
	Definir  piSymbol Como Real
	Escribir "Ingrese la cantidad de t?rminos para la aproximaci?n de pi:"
    Leer n
    
    piSymbol = 0
    
    Para i <- 0 Hasta n - 1 Hacer
        Si i MOD 2 = 0 Entonces
            piSymbol = piSymbol + (4 / (2 * i + 1))
        Sino
            piSymbol = piSymbol - (4 / (2 * i + 1))
        Fin Si
    Fin Para
    
    Escribir "Aproximaci?n de pi: ", piSymbol
FinProceso