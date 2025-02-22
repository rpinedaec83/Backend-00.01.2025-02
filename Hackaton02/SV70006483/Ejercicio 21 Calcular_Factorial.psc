Proceso Calcular_Factorial
    Definir num, i  Como Entero
	Definir  factorial Como Real
	
    // Solicitar un número entero positivo
    Repetir
        Escribir "Ingrese un número entero positivo:"
        Leer num
        Si num < 0 Entonces
            Escribir "Error: Debe ingresar un número no negativo."
        FinSi
    Hasta Que num >= 0
	
    // Inicializar el factorial en 1 (caso base)
    factorial <- 1
	
    // Calcular el factorial usando un bucle
    Para i <- 1 Hasta num Hacer
        factorial <- factorial * i
    FinPara
	
    // Mostrar el resultado
    Escribir "El factorial de ", num, " es: ", factorial
FinProceso
