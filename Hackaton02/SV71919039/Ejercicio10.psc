Proceso ejercicio10
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
	
    Si numero MOD 2 = 0 Entonces
        Escribir "El número ", numero, " es PAR."
    Sino
        Escribir "El número ", numero, " es IMPAR."
    FinSi
FinProceso