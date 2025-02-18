Algoritmo Ejercicio17
    Definir horas, minutos, segundos Como Entero
    Escribir "Ingrese la hora (hh mm ss): "
    Leer horas, minutos, segundos

    segundos <- segundos + 1
    Si segundos = 60 Entonces
        segundos <- 0
        minutos <- minutos + 1
    FinSi

    Si minutos = 60 Entonces
        minutos <- 0
        horas <- horas + 1
    FinSi

    Si horas = 24 Entonces
        horas <- 0
    FinSi

    Escribir "La nueva hora es: ", horas, ":", minutos, ":", segundos
FinAlgoritmo
