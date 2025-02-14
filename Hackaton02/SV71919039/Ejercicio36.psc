Proceso Ejercicio36
	Definir n, i, a, b, c Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese la cantidad de términos de la serie de Fibonacci: "
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
            Escribir "Error: Debes ingresar un número válido."
        FinSi
    Hasta Que esValido
    
    n <- ConvertirANumero(entrada)
    
    
    Si n <= 0 Entonces
        Escribir "La cantidad de términos debe ser mayor que 0."
    Sino
       
        a <- 0
        b <- 1
        
        Escribir "Serie de Fibonacci hasta el término ", n, ":"
        
       
        Escribir a
        Escribir b
        
        Para i <- 3 Hasta n Con Paso 1 Hacer
            c <- a + b
            Escribir c
            a <- b
            b <- c
        FinPara
    FinSi
FinProceso