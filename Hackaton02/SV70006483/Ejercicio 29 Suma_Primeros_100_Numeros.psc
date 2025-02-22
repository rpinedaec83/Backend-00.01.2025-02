Proceso Suma_Primeros_100_Numeros
    Definir suma, contador Como Entero
    
    // Inicialización de variables
    suma <- 0
    contador <- 1
    
    // Usamos un ciclo Mientras para sumar los números del 1 al 100
    Mientras contador <= 100 Hacer
        suma <- suma + contador
        contador <- contador + 1
    FinMientras
    
    // Mostrar el resultado
    Escribir "La suma de los primeros 100 números es: ", suma
FinProceso
