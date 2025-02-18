Proceso Ejercicio_39
	
	Escribir "Digite el número de series para la aproximación del número pi"
	Leer cantidad_serie
	sumatoria_serie = 0
	Para i <- 0 Hasta cantidad_serie - 1 Con Paso 1 Hacer
		sumatoria_serie = sumatoria_serie + Gregory(i)
	Fin Para
	
	Escribir "Aproximación del número pi: ",sumatoria_serie * 4
	
FinProceso

Funcion resultado <- Gregory(n)
	
	resultado = ((-1) ^ n) / (2 * n + 1)
	
FinFuncion