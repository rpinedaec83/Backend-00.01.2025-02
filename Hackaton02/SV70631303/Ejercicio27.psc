//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos,
//se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio27
	Definir num, suma, contador Como Real
	suma = 0
    contador = 0
    
    Escribir "Ingrese n?meros positivos para calcular la media (negativo para terminar):"
    
    Repetir
        Leer num
        Si num >= 0 Entonces
            suma = suma + num
            contador = contador + 1
        Fin Si
    Hasta Que num < 0
    
    Si contador > 0 Entonces
        Escribir "La media es: ", suma / contador
    Sino
        Escribir "No se ingresaron n?meros positivos."
    Fin Si
FinProceso
