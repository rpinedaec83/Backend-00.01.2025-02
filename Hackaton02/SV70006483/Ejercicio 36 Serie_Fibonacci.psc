Proceso Serie_Fibonacci
    Definir n, a, b, temp, i Como Entero
	
    // Solicitar el número de términos
    Escribir "Ingrese la cantidad de términos de la serie Fibonacci:"
    Leer n
	
    // Validar que el usuario ingrese un número mayor o igual a 1
    Si n <= 0 Entonces
        Escribir "Debe ingresar un número mayor a 0."
    Sino
        // Inicializar los dos primeros términos de la serie
        a <- 0
        b <- 1
		
        Escribir "Serie de Fibonacci:"
        Escribir a
        Si n > 1 Entonces
            Escribir b
        FinSi
		
        // Calcular el resto de la serie
        Para i <- 3 Hasta n Hacer
            temp <- a + b
            Escribir temp
            a <- b
            b <- temp
        FinPara
    FinSi
FinProceso
