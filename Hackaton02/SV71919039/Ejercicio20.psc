Proceso Ejercicio20
    Definir num1, num2, num3, num4, contador_pares, mayor Como Entero
	
    contador_pares = 0
    mayor = 0
	
    Escribir "Ingrese el primer número positivo: "
    Leer num1
    Escribir "Ingrese el segundo número positivo: "
    Leer num2
    Escribir "Ingrese el tercer número positivo: "
    Leer num3
    Escribir "Ingrese el cuarto número positivo: "
    Leer num4
	
    
    Si num1 % 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
    Si num2 % 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
    Si num3 % 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
    Si num4 % 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
	
    Escribir "Cantidad de números pares: ", contador_pares
	
    mayor = num1
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
	
    Escribir "El mayor de los números es: ", mayor
	
    Si num3 % 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es: ", num2 * num2
    FinSi
	
    Si num1 < num4 Entonces
        Escribir "La media de los 4 números es: ", (num1 + num2 + num3 + num4) / 4
    FinSi
	
    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            Escribir "La suma de los 4 números es: ", num1 + num2 + num3 + num4
        FinSi
    FinSi
FinProceso