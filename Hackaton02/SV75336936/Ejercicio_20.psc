Proceso Ejercicio_20
	Definir n1, n2, n3, n4 Como Entero
    Definir contadorpares, mayor, cuadradosegundo, media, suma Como Real
    
    Escribir "Ingrese el primer número entero positivo:"
    Leer n1
    Escribir "Ingrese el segundo número entero positivo:"
    Leer n2
    Escribir "Ingrese el tercero número entero positivo:"
    Leer n3
    Escribir "Ingrese el cuarto número entero positivo:"
    Leer n4
    
    contadorpares = 0
    Si n1 MOD 2 = 0 Entonces
        contadorpares = contadorpares + 1
    FinSi
    Si n2 MOD 2 = 0 Entonces
        contadorpares = contadorpares + 1
    FinSi
    Si n3 MOD 2 = 0 Entonces
        contadorpares = contadorpares + 1
    FinSi
    Si n4 MOD 2 = 0 Entonces
        contadorpares = contadorpares + 1
    FinSi
    
    mayor = n1
    Si n2 > mayor Entonces
        mayor = n2
    FinSi
    Si n3 > mayor Entonces
        mayor = n3
    FinSi
    Si n4 > mayor Entonces
        mayor = n4
    FinSi
    
    Si n3 MOD 2 = 0 Entonces
        cuadradosegundo <- n2 * n2
        Escribir "El cuadrado del segundo número es: ", cuadradosegundo
    FinSi
    

    Si n1 < n4 Entonces
        media = (n1 + n2 + n3 + n4) / 4
        Escribir "La media de los cuatro números es: ", media
    FinSi
    
    Si n2 > n3 Entonces
        Si n3 >= 50 Y n3 <= 700 Entonces
            suma <- n1 + n2 + n3 + n4
            Escribir "La suma de los cuatro números es: ", suma
        FinSi
    FinSi
    
    Escribir "Cantidad de números pares: ", contadorpares
    Escribir "El mayor de todos los números es: ", mayor
FinProceso
