//Ejercicio20
//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se 
//cumple la segunda condición, calcular la suma de los 4 números.

Proceso Calcular_numeros
	Definir num1, num2, num3, num4 Como Entero
    Definir contadorPares, may, cuadradoSegundo, media, sumaTotal Como Real
	
    // Leer los 4 números
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    // Contar cuántos son pares
    contadorPares <- 0
    Si num1 MOD 2 = 0 Entonces
        contadorPares <- contadorPares + 1
    FinSi
    Si num2 MOD 2 = 0 Entonces
        contadorPares <- contadorPares + 1
    FinSi
    Si num3 MOD 2 = 0 Entonces
        contadorPares <- contadorPares + 1
    FinSi
    Si num4 MOD 2 = 0 Entonces
        contadorPares <- contadorPares + 1
    FinSi
	
    // Determinar el mayor de los 4 números
    mayor <- num1
    Si num2 > may Entonces
        mayor <- num2
    FinSi
    Si num3 > may Entonces
        mayor <- num3
    FinSi
    Si num4 > may Entonces
        mayor <- num4
    FinSi
	
    // Si el tercero es par, calcular el cuadrado del segundo
    Si num3 MOD 2 = 0 Entonces
        cuadradoSegundo <- num2 * num2
        Escribir "El tercer número es par, el cuadrado del segundo es: ", cuadradoSegundo
    FinSi
	
    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4) / 4
        Escribir "El primero es menor que el cuarto, la media de los 4 números es: ", media
    FinSi
	
    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma total
    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            sumaTotal <- num1 + num2 + num3 + num4
            Escribir "El segundo es mayor que el tercero y el tercero está entre 50 y 700, la suma total es: ", sumaTotal
        FinSi
    FinSi
	
    Escribir "El total de numeros pares es: ", contadorPares
    Escribir "El mayor de todos los números es: ", may
FinProceso
