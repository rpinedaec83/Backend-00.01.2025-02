Proceso ejercicio04
    Definir num1, num2, num3 Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    
    
    esValido <- Falso
    Repetir
        Escribir "Ingrese el primer número entero:"
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
    num1 <- ConvertirANumero(entrada)
	
    
    esValido <- Falso
    Repetir
        Escribir "Ingrese el segundo número entero:"
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
    num2 <- ConvertirANumero(entrada)
	
    
    esValido <- Falso
    Repetir
        Escribir "Ingrese el tercer número entero:"
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
    num3 <- ConvertirANumero(entrada)
	
    
    Si num1 > num2 Entonces
        aux <- num1
        num1 <- num2
        num2 <- aux
    FinSi
	
    Si num1 > num3 Entonces
        aux <- num1
        num1 <- num3
        num3 <- aux
    FinSi
	
    Si num2 > num3 Entonces
        aux <- num2
        num2 <- num3
        num3 <- aux
    FinSi
	
    
    Escribir "Los números ordenados de menor a mayor son:", num1, ",", num2, ",", num3
FinProceso