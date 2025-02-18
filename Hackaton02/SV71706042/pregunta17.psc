Algoritmo pregunta17
    
	
    Escribir "Ingrese la hora (0-23):"
    Leer horas
    Escribir "Ingrese los minutos (0-59):"
    Leer minutos
    Escribir "Ingrese los segundos (0-59):"
    Leer segundos
	
    // Validación de rango
    Si (horas < 0 O horas > 23) O (minutos < 0 O minutos > 59) O (segundos < 0 O segundos > 59) Entonces
        Escribir "Hora inválida. Verifique los valores ingresados."
    Sino
        // Sumar un segundo
        segundos <- segundos + 1
		
        // Verificar si los segundos superan 59
        Si segundos = 60 Entonces
            segundos <- 0
            minutos <- minutos + 1
        FinSi
		
        // Verificar si los minutos superan 59
        Si minutos = 60 Entonces
            minutos <- 0
            horas <- horas + 1
        FinSi
		
        // Verificar si las horas superan 23
        Si horas = 24 Entonces
            horas <- 0
        FinSi
		
        Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
    FinSi
FinAlgoritmo






