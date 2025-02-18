//Ejercicio24
//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso suma_pares
	Definir suma, i Como Entero
    suma <- 0
    
    Para i <- 2 Hasta 1000 Con Paso 2
        suma <- suma + i
    FinPara
    
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma	
FinProceso
