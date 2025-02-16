Proceso Ejercicio38
	Definir numero, suma, i Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
	
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
	
    suma <- 0
	
    
    Para i <- 1 Hasta numero / 2 Hacer
        Si numero MOD i = 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
	
	
    Si suma = numero Entonces
        Escribir numero, " es un número perfecto."
    Sino
        Escribir numero, " no es un número perfecto."
    FinSi
FinProceso