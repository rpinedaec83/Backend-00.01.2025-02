Proceso AproximacionPI
    Definir iteraciones Como Entero
    Definir aproxPI, termino Como Real
    
    // Solicitar el número de iteraciones
    Escribir "Ingrese el número de iteraciones:"
    Leer iteraciones
	
    aproxPI <- 0
    signo <- 1  // Alterna entre positivo y negativo
	
    Para i <- 0 Hasta iteraciones - 1 Hacer
        termino <- 4 / (2 * i + 1)   // Fórmula de la serie
        aproxPI <- aproxPI + (signo * termino) // Sumar o restar el término
        signo <- signo * (-1)          // Cambiar el signo
    FinPara
	
    // Mostrar el resultado
    Escribir "Aproximación de PI con ", iteraciones, " iteraciones: ", aproxPI
FinProceso
