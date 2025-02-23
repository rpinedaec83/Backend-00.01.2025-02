Algoritmo Ejercicio36
    Definir n, a, b, temp, i Como Entero
    Escribir "Ingrese la cantidad de términos de Fibonacci: "
    Leer n

    a <- 0
    b <- 1

    Para i <- 1 Hasta n Hacer
        Escribir a
        temp <- a + b
        a <- b
        b <- temp
    FinPara
FinAlgoritmo
