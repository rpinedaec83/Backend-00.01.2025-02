Proceso hora_siguiente
		Definir hora, minuto, segundo, nueva_hora, nuevo_minuto, nuevo_segundo Como Entero
		
		Escribir "Ingrese la hora (en formato 24 horas): "
		Leer hora
		
		Escribir "Ingrese los minutos: "
		Leer minuto
		
		Escribir "Ingrese los segundos: "
		Leer segundo
		
		// Sumar_segundo
		nuevo_segundo <- segundo + 1
		
		// Segundos > 59
		Si nuevo_segundo = 60 Entonces
			nuevo_segundo <- 0
			nuevo_minuto <- minuto + 1
		Sino
			nuevo_minuto <- minuto
		FinSi
		
		// Minutos > superan 59
		Si nuevo_minuto = 60 Entonces
			nuevo_minuto <- 0
			nueva_hora <- hora + 1
		Sino
			nueva_hora <- hora
		FinSi
		
		// Horas > 23
		Si nueva_hora = 24 Entonces
			nueva_hora <- 0
		FinSi
		
		// Hora_siguiente
		Escribir "La hora dentro de un segundo será: ", nueva_hora, ":", nuevo_minuto, ":", nuevo_segundo
	
FinProceso
