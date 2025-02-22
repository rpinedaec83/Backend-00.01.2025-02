Proceso Ejercicio_18
	
	Escribir "Digite la cantidad de CDs vendidos"
	Leer cds_vendidos
	
	total = 0
	
	Si cds_vendidos >= 1 y cds_vendidos <= 9 Entonces
		total = cds_vendidos * 10
	SiNo
		Si cds_vendidos >= 10 y cds_vendidos <= 99 Entonces
			total = cds_vendidos * 8
		SiNo
			Si cds_vendidos >= 100 y cds_vendidos <= 499 Entonces
				total = cds_vendidos * 7
			SiNo
				Si cds_vendidos >= 500 Entonces
					total = cds_vendidos * 6
				SiNo
					Escribir "La cantida digitada no es la correcta. Verificar por favor"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
	ganancia = total * 0.0825
	
	Escribir "Precio total cliente $: ",total
	Escribir "Ganancia vendedor $: ",ganancia
	
FinProceso
