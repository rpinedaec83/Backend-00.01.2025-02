//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas
//y libras a kilogramos.

Proceso Ejercicio15
	Definir cm, pulgadas, libras, kilogramos Como Real
    
	Escribir "Ingrese la cantidad en centímetros:"
    Leer cm
    pulgadas = cm / 2.54
    Escribir "Equivale a ", pulgadas, " pulgadas."
    
    Escribir "Ingrese la cantidad en libras:"
    Leer libras
    kilogramos = libras * 0.453592
    Escribir "Equivale a ", kilogramos, " kilogramos."
FinProceso