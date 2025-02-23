//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso Ejercicio37
	Definir a,b Como Entero
	Escribir "Ingrese dos n?meros para calcular el MCD:"
    Leer a, b
    
    Mientras b <> 0 Hacer
        temp = b
        b = a MOD b
        a = temp
    Fin Mientras
    
    Escribir "El MCD es: ", a
FinProceso