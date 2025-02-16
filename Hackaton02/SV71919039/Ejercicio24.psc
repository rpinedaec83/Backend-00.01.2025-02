Proceso Ejercicio24
	Definir n, suma, i Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    suma <- 0
	
    Repetir
        Escribir "Ingrese un número n (debe ser menor o igual a 1000) para calcular la suma de los números pares hasta 1000: "
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
	
    n <- ConvertirANumero(entrada)
	
    Si n > 1000 Entonces
        Escribir "Por favor ingrese un número menor o igual a 1000."
        Repetir 
            Escribir "Ingrese un número n (debe ser menor o igual a 1000) para calcular la suma de los números pares hasta 1000: "
            Leer entrada
            esValido <- Verdadero
            Para i <- 1 Hasta Longitud(entrada) Hacer
                Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                    Si No (i = 1 Y Subcadena(entrada, i, i) = "-") Entonces
                        esValido <- Falso
                    FinSi
                FinSi
            FinPara
            Si esValido Entonces
                n <- ConvertirANumero(entrada)
            Sino
                Escribir "Error: Debe ingresar un número entero válido y sin espacios."
            FinSi
        Hasta Que n <= 1000 
    FinSi
	
    suma <- 0
	
    Para i <- 2 Hasta 1000 Con Paso 2 Hacer
        suma <- suma + i
    FinPara
	
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma
FinProceso