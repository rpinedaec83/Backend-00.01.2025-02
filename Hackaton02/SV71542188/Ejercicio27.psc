Algoritmo Ejercicio27

    Definir suma, contador, num Como Real
    suma <- 0
    contador <- 0

    Escribir "Ingrese números positivos (ingrese un número negativo para finalizar): "
    Repetir
        Leer num
        Si num >= 0 Entonces
            suma <- suma + num
            contador <- contador + 1
        FinSi
    Hasta Que num < 0

    Si contador > 0 Entonces
        Escribir "La media es: ", suma / contador
    Sino
        Escribir "No se ingresaron números válidos."
    FinSi
FinAlgoritmo
