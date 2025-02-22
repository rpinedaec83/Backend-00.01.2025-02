Algoritmo calcular_factorial
    Definir num, factorial Como Entero
    factorial = 1
	
    Escribir "Introduce un número entero positivo: "
    Leer num
	
    Si num < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        Para i = 1 Hasta num Con Paso 1
            factorial = factorial * i
        FinPara
        Escribir "El factorial de ", num, " es: ", factorial
    FinSi
FinAlgoritmo