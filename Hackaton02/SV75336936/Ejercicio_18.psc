Proceso Ejercicio_17
	//PU = Precio unitario
	Definir cantidad, pu, tventa, ganancia Como Real
    Definir pganancia Como Real
    
    pganancia <- 0.0825
    
    Escribir "Ingrese la cantidad de CDs a comprar:"
    Leer cantidad
    
    Si cantidad >= 1 Y cantidad <= 9 Entonces
        pu<- 10
    Sino
        Si cantidad >= 10 Y cantidad <= 99 Entonces
            pu <- 8
        Sino
            Si cantidad >= 100 Y cantidad <= 499 Entonces
                pu <- 7
            Sino
                Si cantidad >= 500 Entonces
                    pu <- 6
                Sino
                    Escribir "Cantidad inválida."
FinSi
FinSi
FinSi
FinSi

tventa = cantidad * pu
ganancia = tventa * pganancia

Escribir "El precio unitario es: $", pu
Escribir "El total de la venta es: $", tventa
Escribir "La ganancia del vendedor es: $", ganancia
FinProceso
