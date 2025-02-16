//17. Hacer un algoritmo en Pseint donde se ingrese una hora
//y nos calcule la hora dentro de un segundo.

Proceso Ejercicio17
	Definir horas, minutos, segundos Como Entero
	Escribir "Ingrese la hora:"
    Leer horas
    Escribir "Ingrese los minutos:"
    Leer minutos
    Escribir "Ingrese los segundos:"
    Leer segundos
    
    segundos = segundos + 1
    
    Si segundos = 60 Entonces
        segundos <- 0
        minutos = minutos + 1
        Si minutos = 60 Entonces
            minutos = 0
            horas = horas + 1
            Si horas = 24 Entonces
                horas = 0
            Fin Si
        Fin Si
    Fin Si
    
    Escribir "La nueva hora es: ", horas, ":", minutos, ":", segundos

FinProceso