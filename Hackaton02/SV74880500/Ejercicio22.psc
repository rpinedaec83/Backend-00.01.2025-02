Algoritmo suma_n_primeros_numeros
    Definir n, suma Como Entero
    suma = 0
	
    Escribir "Introduce el valor de n (número de términos): "
    Leer n
	
    Si n < 1 Entonces
        Escribir "El valor de n debe ser mayor o igual a 1."
    Sino
        Para i = 1 Hasta n Con Paso 1
            suma = suma + i
        FinPara
        Escribir "La suma de los ", n, " primeros números es: ", suma
    FinSi
FinAlgoritmo