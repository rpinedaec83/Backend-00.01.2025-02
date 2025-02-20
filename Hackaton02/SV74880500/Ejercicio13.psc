Algoritmo es_vocal
    Definir letra Como Caracter
	
    Escribir "Introduce una letra: "
    Leer letra
	
    letra = Minusculas(letra)
	
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ", letra, " es una vocal."
    Sino
        Escribir "La letra ", letra, " no es una vocal."
    FinSi
FinAlgoritmo