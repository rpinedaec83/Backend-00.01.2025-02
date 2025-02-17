Proceso Ejercicio_23
	Definir n, suma, i Como Entero
    
    Escribir "Ingrese un numero entero positivo:"
    Leer n
   
    Si n < 1 Entonces
        Escribir "Error: Ingrese un numero positivo."
	FinSi

	suma = 0

	Para i = 1 Hasta n Con Paso 2 Hacer
		suma = suma + i
	FinPara

	Escribir "La suma de los numeros impares menores o iguales a ", n, " es: ", suma
FinProceso
