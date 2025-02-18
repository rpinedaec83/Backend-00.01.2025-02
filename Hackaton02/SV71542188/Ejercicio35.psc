Algoritmo Ejercicio35
    Definir num, mayor, menor Como Entero
    Escribir "Ingrese 20 números: "
    Leer num
    mayor <- num
    menor <- num

    Para i <- 2 Hasta 20 Hacer
        Leer num
        Si num > mayor Entonces mayor <- num FinSi
        Si num < menor Entonces menor <- num FinSi
    FinPara

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
