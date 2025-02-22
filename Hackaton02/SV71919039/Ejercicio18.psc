Proceso Ejercicio18
	Definir cantidadCDs, precioUnitario, precioTotal, gananciaVendedor Como Real
    Definir esNumero Como Logico
    
    esNumero = Falso
    
    Mientras esNumero = Falso Hacer
        Escribir "Ingrese la cantidad de CDs a vender:"
        Leer cantidadCDs
        
        Si cantidadCDs >= 1 Entonces
            esNumero = Verdadero
        Sino
            Escribir "Por favor, ingrese un número válido mayor o igual a 1."
        FinSi
    FinMientras
    
    Si cantidadCDs >= 1 Y cantidadCDs <= 9 Entonces
        precioUnitario = 10
    Sino
        Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
            precioUnitario = 8
        Sino
            Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
                precioUnitario = 7
            Sino
                Si cantidadCDs >= 500 Entonces
                    precioUnitario = 6
                FinSi
            FinSi
        FinSi
    FinSi
    
    precioTotal = cantidadCDs * precioUnitario
    
    gananciaVendedor = precioTotal * 0.0825
    
    Escribir "El precio total para el cliente es: $", precioTotal
    Escribir "La ganancia para el vendedor es: $", gananciaVendedor
FinProceso