Proceso Ejercicio26
	Definir num1, num2, cociente, resto Como Entero
    Definir entrada1, entrada2 Como Cadena
    Definir esValido Como Logico
	
    Repetir
        Escribir "Ingrese el primer número (dividendo): "
        Leer entrada1
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada1) Hacer
            Si No (Subcadena(entrada1, i, i) >= "0" Y Subcadena(entrada1, i, i) <= "9") Entonces
                Si No (i = 1 Y Subcadena(entrada1, i, i) = "-") Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero válido y sin espacios."
        FinSi
    Hasta Que esValido
	
    num1 <- ConvertirANumero(entrada1)
	
    Repetir
        Escribir "Ingrese el segundo número (divisor): "
        Leer entrada2
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada2) Hacer
            Si No (Subcadena(entrada2, i, i) >= "0" Y Subcadena(entrada2, i, i) <= "9") Entonces
                Si No (i = 1 Y Subcadena(entrada2, i, i) = "-") Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero válido y sin espacios."
        FinSi
    Hasta Que esValido
	
    num2 <- ConvertirANumero(entrada2)
	
   
    Si num2 = 0 Entonces
        Escribir "El divisor no puede ser 0."
    Sino
        cociente <- 0
        resto <- num1
		
        
        Mientras resto >= num2 Hacer
            resto <- resto - num2
            cociente <- cociente + 1
        FinMientras
		
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", resto
    FinSi
FinProceso