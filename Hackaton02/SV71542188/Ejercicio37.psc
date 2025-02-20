Algoritmo Ejercicio37
    Definir a, b, temp Como Entero
    Escribir "Ingrese dos números: "
    Leer a, b

    Mientras b <> 0 Hacer
        temp <- b
        b <- a MOD b
        a <- temp
    FinMientras

    Escribir "El MCD es: ", a
FinAlgoritmo
