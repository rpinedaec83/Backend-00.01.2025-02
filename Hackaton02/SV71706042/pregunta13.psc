Algoritmo pregunta13
    
    Escribir "Ingrese una letra:"
    Leer letra
    letra <- Minusculas(letra)  // Convertir a minúscula para evitar problemas con mayúsculas
	
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada no es una vocal."
    FinSi
FinAlgoritmo

