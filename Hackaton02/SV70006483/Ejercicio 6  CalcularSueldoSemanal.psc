Proceso CalcularSueldoSemanal
    Definir horas_trabajadas, sueldo Como Real
    Definir horas_normales, horas_extras Como Real
    
    Escribir "Ingrese la cantidad de horas trabajadas en la semana: "
    Leer horas_trabajadas
	
    // Inicializar valores
    horas_normales <- 40
    sueldo <- 0
	
    // Calcular sueldo según horas trabajadas
    Si horas_trabajadas <= horas_normales Entonces
        sueldo <- horas_trabajadas * 20  // Pago normal
    Sino
        horas_extras <- horas_trabajadas - horas_normales
        sueldo <- (horas_normales * 20) + (horas_extras * 25)  // Pago normal + extras
    FinSi
	
    // Mostrar resultados
    Escribir "El sueldo semanal es: $", sueldo
FinProceso
