//16. Hacer un algoritmo en Pseint que lea un número y según ese número,
//indique el día que corresponde.

Proceso Ejercicio16
	Definir numero Como Entero
	Escribir "Ingrese un n?mero del 1 al 7:"
    Leer numero
    
    Segun numero Hacer
        1: Escribir "Lunes"
        2: Escribir "Martes"
        3: Escribir "Mi?rcoles"
        4: Escribir "Jueves"
        5: Escribir "Viernes"
        6: Escribir "S?bado"
        7: Escribir "Domingo"
        De Otro Modo:
            Escribir "N?mero inv?lido, ingrese un n?mero entre 1 y 7."
    FinSegun
FinProceso
