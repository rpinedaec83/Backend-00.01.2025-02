//Ejercicio15
//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Conversiones
	Definir cm, pulgadas, libras, kg Como Real
		
	Escribir "Ingrese la cantidad en centímetros:"
	Leer cm
	pulgadas <- cm / 2.54

	Escribir "Ingrese la cantidad en libras:"
	Leer libras
	kg <- libras * 0.453592
	
	Escribir cm, " cm equivale a ", pulgadas, " pulgadas."
	Escribir libras, " libras equivale a ", kg, " kilogramos."
FinProceso
