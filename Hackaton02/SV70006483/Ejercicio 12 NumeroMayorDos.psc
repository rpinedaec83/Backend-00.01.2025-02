Proceso NumeroMayorDos
    Definir num1, num2 Como Entero
	
    // Pedir los dos números al usuario
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
	
    // Determinar el mayor
    Si num1 > num2 Entonces
        Escribir "El número mayor es el primer número: ", num1
    Sino
        Si num2 > num1 Entonces
            Escribir "El número mayor es el segundo número: ", num2
        Sino
            Escribir "Ambos números son iguales."
        FinSi
    FinSi
FinProceso
