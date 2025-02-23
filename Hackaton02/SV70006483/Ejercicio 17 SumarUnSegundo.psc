Proceso SumarUnSegundo
    Definir horas, minutos, segundos Como Entero
	
    // Solicitar la hora al usuario
    Repetir
        Escribir "Ingrese la hora (0 - 23): "
        Leer horas
    Hasta Que horas >= 0 Y horas <= 23
	
    Repetir
        Escribir "Ingrese los minutos (0 - 59): "
        Leer minutos
    Hasta Que minutos >= 0 Y minutos <= 59
	
    Repetir
        Escribir "Ingrese los segundos (0 - 59): "
        Leer segundos
    Hasta Que segundos >= 0 Y segundos <= 59
	
    // Incrementar un segundo
    segundos <- segundos + 1
	
    // Ajustar valores si es necesario
    Si segundos = 60 Entonces
        segundos <- 0
        minutos <- minutos + 1
		
        Si minutos = 60 Entonces
            minutos <- 0
            horas <- horas + 1
			
            Si horas = 24 Entonces
                horas <- 0
            FinSi
        FinSi
    FinSi
	
    // Mostrar la nueva hora
    Escribir "La nueva hora es: ", horas, ":", minutos, ":", segundos
FinProceso
