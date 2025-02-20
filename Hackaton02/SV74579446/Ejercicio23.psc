//Ejercicio23
//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso suma_impares
	Definir n, suma, i Como Entero
    suma <- 0
    Escribir "Ingrese un número entero: "
    Leer n
    
    Para i <- 1 Hasta n Con Paso 2
        suma <- suma + i
    FinPara
    
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso
