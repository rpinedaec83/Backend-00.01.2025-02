Proceso Suma_Numeros_Pares_Hasta_1000
    Definir i, suma Como Entero
	
    // Inicializar la suma en 0
    suma <- 0
	
    // Recorrer los números pares hasta 1000 y sumarlos
    Para i <- 2 Hasta 1000 Con Paso 2 Hacer
        suma <- suma + i
    FinPara
	
    // Mostrar el resultado
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma
FinProceso
