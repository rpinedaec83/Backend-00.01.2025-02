Algoritmo hora_siguiente
    Definir hora, minuto, segundo, nuevo_segundo, nuevo_minuto, nueva_hora Como Entero
	
    Escribir "Introduce la hora en formato 24 horas (0-23): "
    Leer hora
    Escribir "Introduce los minutos (0-59): "
    Leer minuto
    Escribir "Introduce los segundos (0-59): "
    Leer segundo
	
    nuevo_segundo = segundo + 1
	
    Si nuevo_segundo = 60 Entonces
        nuevo_segundo = 0
        nuevo_minuto = minuto + 1
    Sino
        nuevo_minuto = minuto
    FinSi
	
    Si nuevo_minuto = 60 Entonces
        nuevo_minuto = 0
        nueva_hora = hora + 1
    Sino
        nueva_hora = hora
    FinSi
	
    Si nueva_hora = 24 Entonces
        nueva_hora = 0
    FinSi
	
    Escribir "La hora dentro de un segundo es: ", nueva_hora, ":", nuevo_minuto, ":", nuevo_segundo
FinAlgoritmo