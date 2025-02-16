Proceso Ejercicio35
	Definir numero, mayor, menor, i Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    
    
    mayor <- -999999999
    menor <- 999999999
    
    Para i <- 1 Hasta 20 Con Paso 1 Hacer
        esValido <- Falso
        
        
        Repetir
            Escribir "Ingresa el número ", i, ": "
            Leer entrada
            
           
            esValido <- Verdadero
            Para j <- 1 Hasta Longitud(entrada) Hacer
                Si No (Subcadena(entrada, j, j) >= "0" Y Subcadena(entrada, j, j) <= "9") Entonces
                    Si No (j = 1 Y Subcadena(entrada, j, j) = "-") Entonces
                        esValido <- Falso
                    FinSi
                FinSi
            FinPara
            
            Si No esValido Entonces
                Escribir "Error: Debes ingresar un número válido y sin espacios."
            FinSi
        Hasta Que esValido
        
        numero <- ConvertirANumero(entrada)
        
       
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
        
        
        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara
    
   
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso