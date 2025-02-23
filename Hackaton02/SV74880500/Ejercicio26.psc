Algoritmo cociente_y_resto
    Definir dividendo, divisor, cociente, resto Como Entero
    cociente = 0
    resto = 0
	
    Escribir "Introduce el dividendo: "
    Leer dividendo
    Escribir "Introduce el divisor: "
    Leer divisor
	
    Si divisor = 0 Entonces
        Escribir "No se puede dividir entre cero."
    Sino
        resto = dividendo
        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        FinMientras
		
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", resto
    FinSi
FinAlgoritmo