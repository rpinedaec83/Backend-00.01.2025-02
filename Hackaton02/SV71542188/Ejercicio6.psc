Algoritmo Ejercicio6

    Definir horas, sueldo Como Real
    Escribir "Ingrese la cantidad de horas trabajadas: "
    Leer horas

    Si horas <= 40 Entonces
        sueldo <- horas * 20
    Sino
        sueldo <- (40 * 20) + ((horas - 40) * 25)
    FinSi

    Escribir "El sueldo semanal es: $", sueldo
FinAlgoritmo
