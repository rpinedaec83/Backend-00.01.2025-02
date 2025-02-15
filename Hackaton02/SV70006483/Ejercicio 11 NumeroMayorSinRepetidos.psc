Proceso NumeroMayorSinRepetidos
    Definir num1, num2, num3 Como Entero
	
    // Repetir hasta que los tres números sean diferentes
    Repetir
        Escribir "Ingrese el primer número: "
        Leer num1
        Escribir "Ingrese el segundo número: "
        Leer num2
        Escribir "Ingrese el tercer número: "
        Leer num3
		
        Si num1 = num2 O num1 = num3 O num2 = num3 Entonces
            Escribir "Error: Los números deben ser diferentes. Intente de nuevo."
        FinSi
    Hasta Que num1 <> num2 Y num1 <> num3 Y num2 <> num3 
	
    // Determinar el mayor
    Si num1 > num2 Y num1 > num3 Entonces
        Escribir "El número mayor es el primer número: ", num1
    Sino
        Si num2 > num1 Y num2 > num3 Entonces
            Escribir "El número mayor es el segundo número: ", num2
        Sino
            Escribir "El número mayor es el tercer número: ", num3
        FinSi
    FinSi
FinProceso
