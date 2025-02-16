Proceso Ejercicio14
	Definir numero Como Entero
    Definir esPrimo Como Logico
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esPrimo <- Verdadero
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese un número entero entre 1 y 9:"
        Leer entrada
        
        esValido <- Verdadero
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                esValido <- Falso
            FinSi
        FinPara
        
        Si esValido Entonces
            numero <- ConvertirANumero(entrada)
            Si numero < 1 O numero > 9 Entonces
                Escribir "Error: El número debe estar entre 1 y 9."
                esValido <- Falso
            FinSi
        Sino
            Escribir "Error: Debe ingresar un número entero, no una letra."
        FinSi
    Hasta Que esValido Y numero >= 1 Y numero <= 9
    
    Si numero = 1 Entonces
        esPrimo <- Falso
    Sino
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            esPrimo <- Verdadero
        Sino
            esPrimo <- Falso
        FinSi
    FinSi
    
    Si esPrimo Entonces
        Escribir "El número ", numero, " es primo."
    Sino
        Escribir "El número ", numero, " no es primo."
    FinSi
FinProceso