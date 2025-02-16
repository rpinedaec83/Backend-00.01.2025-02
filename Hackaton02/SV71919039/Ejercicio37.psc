Proceso Ejercicio37
	Definir a, b, residuo Como Entero
    Definir entrada_a, entrada_b Como Cadena
    Definir esValido Como Logico
	
    Repetir
        Escribir "Ingrese el primer número entero:"
        Leer entrada_a
        esValido <- Verdadero
		
        Para i <- 1 Hasta Longitud(entrada_a) Hacer
            Si No (Subcadena(entrada_a, i, i) >= "0" Y Subcadena(entrada_a, i, i) <= "9") Entonces
                Si No (i = 1 Y Subcadena(entrada_a, i, i) = "-") Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
		
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero válido y sin espacios."
        FinSi
    Hasta Que esValido
    a <- ConvertirANumero(entrada_a)
	
    
    Repetir
        Escribir "Ingrese el segundo número entero:"
        Leer entrada_b
        esValido <- Verdadero
		
        Para i <- 1 Hasta Longitud(entrada_b) Hacer
            Si No (Subcadena(entrada_b, i, i) >= "0" Y Subcadena(entrada_b, i, i) <= "9") Entonces
                Si No (i = 1 Y Subcadena(entrada_b, i, i) = "-") Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
		
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero válido y sin espacios."
        FinSi
    Hasta Que esValido
    b <- ConvertirANumero(entrada_b)
	
    
    Mientras b <> 0 Hacer
        residuo <- a MOD b
        a <- b
        b <- residuo
    FinMientras
	
    Escribir "El MCD es: ", a
FinProceso