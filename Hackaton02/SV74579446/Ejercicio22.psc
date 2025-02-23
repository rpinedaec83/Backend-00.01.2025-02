//Ejercicio22
//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso suma_n
	Definir n, suma, i Como Entero
	
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
	
    Si n < 1 Entonces
        Escribir "Error: El número debe ser positivo y mayor a 0."
    Sino
        suma <- 0
		
        Para i <- 1 Hasta n Hacer
            suma <- suma + i
        FinPara
    FinSi
	
	Escribir "La suma de los primeros ", n, " números es: ", suma
FinProceso
