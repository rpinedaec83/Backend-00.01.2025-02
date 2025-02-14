Proceso ejercicio06
    Definir horasTrabajadas Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    Definir sueldo, pagoNormal, pagoExtra Como Real
    Definir tarifaNormal, tarifaExtra Como Real
    tarifaNormal <- 20 
    tarifaExtra <- 25 
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese la cantidad de horas trabajadas en la semana:"
        Leer entrada
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                esValido <- Falso
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número entero positivo y sin espacios."
        FinSi
    Hasta Que esValido
	
    horasTrabajadas <- ConvertirANumero(entrada)
	
    Si horasTrabajadas <= 40 Entonces
        sueldo <- horasTrabajadas * tarifaNormal
    Sino
        pagoNormal <- 40 * tarifaNormal
        pagoExtra <- (horasTrabajadas - 40) * tarifaExtra
        sueldo <- pagoNormal + pagoExtra
    FinSi
	
    Escribir "Sueldo semanal: $", sueldo
FinProceso