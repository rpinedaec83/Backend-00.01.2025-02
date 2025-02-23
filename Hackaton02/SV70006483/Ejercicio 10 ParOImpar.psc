Proceso ParOImpar
    Definir numero Como Entero
	
    // Pedir un número al usuario
    Escribir "Ingrese un número: "
    Leer numero
	
    // Determinar si es par o impar usando MOD
    Si numero MOD 2 = 0 Entonces
        Escribir "El número ", numero, " es PAR."
    Sino
        Escribir "El número ", numero, " es IMPAR."
    FinSi
FinProceso
