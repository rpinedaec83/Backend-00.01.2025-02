Proceso ConversionMedidas
    Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    // Pedir al usuario los valores a convertir
    Escribir "Ingrese la cantidad en centímetros: "
    Leer centimetros
	
    Escribir "Ingrese la cantidad en libras: "
    Leer libras
	
    // Realizar conversiones
    pulgadas <- centimetros / 2.54
    kilogramos <- libras * 0.453592
	
    // Mostrar resultados
    Escribir centimetros, " cm equivale a ", pulgadas, " pulgadas."
    Escribir libras, " libras equivale a ", kilogramos, " kilogramos."
FinProceso
