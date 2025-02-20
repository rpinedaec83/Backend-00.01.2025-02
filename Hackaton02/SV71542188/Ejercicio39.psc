Algoritmo Ejercicio39
    Definir pi Como Real
    Definir i, n, signo Como Entero
    Escribir "Ingrese el número de términos: "
    Leer n

    pi <- 0
    signo <- 1

    Para i <- 0 Hasta n-1 Hacer
        pi <- pi + (4 / (2*i + 1)) * signo
        signo <- signo * -1
    FinPara

    Escribir "Aproximación de pi: ", pi
FinAlgoritmo
