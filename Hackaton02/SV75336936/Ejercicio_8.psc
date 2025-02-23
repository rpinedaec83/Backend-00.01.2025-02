Proceso sin_titulo
	Definir nota1, nota2, nota3, promedio Como Real

    Repetir
        Escribir "Ingrese la primera nota (0 - 20):"
        Leer nota1
    Hasta Que nota1 >= 0 Y nota1 <= 20
    
    Repetir
        Escribir "Ingrese la segunda nota (0 - 20):"
        Leer nota2
    Hasta Que nota2 >= 0 Y nota2 <= 20
 
    Repetir
        Escribir "Ingrese la tercera nota (0 - 20):"
        Leer nota3
    Hasta Que nota3 >= 0 Y nota3 <= 20
    
    promedio = (nota1 + nota2 + nota3) / 3
    
    Escribir "El promedio es: ", promedio
    
    Si promedio >= 10.5 Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha reprobado."
    FinSi
FinProceso
