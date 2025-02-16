//5. Hacer un algoritmo en Pseint para una tienda de zapatos
//que tiene una promoción de descuento para vender al mayor,
//esta dependerá del número de zapatos que se compren.
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
//si el número de zapatos es mayor de veinte pero menor de treinta,
//se le otorga un 20% de descuento; y si son más treinta zapatos
//se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Algoritmo Ejercicio5
	Definir cantidad, total, descuento, precioFinal Como Real
    Definir precioPorZapato Como Real
    precioPorZapato = 80
    
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidad
    
    total = cantidad * precioPorZapato
    
    Si cantidad > 30 Entonces
        descuento = total * 0.40
    Sino Si cantidad > 20 Entonces
			descuento = total * 0.20
		Sino Si cantidad > 10 Entonces
				descuento = total * 0.10
			Sino
				descuento = 0
			Fin Si
		Fin Si
	Fin Si
	
	precioFinal = total - descuento
	Escribir "Total: ", precioFinal
FinAlgoritmo
