Proceso Ejercicio_5
	Definir precio, cantidadZap Como Entero
	Definir totalPagar, totalOriginal, dsct Como Real;
	
	precio=80
	Escribir "Ingrese cantdad de zapatos comprados"
	Leer cantidadZap
	
	totalOriginal= cantidadZap*precio
	totalPagar= cantidadZap*precio
	
	si cantidadZap>= 10 y cantidadZap <70 Entonces
		dsct = totalOriginal *0.1
		totalPagar = totalOriginal - dsct
	SiNo
		si cantidadZap>= 20 y cantidadZap <30 Entonces
			dsct= totalOriginal*0.2
			totalPagar=totalOriginal-dsct
		SiNo
			si cantidadZap >=10 Entonces
				dsct=totalOriginal*0.4
				totalOriginal=totalPagar-dsct
			FinSi
	
		FinSi
	FinSi
	
	Escribir "Cantidad Comprada: ", cantidadZap," total original: ", totalOriginal;
	Escribir "Descuento: ", dsct, " Total a Pagar: ", totalPagar;
FinProceso
