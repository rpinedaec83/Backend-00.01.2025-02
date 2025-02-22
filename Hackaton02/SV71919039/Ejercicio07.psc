Proceso ejercicio07
    Definir tipoMembresia Como Caracter
    Definir entrada Como Cadena
    Definir esValido Como Logico
    Definir precioCompra, descuento, totalPagar Como Real
    esValido <- Falso
    
    Repetir
        Escribir "Ingrese el monto total de su compra:"
        Leer entrada
        esValido <- Verdadero
        
        Para i <- 1 Hasta Longitud(entrada) Hacer
            Si No (Subcadena(entrada, i, i) >= "0" Y Subcadena(entrada, i, i) <= "9") Entonces
                Si No (Subcadena(entrada, i, i) = "." Y i > 1) Entonces
                    esValido <- Falso
                FinSi
            FinSi
        FinPara
        
        Si No esValido Entonces
            Escribir "Error: Debe ingresar un número válido para el precio de la compra, no debe contener espacios."
        FinSi
    Hasta Que esValido
	
    precioCompra <- ConvertirANumero(entrada)
	
   
    Repetir
        Escribir "Ingrese su tipo de membresía (A, B o C):"
        Leer tipoMembresia
        tipoMembresia <- Mayusculas(tipoMembresia) 
        esValido <- tipoMembresia = "A" O tipoMembresia = "B" O tipoMembresia = "C"
        
        Si No esValido Entonces
            Escribir "Error: Tipo de membresía inválido. Debe ser A, B o C."
        FinSi
    Hasta Que esValido
	
    
    Si tipoMembresia = "A" Entonces
        descuento <- precioCompra * 0.10
    FinSi
    
    Si tipoMembresia = "B" Entonces
        descuento <- precioCompra * 0.15
    FinSi
    
    Si tipoMembresia = "C" Entonces
        descuento <- precioCompra * 0.20
    FinSi
	
    totalPagar <- precioCompra - descuento
	
    Escribir "Monto de compra: $", precioCompra
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinProceso