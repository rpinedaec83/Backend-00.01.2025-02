Proceso  calcular_sueldo_semanal
	
		Definir horas_trabajadas, sueldo_base, horas_extras, sueldo_total Como Real
		
		Escribir "Introduce las horas trabajadas en la semana: "
		Leer horas_trabajadas
		
		Si horas_trabajadas <= 40 Entonces
			sueldo_base <- horas_trabajadas * 20  // Se paga 20 soles por cada hora trabajada
			sueldo_total <- sueldo_base
		Sino
			horas_extras <- horas_trabajadas - 40  // Calcular las horas extras
			sueldo_base <- 40 * 20  // Las primeras 40 horas se pagan a 20 soles
			sueldo_total <- sueldo_base + (horas_extras * 25)  // Las horas extras se pagan a 25 soles
		FinSi
		
		Escribir "El sueldo semanal es: S/", sueldo_total
	
FinProceso
