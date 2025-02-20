Algoritmo Ejercicio26
    Definir dividendo, divisor, cociente, resto Como Entero
    Escribir "Ingrese el dividendo y el divisor: "
    Leer dividendo, divisor

    cociente <- 0
    resto <- dividendo

    Mientras resto >= divisor Hacer
        resto <- resto - divisor
        cociente <- cociente + 1
    FinMientras

    Escribir "Cociente: ", cociente, ", Resto: ", resto
FinAlgoritmo
