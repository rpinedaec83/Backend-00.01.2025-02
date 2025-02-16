Proceso Ejercicio17
	Definir hora, minutos, segundos, nuevaHora, nuevosMinutos, nuevosSegundos Como Entero
    
    Escribir "Ingrese el númeoro de horas (formato 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minutos
    Escribir "Ingrese los segundos:"
    Leer segundos
	
    nuevosSegundos = segundos + 1
    
    Si nuevosSegundos >= 60 Entonces
        nuevosSegundos = 0
        nuevosMinutos = minutos + 1
    Sino
        nuevosMinutos = minutos
    FinSi
    
    Si nuevosMinutos >= 60 Entonces
        nuevosMinutos = 0
        nuevaHora = hora + 1
    Sino
        nuevaHora = hora
    FinSi
	
    Si nuevaHora >= 24 Entonces
        nuevaHora = 0
    FinSi
    
    Escribir "La hora dentro de un segundo será: ", nuevaHora, ":", nuevosMinutos, ":", nuevosSegundos
FinProceso