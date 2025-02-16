Proceso Ejercicio27
	Definir numero, suma, cantidad Como Real
    Definir entrada Como Cadena
    suma <- 0
    cantidad <- 0
	
    Repetir
        Escribir "Ingrese un número positivo (o un número negativo para terminar): "
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
            Escribir "Error: Debe ingresar un número válido."
        FinSi
        
    Hasta Que esValido
	
    numero <- ConvertirANumero(entrada)
	
    Si numero < 0 Entonces
        Escribir "Número negativo ingresado. Terminando el programa."
    Sino
        
        suma <- suma + numero
        cantidad <- cantidad + 1
    FinSi
	
   
    Si cantidad > 0 Entonces
        media <- suma / cantidad
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos, no se puede calcular la media."
    FinSi
FinProceso