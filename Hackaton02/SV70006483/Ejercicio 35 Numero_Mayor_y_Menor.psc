Proceso Numero_Mayor_y_Menor
    Definir num, mayor, menor Como Entero
	
    // Solicitar el primer número para inicializar mayor y menor
    Escribir "Ingrese el número 1:"
    Leer num
    mayor <- num
    menor <- num
	
    // Ciclo para ingresar los siguientes 19 números
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
		
        // Verificar si es el mayor
        Si num > mayor Entonces
            mayor <- num
        FinSi
		
        // Verificar si es el menor
        Si num < menor Entonces
            menor <- num
        FinSi
    FinPara
	
    // Mostrar los resultados
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso
