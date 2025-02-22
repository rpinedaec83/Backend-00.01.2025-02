Proceso Ejercicio_6
	
	Escribir "Digite sus horas trabajadas"
	Leer horas
	
	sueldo = 0
	sueldoExtra = 0
	horasExtra = 0
	
	Si horas > 40 Entonces
		horasExtra = horas - 40
		sueldoExtra = horasExtra * 25
		sueldo = (40 * 20) + sueldoExtra
	SiNo
		sueldo = horas * 20
	Fin Si
	
	Escribir "Sueldo del Trabajador: ",sueldo
	
FinProceso
