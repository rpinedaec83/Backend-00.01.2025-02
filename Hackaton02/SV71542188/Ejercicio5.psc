Algoritmo Ejercicio5

    Definir cantidad, total Como Real
    Escribir "Ingrese la cantidad de zapatos a comprar: "
    Leer cantidad
    total <- cantidad * 80

    Si cantidad > 30 Entonces
        total <- total * 0.6
    Sino Si cantidad > 20 Entonces
        total <- total * 0.8
    Sino Si cantidad > 10 Entonces
        total <- total * 0.9
    FinSi

    Escribir "El total a pagar es: $", total
FinAlgoritmo
