Proceso Ejercicio13
	Definir letra Como Carácter
    Definir esVocal Como Logico
    Definir esValido Como Logico
    esVocal <- Falso
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese una letra:"
        Leer letra
        
        Si Longitud(letra) = 1 Y (letra >= "a" Y letra <= "z" O letra >= "A" Y letra <= "Z") Entonces
            esValido <- Verdadero
        Sino
            Escribir "Error: Debe ingresar una letra válida, no un número o más de un carácter, no añadir espacios."
        FinSi
    Hasta Que esValido

    letra <- Minúsculas(letra)
    
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        esVocal <- Verdadero
    FinSi
    
    Si esVocal Entonces
        Escribir "La letra ", letra, " es una vocal."
    Sino
        Escribir "La letra ", letra, " NO es una vocal."
    FinSi
FinProceso