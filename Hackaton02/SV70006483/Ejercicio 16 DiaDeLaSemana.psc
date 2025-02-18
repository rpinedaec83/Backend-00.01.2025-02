Proceso DiaDeLaSemana
    Definir num Como Entero
	
    // Pedir número al usuario
    Repetir
        Escribir "Ingrese un número del 1 al 7: "
        Leer num
    Hasta Que num >= 1 Y num <= 7
	
    // Determinar el día de la semana
    Segun num Hacer
        1: Escribir "El día es Lunes."
        2: Escribir "El día es Martes."
        3: Escribir "El día es Miércoles."
        4: Escribir "El día es Jueves."
        5: Escribir "El día es Viernes."
        6: Escribir "El día es Sábado."
        7: Escribir "El día es Domingo."
    FinSegun
FinProceso
