Proceso HorasSem
	Definir ht,he,ss Como Real
	Escribir"Ingrese las horas trabajadas"
	leer ht
	si ht>40 Entonces
		he=ht-40
		ss=he*25*20
	SiNo
		ss=ht*20
	FinSi
	Imprimir " su salario semanal es:",' ', SS,' ', 'Dólares'
	
FinProceso
