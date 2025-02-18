Proceso AproximacionPI_Nilakantha
    Definir iteraciones Como Entero
    Definir aproxPI, termino Como Real
    Definir signo, i Como Entero
	
    // Solicitar el número de iteraciones
    Escribir "Ingrese el número de iteraciones:"
    Leer iteraciones
	
    aproxPI <- 3  // Valor inicial de la serie
    signo <- 1    // Alterna entre positivo y negativo
	
    Para i <- 2 Hasta 2 * iteraciones Con Paso 2 Hacer
        termino <- 4 / (i * (i + 1) * (i + 2))  // Fórmula de la serie
        aproxPI <- aproxPI + (signo * termino) // Sumar o restar el término
        signo <- signo * (-1)  // Cambiar el signo para la siguiente iteración
    FinPara
	
    // Mostrar el resultado
    Escribir "Aproximación de PI con ", iteraciones, " iteraciones: ", aproxPI
FinProceso
