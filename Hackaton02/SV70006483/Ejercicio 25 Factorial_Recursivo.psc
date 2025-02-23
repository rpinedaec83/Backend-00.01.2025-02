Funcion factorial <- Calcular_Factorial(n)
    Si n = 0 O n = 1 Entonces
        factorial <- 1
    Sino
        factorial <- n * Calcular_Factorial(n - 1)
    FinSi
FinFuncion

Proceso Factorial_Recursivo
    Definir num  Como Entero
	Definir  resultado Como Real
	
    // Solicitar el número al usuario
    Escribir "Ingrese un número entero positivo:"
    Leer num
	
    // Verificar que el número sea válido
    Si num < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        // Llamar a la función recursiva
        resultado <- Calcular_Factorial(num)
		
        Escribir "El factorial de ", num, " es: ", resultado
    FinSi
FinProceso
