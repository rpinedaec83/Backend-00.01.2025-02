Proceso Ejercicio12
	Definir num1, num2 Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
	
    Repetir
        Escribir "Ingrese el primer número entero:"
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
    num1 <- ConvertirANumero(entrada)
	
    
    Repetir
        Escribir "Ingrese el segundo número entero:"
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
    num2 <- ConvertirANumero(entrada)
	
  
    Si num1 > num2 Entonces
        Escribir "El número mayor es: ", num1
    Sino
        Si num2 > num1 Entonces
            Escribir "El número mayor es: ", num2
        Sino
            Escribir "Ambos números son iguales."
        FinSi
    FinSi
FinProceso