Algoritmo suma_impares
    Definir n, suma, i Como Entero
    suma = 0
	
    Escribir "Introduce el valor de n: "
    Leer n
	
    Si n < 1 Entonces
        Escribir "El valor de n debe ser mayor o igual a 1."
    Sino
        Para i = 1 Hasta n Con Paso 2
            suma = suma + i
        FinPara
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    FinSi
FinAlgoritmo