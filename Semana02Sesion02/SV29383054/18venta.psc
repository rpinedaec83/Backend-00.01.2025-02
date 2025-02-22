Algoritmo venta
	Imprimir "Cuantos CDs desea comprar: "
	Leer cantidad
	
	pt = 0 //precio total
	pCliente = 0 //precio para el cliente
	ct = 0 //costo total
	gv = 0 //ganancia vendedor
	
	si cantidad <= 9 Entonces
		p = 10
	sino
		si cantidad >= 10 y cantidad <= 99 Entonces
			p = 8
		SiNo
			si cantidad >= 100 y cantidad <= 499 Entonces
				p = 7
			SiNo
				p = 6
			FinSi
		FinSi
	FinSi
	
	//calculos
	pt = (cantidad * p) + (0.0825 * cantidad)
	pCliente = pt
	ct = cantidad * p
	gv = 0.0825 * cantidad
	
	Imprimir "Precio para el cliente ",pCliente
	Imprimir "Costo total ",ct
	Imprimir "Ganancia para el vendedor ",gv
	
FinAlgoritmo
