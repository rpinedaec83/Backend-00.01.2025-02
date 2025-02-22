Proceso ejercicio01
    Definir numero Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese un número:"
        Leer entrada
        
        esValido <- Verdadero
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                Si No (i = 1 Y Subcadena(entrada, i, i) = "-") Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número válido y sin espacios."
        FinSi
    Hasta Que esValido
    
    numero <- ConvertirANumero(entrada)
    
    Si numero >= 100 Y numero <= 999 O numero <= -100 Y numero >= -999 Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número no tiene tres dígitos."
    FinSi
FinProceso