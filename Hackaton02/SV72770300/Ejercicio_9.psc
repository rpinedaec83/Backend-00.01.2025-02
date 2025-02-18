Proceso Ejercicio_9
	
	Escribir "Digite el monto ($) generado por el trabajador"
	Leer monto_trabajador
	
	aumento = 0
	total = 0
	
	Si monto_trabajador > 2000 Entonces
		aumento = monto_trabajador * 0.05
		total = monto_trabajador + aumento
	SiNo
		aumento = monto_trabajador * 0.10
		total = monto_trabajador + aumento
	Fin Si
	
	Escribir "Aumento del trabajador: $ ",aumento
	Escribir "Total: $ ",total
FinProceso
