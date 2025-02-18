Algoritmo Ejercicio8
    Definir nota1, nota2, nota3, promedio Como Real
    Escribir "Ingrese las tres notas: "
    Leer nota1, nota2, nota3
    promedio <- (nota1 + nota2 + nota3) / 3

    Si promedio >= 13 Entonces
        Escribir "Aprobado con promedio de: ", promedio
    Sino
        Escribir "Reprobado con promedio de: ", promedio
    FinSi
FinAlgoritmo
