Algoritmo Ejercicio7
    Definir precio, total Como Real
    Definir membresia Como Caracter
    Escribir "Ingrese el precio total de la compra: "
    Leer precio
    Escribir "Ingrese el tipo de membresía (A, B, C): "
    Leer membresia

    Segun membresia Hacer
        "A":
            total <- precio * 0.9
        "B":
            total <- precio * 0.85
        "C":
            total <- precio * 0.8
        De Otro Modo:
            total <- precio
    FinSegun

    Escribir "El total a pagar es: $", total
FinAlgoritmo
