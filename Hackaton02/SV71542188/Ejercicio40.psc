Algoritmo Ejercicio 40

    Definir pi Como Real
    Definir i, n, signo Como Entero
    Escribir "Ingrese el número de términos: "
    Leer n

    pi <- 3
    signo <- 1

    Para i <- 2 Hasta (2*n) Con Paso 2 Hacer
        pi <- pi + signo * (4 / (i * (i+1) * (i+2)))
        signo <- signo * -1
    FinPara

    Escribir "Aproximación de pi: ", pi
FinAlgoritmo
