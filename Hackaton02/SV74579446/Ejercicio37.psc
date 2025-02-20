//Ejercicio37
// Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso MCD
    Definir a, b Como Entero
    
    Escribir "Ingrese el primer número: "
    Leer a
    Escribir "Ingrese el segundo número: "
    Leer b
    
    Mientras a <> b
        Si a > b Entonces
            a = a - b
        Sino
            b = b - a
        FinSi
    FinMientras
    
    Escribir "El MCD es: ", a
	
FinProceso
