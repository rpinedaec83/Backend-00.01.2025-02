Proceso pago_empleado
		Definir identificador, dias_trabajados, salario_diario, pago_total Como Real
		
		Escribir "Ingrese el número identificador del empleado (56 para Cajero, 57 para Servidor, 58 para Preparador de mezclas, 59 para Mantenimiento): "
		Leer identificador
		
		Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días): "
		Leer dias_trabajados
		
		// Vdías no sea > 6
		Si dias_trabajados < 1 O dias_trabajados > 6 Entonces
			Escribir "Número de días inválido. Debe ser entre 1 y 6 días."
FinSi

// Determinar_salario 
Segun identificador Hacer
	Caso 56:
		salario_diario <- 56
	Caso 57:
		salario_diario <- 64
	Caso 58:
		salario_diario <- 80
	Caso 59:
		salario_diario <- 48
	De Otro Modo:
		Escribir "Identificador de empleado no válido."

FinSegun

// Pago_total
pago_total <- salario_diario * dias_trabajados

// Resultado
Escribir "El empleado con identificador ", identificador, " debe recibir un pago de S/.", pago_total, " por ", dias_trabajados, " días trabajados."

FinProceso
