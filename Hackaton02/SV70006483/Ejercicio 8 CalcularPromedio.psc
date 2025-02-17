Proceso CalcularPromedio
    Definir nota1, nota2, nota3, promedio Como Real
	
    // Pedir las tres notas al usuario y validar que estén entre 0 y 20
    Escribir "Ingrese la primera nota (0-20): "
    Leer nota1
    Mientras nota1 < 0 O nota1 > 20 Hacer
        Escribir "Nota inválida. Ingrese un valor entre 0 y 20: "
        Leer nota1
    FinMientras
	
    Escribir "Ingrese la segunda nota (0-20): "
    Leer nota2
    Mientras nota2 < 0 O nota2 > 20 Hacer
        Escribir "Nota inválida. Ingrese un valor entre 0 y 20: "
        Leer nota2
    FinMientras
	
    Escribir "Ingrese la tercera nota (0-20): "
    Leer nota3
    Mientras nota3 < 0 O nota3 > 20 Hacer
        Escribir "Nota inválida. Ingrese un valor entre 0 y 20: "
        Leer nota3
    FinMientras
	
    // Calcular el promedio
    promedio <- (nota1 + nota2 + nota3) / 3
	
    // Redondear correctamente a 2 decimales, el trunc simplemente corta los decimales sin redondear
    promedio <- trunc((promedio + 0.005) * 100) / 100
	
    // Mostrar el promedio redondeado
    Escribir "El promedio es: ", promedio
	
    // Determinar si aprobó o no
    Si promedio >= 10.5 Entonces
        Escribir "¡El estudiante aprobó!"
    Sino
        Escribir "El estudiante no aprobó."
    FinSi
FinProceso
