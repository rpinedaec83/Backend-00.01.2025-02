Algoritmo Ejercicio18
    Definir cantidad, precio, total, ganancia Como Real
    Escribir "Ingrese la cantidad de CDs a comprar: "
    Leer cantidad

    Si cantidad >= 500 Entonces
        precio <- 6
    Sino Si cantidad >= 100 Entonces
        precio <- 7
    Sino Si cantidad >= 10 Entonces
        precio <- 8
    Sino
        precio <- 10
    FinSi

    total <- cantidad * precio
    ganancia <- total * 0.0825

    Escribir "El precio total es: $", total
    Escribir "La ganancia del vendedor es: $", ganancia
FinAlgoritmo
