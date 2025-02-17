Proceso PagoEmpleadosHeladeria
    Definir idEmpleado, diasTrabajados, salarioDiario, pagoTotal Como Real
	
    // Solicitar el ID del empleado
	Repetir
		Escribir "Ingrese el número identificador del empleado:"
		Escribir "1 - Cajero ($56/día)"
		Escribir "2 - Servidor ($64/día)"
		Escribir "3 - Preparador de mezclas ($80/día)"
		Escribir "4 - Mantenimiento ($48/día)"
		Leer idEmpleado
		
		// Validar ID del empleado
		Segun idEmpleado Hacer
			1: salarioDiario <- 56
			2: salarioDiario <- 64
			3: salarioDiario <- 80
			4: salarioDiario <- 48
			De Otro Modo:
				Escribir "Error: Identificador no válido."
		FinSegun
	Hasta Que idEmpleado >=1 Y idEmpleado <=4
    
	Repetir
		// Solicitar la cantidad de días trabajados (máximo 6)
		Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
		Leer diasTrabajados
		
		// Validar que los días trabajados estén dentro del rango permitido
		Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
			Escribir "Error: La cantidad de días debe estar entre 1 y 6."
			
		FinSi
	Hasta Que diasTrabajados >= 1 Y diasTrabajados <= 6
	
	// Calcular el pago total
	pagoTotal <- salarioDiario * diasTrabajados

	// Mostrar el resultado
	Escribir "El pago total del empleado es: $", pagoTotal
FinProceso
