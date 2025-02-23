Proceso Media_De_Numeros
    Definir num, suma, contador, media Como Real
    
    // Inicialización de variables
    suma <- 0
    contador <- 0
    
    // Solicitar los números al usuario
    Escribir "Ingrese números positivos (ingrese un número negativo para finalizar):"
    
    Repetir
        Leer num
        Si num >= 0 Entonces
            suma <- suma + num
            contador <- contador + 1
        FinSi
    Hasta Que num < 0
    
    // Verificar si se ingresaron números válidos
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No ingresó números positivos."
    FinSi
FinProceso
