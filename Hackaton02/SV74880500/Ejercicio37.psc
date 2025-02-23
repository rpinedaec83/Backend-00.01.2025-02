Algoritmo mcd_euclides
    Definir a, b, resto Como Entero
    Escribir "Ingresa el primer número: "
    Leer a
    Escribir "Ingresa el segundo número: "
    Leer b
	
    Mientras b <> 0 Hacer
        resto = a Mod b
        a = b
        b = resto
    FinMientras
	
    Escribir "El MCD es: ", a
FinAlgoritmo