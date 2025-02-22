Proceso Ejercicio_6
	Definir htrabajadas, sueldo Como Real
    Definir hnormales, hextras Como Entero
    Definir pago, pagoextra Como Real
    pago <- 20
    pagoextra <- 25
    
    Escribir "Ingrese el número de horas trabajadas en la semana:"
    Leer htrabajadas
    
    Si htrabajadas <= 40 Entonces
        sueldo <- htrabajadas * pago
    Sino
        hnormales <- 40
        hextras <- htrabajadas - 40
        sueldo <- (hnormales * pago) + (hextras * pextra)
    FinSi
    
    Escribir "El sueldo semanal es: $", sueldo
FinProceso
