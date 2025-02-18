//Ejercicio27
//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso media_positiva
	Definir num, suma, contador, media Como Real
    suma =0
    contador = 0
    
    Repetir
        Escribir "Ingrese un número positivo (ingrese un número negativo para finalizar): "
        Leer num
        
        Si numero >= 0 Entonces
            suma=suma + num
            contador <- contador + 1
        FinSi
    Hasta Que num < 0
    
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinProceso
