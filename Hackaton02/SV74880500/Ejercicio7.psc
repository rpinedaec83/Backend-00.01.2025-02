Algoritmo tienda_de_helados
    Definir tipo_membresia Como Caracter
    Definir precio_helado, descuento, total_con_descuento Como Real
	
    Escribir "Introduce el tipo de membresía (A, B o C): "
    Leer tipo_membresia
	
    Escribir "Introduce el precio del helado: "
    Leer precio_helado
	tipo_membresia = Mayusculas(tipo_membresia)
	
    Si tipo_membresia = "A" Entonces
        descuento = precio_helado * 0.10  
    Sino
        Si tipo_membresia = "B" Entonces
            descuento = precio_helado * 0.15 
        Sino
            Si tipo_membresia = "C" Entonces
                descuento = precio_helado * 0.20  
			Sino
                descuento = 0  
                Escribir "Tipo de membresía no válido"
            FinSi
        FinSi
    FinSi
	
    total_con_descuento = precio_helado - descuento
	
    Escribir "El descuento es: $", descuento
    Escribir "El total a pagar con descuento es: $", total_con_descuento
	Escribir "Tipo de membresia: $", tipo_membresia
FinAlgoritmo