Proceso Tablas_de_Multiplicar
    Definir i, j Como Entero
	
    // Bucle para recorrer los números del 1 al 9
    Para i <- 1 Hasta 9 Hacer
        Escribir "Tabla del ", i, ":"
        
        // Bucle para multiplicar del 1 al 10
        Para j <- 1 Hasta 10 Hacer
            Escribir i, " x ", j, " = ", i * j
        FinPara
        
        Escribir "" // Espacio entre tablas
    FinPara
FinProceso
