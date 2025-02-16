//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso Ejercicio11
	Definir num1, num2, num3, mayor Como Real
	Escribir "Ingrese el primer n?mero:"
    Leer num1
    Escribir "Ingrese el segundo n?mero:"
    Leer num2
    Escribir "Ingrese el tercer n?mero:"
    Leer num3
    
    mayor = num1
    
    Si num2 > mayor Entonces
        mayor = num2
    Fin Si
    
    Si num3 > mayor Entonces
        mayor = num3
    Fin Si
    
    Escribir "El mayor n?mero es: ", mayor
FinProceso