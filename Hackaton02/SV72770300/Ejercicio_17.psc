Proceso Ejercicio_17
	
	Escribir "Ingres la hora"
	Leer hour
	Escribir "Digite los minutos"
	Leer minute
	Escribir "Digite los segundos"
	Leer second
	
	Si hour < 0 o hour >= 24 Entonces
		Escribir "La hora digitada es incorrecta, verificar por favor"
	Fin Si
	
	Si minute < 0 o minute >=60 Entonces
		Escribir "Los minutos digitados son incorrectos, verificar por favor"
	Fin Si
	
	Si second < 0 o second >=60 Entonces
		Escribir "Los segundos digitados son incorrectos, verificar por favor"
	Fin Si
	
	second = second + 1
	
	Si second == 60 Entonces
		second = 0
		minute = minute + 1	
	Fin Si
	
	Si minute == 60 Entonces
		minute = 0
		hour = hour + 1	
	Fin Si
	
	Si hour == 24 Entonces
		hour = 0
	Fin Si
	
	Escribir "Hora dentro de un segundo: ", hour , ":", minute , ":", second
	
FinProceso