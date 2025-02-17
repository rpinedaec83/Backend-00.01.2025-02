Proceso NumeroPrimo
    Definir num Como Entero
	
    // Pedir número al usuario
    Repetir
        Escribir "Ingrese un número entero positivo entre 1 y 10"
        Leer num
    Hasta Que (num >= 1 Y num <= 10)
	
    // Verificar si es primo
    Si num = 2 O num = 3 O num = 5 O num = 7 Entonces
        Escribir "El número ", num, " es primo."
    Sino
        Escribir "El número ", num, " NO es primo."
    FinSi
FinProceso
