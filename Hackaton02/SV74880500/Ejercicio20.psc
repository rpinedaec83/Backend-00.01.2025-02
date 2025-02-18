Algoritmo operaciones
    Definir num1, num2, num3, num4, cantidad_pares, mayor, suma, media, cuadrado_num2 Como Entero
	
    cantidad_pares = 0
    suma = 0
    mayor = 0
	
    Escribir "Introduce el primer número: "
    Leer num1
    Escribir "Introduce el segundo número: "
    Leer num2
    Escribir "Introduce el tercer número: "
    Leer num3
    Escribir "Introduce el cuarto número: "
    Leer num4
	
    Si num1 MOD 2 = 0 Entonces
        cantidad_pares = cantidad_pares + 1
    FinSi
    Si num2 MOD 2 = 0 Entonces
        cantidad_pares = cantidad_pares + 1
    FinSi
    Si num3 MOD 2 = 0 Entonces
        cantidad_pares = cantidad_pares + 1
    FinSi
    Si num4 MOD 2 = 0 Entonces
        cantidad_pares = cantidad_pares + 1
    FinSi
	
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
	
    Si num3 MOD 2 = 0 Entonces
        cuadrado_num2 = num2 * num2
        Escribir "El cuadrado del segundo número es: ", cuadrado_num2
    FinSi
	
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
        Escribir "La media de los 4 números es: ", media
    FinSi
	
    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            suma = num1 + num2 + num3 + num4
            Escribir "La suma de los 4 números es: ", suma
        FinSi
    FinSi
	
    Escribir "Cantidad de números pares: ", cantidad_pares
    Escribir "El mayor número es: ", mayor
FinAlgoritmo