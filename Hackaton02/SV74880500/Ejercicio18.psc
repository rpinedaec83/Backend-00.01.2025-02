Algoritmo venta_CDs
    Definir cantidad Como Entero
    Definir precio_unitario, precio_total, ganancia Como Real
	
    Escribir "Introduce la cantidad de CDs a vender: "
    Leer cantidad
	
    Si cantidad >= 1 Y cantidad <= 9 Entonces
        precio_unitario = 10
    Sino
        Si cantidad >= 10 Y cantidad <= 99 Entonces
            precio_unitario = 8
        Sino
            Si cantidad >= 100 Y cantidad <= 499 Entonces
                precio_unitario = 7
            Sino
                Si cantidad >= 500 Entonces
                    precio_unitario = 6
                FinSi
            FinSi
        FinSi
    FinSi
	
    precio_total = cantidad * precio_unitario
    ganancia = precio_total * 0.0825
	
    Escribir "El precio total para el cliente es: $", precio_total
    Escribir "La ganancia para el vendedor es: $", ganancia
FinAlgoritmo