Proceso MCD_Euclides
    Definir a, b, temp Como Entero
	
    // Solicitar los dos números
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    // Validar que los números sean positivos
    Si a <= 0 O b <= 0 Entonces
        Escribir "Los números deben ser positivos."
    Sino
        // Algoritmo de Euclides
        Mientras b <> 0 Hacer
            temp <- b
            b <- a MOD b
            a <- temp
        FinMientras
		
        // El resultado es el MCD
        Escribir "El M.C.D. es:", a
    FinSi
FinProceso
