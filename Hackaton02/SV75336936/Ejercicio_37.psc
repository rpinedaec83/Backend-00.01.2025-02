Proceso Ejercicio_37
	Definir a, b, resto Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    Mientras b <> 0 Hacer
        resto = a MOD b
        a = b
        b = resto
    FinMientras
    
    Escribir "El Máximo Común Divisor (MCD) es: ", a
FinProceso
