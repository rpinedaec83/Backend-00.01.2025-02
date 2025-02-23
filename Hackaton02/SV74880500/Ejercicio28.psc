Algoritmo suma_desde_numero
    Definir suma, i, inicio Como Entero
    suma = 0
	
    Escribir "Introduce el número desde el cual quieres empezar la suma: "
    Leer inicio
	
    i = inicio
    Repetir
        suma = suma + i
        i = i + 1
    Hasta Que i = inicio + 100
	
    Escribir "La suma de los 100 números empezando desde ", inicio, " es: ", suma
FinAlgoritmo