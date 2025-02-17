Algoritmo pregunta14
    
    Escribir "Ingrese un número entero entre 1 y 10:"
    Leer numero
	
    // Verificar si está en el rango permitido
    Si numero < 1 O numero > 10 Entonces
        Escribir "El número ingresado está fuera del rango permitido."
    Sino
        // Verificar si es primo
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            Escribir "El número ", numero, " es primo."
        Sino
            Escribir "El número ", numero, " no es primo."
        FinSi
    FinSi
FinAlgoritmo


