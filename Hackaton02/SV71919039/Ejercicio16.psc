Proceso Ejercicio16
	Definir dia Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese un número entre 1 y 7 para conocer el día de la semana:"
        Leer entrada
        
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                esValido <- Falso
            FinSi
        FinPara
        
        Si esValido Entonces
            dia <- ConvertirANumero(entrada)
            Si dia >= 1 Y dia <= 7 Entonces
                esValido <- Verdadero
            Sino
                Escribir "Error: El número debe estar entre 1 y 7."
                esValido <- Falso
            FinSi
        Sino
            Escribir "Error: Debe ingresar un número válido."
        FinSi
    Hasta Que esValido
    
    Segun dia Hacer
        Caso 1:
            Escribir "Lunes"
        Caso 2:
            Escribir "Martes"
        Caso 3:
            Escribir "Miércoles"
        Caso 4:
            Escribir "Jueves"
        Caso 5:
            Escribir "Viernes"
        Caso 6:
            Escribir "Sábado"
        Caso 7:
            Escribir "Domingo"
    FinSegun
FinProceso