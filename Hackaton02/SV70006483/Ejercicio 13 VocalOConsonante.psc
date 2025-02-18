Proceso VocalOConsonante
    Definir letra Como Caracter
	
    // Pedir la letra al usuario
    Escribir "Ingrese una letra: "
    Leer letra
	
    // Convertir a minúscula para evitar errores
    letra <- Minusculas(letra)
	
    // Verificar si es una vocal
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada NO es una vocal."
    FinSi
FinProceso
