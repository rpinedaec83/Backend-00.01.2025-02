Proceso ejercicio02
    Definir numero Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese un número entero:"
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
            Escribir "Error: Debe ingresar un número entero válido y sin espacios."
        FinSi
    Hasta Que esValido
    
    numero <- ConvertirANumero(entrada)
    
    Si numero < 0 Entonces
        Escribir "El número es negativo."
    Sino
        Escribir "El número no es negativo."
    FinSi
FinProceso