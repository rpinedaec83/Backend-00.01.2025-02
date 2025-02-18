Proceso Suma_Primeros_100_Numeros
    Definir suma, contador Como Entero
    
    // Inicialización de variables
    suma <- 0
    contador <- 1
    
    // Usamos un ciclo Repetir hasta que contador sea mayor a 100
    Repetir
        suma <- suma + contador
        contador <- contador + 1
    Hasta Que contador > 100
    
    // Mostrar el resultado
    Escribir "La suma de los primeros 100 números es: ", suma
FinProceso
