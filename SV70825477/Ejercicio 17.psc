Proceso Ejercicio17
	// 	17Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	
	escribir "Digite horas"
	leer hora
	escribir "Digite minutos"
	leer minuto
	escribir "Digite segundos"
	leer segundos
	
	segundos=segundos+1
	si segundos=60 Entonces
		segundos=0
		minuto=minuto+1
	FinSi
	si minuto=60 Entonces
		minuto=0
		hora=hora+1
	FinSi
	si hora=24 Entonces
		hora=0
	FinSi
	escribir "La hora dentro de un segundo es: ",hora,"h : ",minuto,"m : ",segundos, "s"
	
	
	
FinProceso
