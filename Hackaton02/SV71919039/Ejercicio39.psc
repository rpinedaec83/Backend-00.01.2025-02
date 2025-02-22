Proceso Ejercicio39
	Definir n, i, signo, resultado, termino Como Real
    Definir entrada Como Cadena
    Definir esValido Como Logico
    
    Repetir
        Escribir "Ingrese el número de términos para aproximar Pi:"
        Leer entrada
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                esValido <- Falso
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero válido."
        FinSi
    Hasta Que esValido
    n <- ConvertirANumero(entrada)
    
    resultado <- 0
    signo <- 1  
	
    Para i <- 0 Hasta n - 1 Hacer
        termino <- 4 / (2 * i + 1)  
        resultado <- resultado + signo * termino  
        signo <- signo * (-1)  
    FinPara
	
    Escribir "La aproximación de Pi con ", n, " términos es: ", resultado
FinProceso