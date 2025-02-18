Algoritmo Ejercicio19
    Definir id, dias, salario Como Real
    Escribir "Ingrese el identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento): "
    Leer id
    Escribir "Ingrese la cantidad de días trabajados (máximo 6): "
    Leer dias

    Segun id Hacer
        1: salario <- dias * 56
        2: salario <- dias * 64
        3: salario <- dias * 80
        4: salario <- dias * 48
        De Otro Modo:
            Escribir "Identificador inválido."
            FinAlgoritmo
    FinSegun

    Escribir "El salario total es: $", salario
FinAlgoritmo
