Algoritmo Ejercicio20

    Definir a, b, c, d, pares, mayor, suma, media Como Entero
    pares <- 0

    Escribir "Ingrese cuatro números enteros positivos: "
    Leer a, b, c, d

    // Contar números pares
    Si a MOD 2 = 0 Entonces pares <- pares + 1 FinSi
    Si b MOD 2 = 0 Entonces pares <- pares + 1 FinSi
    Si c MOD 2 = 0 Entonces pares <- pares + 1 FinSi
    Si d MOD 2 = 0 Entonces pares <- pares + 1 FinSi

    // Determinar el mayor
    mayor <- a
    Si b > mayor Entonces mayor <- b FinSi
    Si c > mayor Entonces mayor <- c FinSi
    Si d > mayor Entonces mayor <- d FinSi

    // Si el tercero es par, calcular el cuadrado del segundo
    Si c MOD 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es: ", b^2
    FinSi

    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    Si a < d Entonces
        media <- (a + b + c + d) / 4
        Escribir "La media de los cuatro números es: ", media
    FinSi

    // Si el segundo es mayor que el tercero, verificar si está entre 50 y 700
    Si b > c Entonces
        Si c >= 50 Y c <= 700 Entonces
            suma <- a + b + c + d
            Escribir "La suma de los cuatro números es: ", suma
        FinSi
    FinSi

    Escribir "Cantidad de números pares: ", pares
    Escribir "El número mayor es: ", mayor
FinAlgoritmo
