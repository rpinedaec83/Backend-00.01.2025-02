//Ejercicio12
//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso Numero_Mayor
    Definir num1, num2 Como Real
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Si num1 > num2 Entonces
        Escribir "El número mayor es: ", num1
    Sino
        Si num2 > num1 Entonces
            Escribir "El número mayor es: ", num2
        Sino
            Escribir "Ambos números son iguales."
        FinSi
    FinSi
FinProceso

