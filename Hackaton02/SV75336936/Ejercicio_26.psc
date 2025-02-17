Proceso Ejercicio_26
	Definir dividendo, divisor, cociente, resto Como Entero
    
    Escribir "Ingrese el dividendo (número a dividir):"
    Leer dividendo
    Escribir "Ingrese el divisor (número por el cual se divide):"
    Leer divisor
    
    Si divisor = 0 Entonces
        Escribir "Error: No se puede dividir entre cero."
	FinSi

	cociente = 0
	resto = dividendo

	Mientras resto >= divisor Hacer
		resto = resto - divisor
		cociente = cociente + 1
	FinMientras

Escribir "El cociente es: ", cociente
Escribir "El resto es: ", resto
FinProceso
