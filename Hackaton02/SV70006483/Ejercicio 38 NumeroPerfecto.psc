Proceso NumeroPerfecto
    Definir num, suma, i Como Entero
	
    // Solicitar número al usuario
    Escribir "Ingrese un número:"
    Leer num
	
    // Validar que sea positivo
    Si num <= 0 Entonces
        Escribir "Ingrese un número positivo."
    Sino
        suma <- 0
		
        // Calcular la suma de los divisores propios
        Para i <- 1 Hasta num - 1 Hacer
            Si num MOD i = 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
		
        // Verificar si es un número perfecto
        Si suma = num Entonces
            Escribir num, " es un número perfecto."
        Sino
            Escribir num, " NO es un número perfecto."
        FinSi
    FinSi
FinProceso
