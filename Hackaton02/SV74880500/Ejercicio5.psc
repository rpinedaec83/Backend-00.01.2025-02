Algoritmo tienda_de_zapatos
    Definir cantidad_zapatos, total_compra, descuento Como Real
    precio_unitario = 80  
	
    Escribir "Introduce la cantidad de zapatos que compras: "
    Leer cantidad_zapatos
	
    total_compra = cantidad_zapatos * precio_unitario
	
    Si cantidad_zapatos > 30 Entonces
        descuento = total_compra * 0.40  
    Sino
        Si cantidad_zapatos > 20 Entonces
            descuento = total_compra * 0.20  
        Sino
            Si cantidad_zapatos > 10 Entonces
                descuento = total_compra * 0.10 
            Sino
                descuento = 0  
            FinSi
        FinSi
    FinSi
	
    total_compra = total_compra - descuento
	
    Escribir "El total de la compra es: $", total_compra
    Escribir "El descuento aplicado es: $", descuento
FinAlgoritmo