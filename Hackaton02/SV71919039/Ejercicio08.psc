Proceso ejercicio08
    Definir nota1, nota2, nota3, promedio Como Real
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esValido <- Falso
	
    Repetir
        Escribir "Ingrese la primera nota (0-20):"
        Leer entrada
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                Si No (Subcadena(entrada, i, i) = "." Y i > 1) Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
		
        Si esValido Entonces
            nota1 <- ConvertirANumero(entrada)
            Si nota1 < 0 O nota1 > 20 Entonces
                esValido <- Falso
                Escribir "Error: La nota debe estar entre 0 y 20."
            FinSi
        SiNo
            Escribir "Error: Ingrese un número válido y sin espacios."
        FinSi
    Hasta Que esValido
	
	
    Repetir
        Escribir "Ingrese la segunda nota (0-20):"
        Leer entrada
        esValido <- Verdadero
		
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                Si No (Subcadena(entrada, i, i) = "." Y i > 1) Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
		
        Si esValido Entonces
            nota2 <- ConvertirANumero(entrada)
            Si nota2 < 0 O nota2 > 20 Entonces
                esValido <- Falso
                Escribir "Error: La nota debe estar entre 0 y 20."
            FinSi
        SiNo
            Escribir "Error: Ingrese un número válido."
        FinSi
    Hasta Que esValido
	
    
    Repetir
        Escribir "Ingrese la tercera nota (0-20):"
        Leer entrada
        esValido <- Verdadero
		
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                Si No (Subcadena(entrada, i, i) = "." Y i > 1) Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
		
        Si esValido Entonces
            nota3 <- ConvertirANumero(entrada)
            Si nota3 < 0 O nota3 > 20 Entonces
                esValido <- Falso
                Escribir "Error: La nota debe estar entre 0 y 20."
            FinSi
        SiNo
            Escribir "Error: Ingrese un número válido."
        FinSi
    Hasta Que esValido
	
    
    promedio <- (nota1 + nota2 + nota3) / 3
	
    
    Escribir "El promedio del estudiante es: ", promedio
	
    Si promedio >= 10 Entonces
        Escribir "¡Felicidades! El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha reprobado."
    FinSi
FinProceso