Proceso ejercicio05
    Definir cantidadZapatos Como Entero
    Definir entrada Como Cadena
    Definir esValido Como Logico
    Definir precioUnitario, totalCompra, descuento, totalPagar Como Real
    precioUnitario <- 80
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese la cantidad de zapatos a comprar:"
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
	
    cantidadZapatos <- ConvertirANumero(entrada)
	
    totalCompra <- cantidadZapatos * precioUnitario
	
    Si cantidadZapatos > 30 Entonces
        descuento <- totalCompra * 0.40
    Sino 
        Si cantidadZapatos > 20 Entonces
            descuento <- totalCompra * 0.20
        Sino 
            Si cantidadZapatos > 10 Entonces
                descuento <- totalCompra * 0.10
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
	
    totalPagar <- totalCompra - descuento

    Escribir "Total sin descuento: $", totalCompra
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinProceso