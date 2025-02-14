Proceso ejercicio09
    Definir sueldo, aumento, nuevoSueldo Como Real
    Definir entrada Como Cadena
    Definir esValido Como Logico
    esValido <- Falso
	
    Repetir
        Escribir "Ingrese el sueldo actual del trabajador:"
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
            sueldo <- ConvertirANumero(entrada)
            Si sueldo < 0 Entonces
                esValido <- Falso
                Escribir "Error: El sueldo no puede ser negativo."
            FinSi
        SiNo
            Escribir "Error: Debe ingresar un número válido y sin espacios."
        FinSi
    Hasta Que esValido
	
    
    Si sueldo > 2000 Entonces
        aumento <- sueldo * 0.05
    Sino
        aumento <- sueldo * 0.10
    FinSi
	
    nuevoSueldo <- sueldo + aumento

    Escribir "Sueldo actual: $", sueldo
    Escribir "Aumento aplicado: $", aumento
    Escribir "Nuevo sueldo: $", nuevoSueldo
FinProceso