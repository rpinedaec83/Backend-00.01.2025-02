Proceso Ejercicio23
	Definir n, suma, i Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    suma <- 0
	
    Repetir
        Escribir "Ingrese un número n para calcular la suma de los números impares menores o iguales a n: "
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
	
    Si n <= 0 Entonces
        Escribir "Por favor ingrese un número positivo."
        Repetir 
            Escribir "Ingrese un número n para calcular la suma de los números impares menores o iguales a n: "
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
        Hasta Que n > 0 
    FinSi
	
    suma <- 0
	
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Si i Mod 2 <> 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
	
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso