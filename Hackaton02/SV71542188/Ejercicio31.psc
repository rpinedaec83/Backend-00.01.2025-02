Algoritmo Ejercicio31

    Definir num, sumaPares, sumaImpares, contPares, contImpares Como Entero
    sumaPares <- 0
    sumaImpares <- 0
    contPares <- 0
    contImpares <- 0

    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese un número: "
        Leer num

        Si num MOD 2 = 0 Entonces
            sumaPares <- sumaPares + num
            contPares <- contPares + 1
        Sino
            sumaImpares <- sumaImpares + num
            contImpares <- contImpares + 1
        FinSi
    FinPara

    Si contPares > 0 Entonces
        Escribir "Media de los pares: ", sumaPares / contPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi

    Si contImpares > 0 Entonces
        Escribir "Media de los impares: ", sumaImpares / contImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinAlgoritmo
