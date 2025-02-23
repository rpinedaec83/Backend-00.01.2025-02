Algoritmo suma_desde_numero_para
    Definir suma, i, inicio Como Entero
    suma = 0
	
    Escribir "Introduce el número desde el cual quieres empezar la suma: "
    Leer inicio
	
    Para i = inicio Hasta inicio + 99 Con Paso 1 Hacer
        suma = suma + i
    FinPara
	
    Escribir "La suma de los 100 números empezando desde ", inicio, " es: ", suma
FinAlgoritmo