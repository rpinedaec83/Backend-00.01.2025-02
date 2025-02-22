//Ejercicio16
//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Dia_semana
	Definir num Como Entero
	
    Escribir "Ingrese un número del 1 al 7:"
    Leer num
	
    Segun num Hacer
        1:
            Escribir "El día es Lunes"
        2:
            Escribir "El día es Martes"
        3:
            Escribir "El día es Miércoles"
        4:
            Escribir "El día es Jueves"
        5:
            Escribir "El día es Viernes"
        6:
            Escribir "El día es Sábado"
        7:
            Escribir "El día es Domingo"
        De Otro Modo:
            Escribir "Número inválido. Debe ser entre 1 y 7"
    FinSegun
	
FinProceso
