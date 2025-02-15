Algoritmo Ejercicio25
    Definir n, factorial, i Como Entero
    Escribir "Ingrese un número para calcular su factorial: "
    Leer n

    factorial <- 1
    i <- 1
    Mientras i <= n Hacer
        factorial <- factorial * i
        i <- i + 1
    FinMientras

    Escribir "El factorial de ", n, " es: ", factorial
FinAlgoritmo
