Proceso Cociente_y_Resto_Por_Restas
    Definir dividendo, divisor, cociente, resto Como Entero
	
    // Solicitar los valores al usuario
    Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor (debe ser mayor que 0):"
    Leer divisor
	
    // Validar que el divisor no sea cero
    Si divisor <= 0 Entonces
        Escribir "El divisor debe ser un número mayor que cero."
    Sino
        // Inicializar variables
        cociente <- 0
        resto <- dividendo
		
        // Realizar restas sucesivas
        Mientras resto >= divisor Hacer
            resto <- resto - divisor
            cociente <- cociente + 1
        FinMientras
		
        // Mostrar resultados
        Escribir "Cociente: ", cociente
        Escribir "Resto: ", resto
    FinSi
FinProceso
