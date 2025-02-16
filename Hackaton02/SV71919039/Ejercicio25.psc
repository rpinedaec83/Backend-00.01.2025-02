Proceso Ejercicio25
	Definir num, resultado, i Como Entero
    Definir entrada Como Cadena
    resultado <- 1
    Definir esValido Como Logico
	
    Repetir
        Escribir "Ingrese un número para calcular su factorial: "
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
	
    num <- ConvertirANumero(entrada)
	
    Si num < 0 Entonces
        Escribir "El factorial no está definido para números negativos."
    Sino
        i <- 1
        Mientras i <= num Hacer
            resultado <- resultado * i
            i <- i + 1
        FinMientras
		
        Escribir "El factorial de ", num, " es: ", resultado
    FinSi
FinProceso