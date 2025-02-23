Proceso sin_titulo
	Definir id, dias, salariodiario, ptotal Como Real
    
    Escribir "Ingrese el número identificador del empleado:"
    Escribir "1 = Cajero 56$xdía"
    Escribir "2 = Servidor 64$xdía"
    Escribir "3 = Preparador de mezclas 80$xdía"
    Escribir "4 = Mantenimiento 48$xdía"
    Leer id
    Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
    Leer dias
    
    Si dias < 1 O dias > 6 Entonces
        Escribir "Error: Los días trabajados deben estar entre 1 y 6."
FinSi

Segun id Hacer
	1:
		salariodiario = 56
	2:
		salariodiario = 64
	3:
		salariodiario = 80
	4:
		salariodiario = 48
	De Otro Modo:
		Escribir "Error: Identificador de empleado no válido."
FinSegun

ptotal = salariodiario * dias

Escribir "El pago total para el empleado es: $", ptotal
FinProceso
