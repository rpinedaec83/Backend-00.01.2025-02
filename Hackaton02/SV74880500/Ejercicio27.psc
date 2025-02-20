Algoritmo calcular_media
    Definir numero, suma, cantidad, media Como Real
    suma = 0
    cantidad = 0
	
    Escribir "Introduce números positivos para calcular la media. Ingresa un número negativo para finalizar."
	
    Leer numero
    Mientras numero >= 0 Hacer
        suma = suma + numero
        cantidad = cantidad + 1
        Leer numero
    FinMientras
	
    Si cantidad > 0 Entonces
        media = suma / cantidad
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinAlgoritmo